import React, { useMemo, useRef, useState } from 'react'

const Training = () => {
  const [messages, setMessages] = useState([])
  const refMessage = useRef(null)

  const sendMessage = () => {
    setMessages(prev => [{
      id: Date.now(),
      count: 0,
      text: refMessage.current.value
    }, ...prev])
    setTimeout(() => refMessage.current.value = '')
    refMessage.current.focus()
  }

  const allCount = useMemo(() => messages.reduce((acc, item) => acc + item.count, 0), [messages])

  const addLike = (id) => {
    setMessages(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 }
      } else {
        return item
      }
    }))
  }

  return (
    <div>
      <h3>Likes: {allCount}</h3>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <h4>id: {message.id}</h4>
            <p>Count: {message.count}</p>
            <p>text: {message.text}</p>
            <button onClick={() => addLike(message.id)}>Like</button>
          </li>
        ))
        }
      </ul>
      <input placeholder='Написать сообщение' ref={refMessage} />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Training