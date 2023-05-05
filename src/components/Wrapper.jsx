import React, {useState} from 'react'
import MyContext from '../context/Context'

const Wrapper = ({ children }) => {
  const [name, setName] = useState('')

  return (
    <div>
      <MyContext.Provider value={{ name, setName }}>
        {children}
      </MyContext.Provider>
    </div>
  )
}

export default Wrapper;