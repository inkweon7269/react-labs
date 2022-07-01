import {withEditableUser} from "./withEditableUser";
import {withEditableResource} from "./withEditableResource";

export const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, email, phone } = user || {}

    return user ? (
        <>
            <label>Name:</label>
            <input value={name} onChange={e => onChangeUser({ name: e.target.value })}/>

            <label>email:</label>
            <input value={email} onChange={e => onChangeUser({ email: e.target.value })}/>

            <label>phone:</label>
            <input value={phone} onChange={e => onChangeUser({ phone: e.target.value })}/>

            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save Changes</button>
        </>
    ) : <p>Loading...</p>;
}, 'https://jsonplaceholder.typicode.com/users/1', 'user')

/*
export const UserInfoForm = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, email, phone } = user || {}

    return user ? (
        <>
            <label>Name:</label>
            <input value={name} onChange={e => onChangeUser({ name: e.target.value })}/>

            <label>email:</label>
            <input value={email} onChange={e => onChangeUser({ email: e.target.value })}/>

            <label>phone:</label>
            <input value={phone} onChange={e => onChangeUser({ phone: e.target.value })}/>

            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save Changes</button>
        </>
    ) : <p>Loading...</p>;
}, 1)
*/
