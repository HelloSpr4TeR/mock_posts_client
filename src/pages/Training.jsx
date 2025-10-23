import React, { useRef, useState } from 'react'


const Training = () => {
  const refText = useRef(null)
  const editRef = useRef(null)
  const [addText, setAddText] = useState([])

  const addNewText = () => {
    setAddText(prev => [{
      id: Date.now(),
      text: refText.current.value,
      edit: false,
      dis: false
    }, ...prev])
    setTimeout(() => { refText.current.value = '' })
  }

  const deleteText = (id) => {
    setAddText(prev => prev.filter(item => {
      return item.id !== id
    }))
  }

  const editText = (id) => {
    setAddText(prev => prev.map(item => {
      if (item.id === id) {
        item.text = editRef.current.value
        editRef.current.value = ''
        item.edit = !item.edit
      } else {
        item.dis = !item.dis
      }
      return item
    }))
  }

  const editFlag = (id) => {
    setAddText(prev => prev.map((item => {
      if (item.id === id) {
        item.edit = !item.edit
      } else {
        item.dis = !item.dis
      }
      return item
    })))
  }

  return (
    <div>
      <input ref={refText} placeholder='напиши текст' />
      <button onClick={addNewText}>Добавить текст в массив</button>
      <ul>
        {addText.map(item => (
          <li key={item.id}>
            <h4>{item.id}</h4>
            <p>{item.text}</p>
            {item.edit ?
              <div>
                <input placeholder='Редактировать' ref={editRef} />
                <button onClick={() => editText(item.id)}>Сохранить</button>
              </div>
              : <button onClick={() => editFlag(item.id)} disabled={item.dis}>Редактировать</button>
            }
            <button onClick={() => deleteText(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Training