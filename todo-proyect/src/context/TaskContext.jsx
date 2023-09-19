import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import Tasks from '../tasks'

const TaskContext = createContext()

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function TaskProvider ({ children }) {
  const [tasks, setTasks] = useState(Tasks)

  return <TaskContext.Provider value={{ tasks, setTasks }}>{children}</TaskContext.Provider>
}

export default TaskContext
