import React from 'react'
import { USERS } from '../components/FruitsTaskCase/constants'

const Training = () => {
  const data = Object.keys(USERS[0])

  return (
    <table>
      <thead>
        <tr>{data.map((item, idx) => (
          <th key={idx}>{item}</th>
        ))}</tr>
      </thead>
      <tbody>
        {USERS.map(user => (
          <tr key={user.id}>
            {data.map((cur, idx) => (
              <td key={idx}>{user[cur]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Training