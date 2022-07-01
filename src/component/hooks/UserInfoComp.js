import React from 'react';
import {useCurrentUser} from "../../hooks/useCurrentUser";
import {useUser} from "../../hooks/useUser";
import {useResource} from "../../hooks/useResource";
import {useDataSource} from "../../hooks/useDataSource";
import axios from "axios";

const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
}

const localStorageResource = key => () => {
    return localStorage.getItem(key);
}

const UserInfoComp = ({ userId }) => {

    // const user = useCurrentUser();
    // const user = useUser(userId);
    // const user = useResource(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = useDataSource(serverResource(`https://jsonplaceholder.typicode.com/users/${userId}`));
    // const message = useDataSource(localStorageResource('message'));

    // const user = null;
    // console.log('Hello World');

    const { name, email, phone } = user || {}

    return user ? (
        <>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </>
    ) : <p>Loading...</p>;
};

export default UserInfoComp;