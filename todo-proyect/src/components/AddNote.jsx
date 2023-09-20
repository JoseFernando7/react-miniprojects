import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext'

function AddNote () {
  const { tasks } = useContext(TaskContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [nextId, setNextId] = useState(4)

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  // Add title to the Notes object array
  const saveNote = (e) => {
    e.preventDefault()

    tasks.push({ id: nextId, title, description, isDone: false })

    setTitle('')
    setDescription('')
    setNextId(nextId + 1)
  }

  return (
    <>
      <main>
        <h1>Add Note</h1>
        <form>
          <input type='text' placeholder='Title' onChange={handleTitleChange} value={title} />
          <textarea placeholder='Description' onChange={handleDescriptionChange} value={description} />
          <button onClick={(e) => saveNote(e)}>Add Note</button>
        </form>
      </main>
    </>
  )
}

export default AddNote
