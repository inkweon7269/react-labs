import {useEffect, useState} from "react";
import axios from "axios";

export const withEditableUser = (Component, userId) => {
    return props => {
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data);
            })();
        }, [])

        const onChangeUser = changes => {
            console.log(changes);
            setUser({...user, ...changes});
        }

        const onSaveUser = async () => {
            console.log('onSaveUser');
            // setOriginalUser()
            // setUser()
        }

        const onResetUser = () => {
            console.log('onResetUser');
            // setUser(originalUser);
        }

        return (
            <Component
                {...props}
                user={user}
                onChangeUser={onChangeUser}
                onSaveUser={onSaveUser}
                onResetUser={onResetUser}
            />
        )
    }
}