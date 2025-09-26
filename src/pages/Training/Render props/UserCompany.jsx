import React from 'react'

const UserCompany = ({ user, userCompany }) => {
    return (
        <div>{userCompany({ user })}</div>
    )
}

export default UserCompany