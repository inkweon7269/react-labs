import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useUsers } from "../../store-mst";

const User = observer(({ user }) => {
    return (
        <p onClick={() => user.setName('Nice to meet you')}>{user.id} / {user.email} / {user.name}</p>
    )
})

const Mst = () => {
    const userStore = useUsers();

    useEffect(() => {
        (async () => {
            await userStore.fetchUsers();
        })()
    }, [userStore]);

    return (
        <div>
            <h2>모든 사용자</h2>
            {userStore.users.map(user => <User key={user.id} user={user} />)}

            <h2>짝수 ID 사용자</h2>
            {userStore.onlyEven.map(user => <User key={user.id} user={user} />)}
        </div>
    );
};

export default observer(Mst);