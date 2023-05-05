import React, { useContext } from "react";
import MyContext from '../context/Context';

const Form = (props) => {
  const currentName = useContext(MyContext);
  
  const handleName = e => {
    currentName.setName(e.target.value)
  }

  return (
    <div className="container">
      <form>
        <div className="form">
          <label className="label">Your Name: </label>
          <input type="text" onChange={ handleName } value={currentName.name}/>
        </div>
      </form>
    </div>
  );
};

export default Form;