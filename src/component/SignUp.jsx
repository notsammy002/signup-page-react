import React from 'react'
import { useNavigate} from "react-router-dom"

const SignUp = () => {
  let checkedOne = false;
  let checkedTwo = false;
  const Navigate = useNavigate();

  const handleChangeOne = (e) => {
    let { value, type, checked } = e.currentTarget;
    checkedOne = checked;
    console.log(checkedOne);
    value = checkedOne;
  };

  const handleChangeTwo = (e) => {
    let { value, type, checked } = e.currentTarget;
    console.log(value);

    checkedTwo = checked;
    console.log(checkedTwo);
    value = checkedTwo;
  };

  const successfullSignIn = () =>{
    if(checkedTwo !== true || checkedOne !== true){
      alert("these are prerequsite")
    }
    else{
      Navigate("/info");
    }
  }



  return (
    <div>
      <form>
        <label>Can you attend 90% of the classees</label>
      <input
        type="checkbox"
        onChange={handleChangeOne}
      />
      <label>Do you have a laptop?</label>
      <input
      type="checkbox"
        onChange={handleChangeTwo}
        
      />
        </form>
        <button onClick={successfullSignIn}>Continue</button>
</div>
  );
}

export default SignUp