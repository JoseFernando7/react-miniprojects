// import { Notes } from '../notes'
import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context/TaskContext'

function Home () {
  const { tasks, setTasks } = useContext(TaskContext)
  const [renderedTasks, setRenderedTasks] = useState([])

  const handleChange = (task) => {
    const updatedTasks = tasks.map((t) => t.title === task.title ? { ...t, isDone: !t.isDone } : t)
    setTasks(updatedTasks)
  }

  const deleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id)
    setTasks(updatedTasks)
  }

  useEffect(() => {
    setRenderedTasks(tasks.map((task) => (
      <section key={task.id}>
        <h2 style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.title}</h2>
        <p>{task.description}</p>
        <input type='checkbox' onChange={() => handleChange(task)} checked={task.isDone} />
        <button onClick={() => deleteTask(task)}> Delete task </button>
      </section>
    )))
  }, [tasks])

  return (
    <>
      {renderedTasks}

      <button onClick={() => console.log(tasks)}> Ver tasks </button>
    </>
  )
}

export default Home
