import React from 'react'

const UserAdress = ({ user, userAddress }) => {
    return (
        <div>{userAddress({ user })}</div>
    )
}

export default UserAdress