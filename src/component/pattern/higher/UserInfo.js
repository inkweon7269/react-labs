import React from 'react';

const UserInfo = ({ user }) => {
    const { name, email, phone } = user || {}

    return user ? (
        <>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </>
    ) : <p>Loading...</p>;
};

export default UserInfo;