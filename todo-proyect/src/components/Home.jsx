// import { Notes } from '../notes'
import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context/TaskContext'

function Home () {
  const { tasks } = useContext(TaskContext)
  const [renderedTasks, setRenderedTasks] = useState([])

  useEffect(() => {
    setRenderedTasks(tasks.map((task) => (
      <section key={task.title}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
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
