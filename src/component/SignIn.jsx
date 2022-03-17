
import React, { useState,useContext} from 'react'
import { MasaiContext } from "./MasaiContext";
import { useNavigate} from "react-router-dom"

const SignIn = () => {
    let [user, setUser] = useState([]);
    const Navigate = useNavigate();
    const {infro} = useContext(MasaiContext);

  const onChangeHandle = (e) => {
    let { name, value} = e.currentTarget;

    console.log(name, value);

    setUser({
      ...user,
      [name]: value
    });
  }

  const successfullSignIn = () =>{
    if(infro.email !== user.email || infro.pws !== user.pwd || infro.email !== "" || infro.pws !== ""){
      alert("Wrong email/ password")
      setUser("");
    }
    else{
      Navigate("/Dashboard");
    }
  }


  return (
    <>
    <form>
   <label>Email</label>
           <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={onChangeHandle}
          />

<label>Password</label>
          <input
            type="text"
            name="Password"
            placeholder="Enter your Password"
            value={user.pwd}
            onChange={onChangeHandle}
          />
</form>
    <button onClick={successfullSignIn}> SIGN IN</button>
      </>
  )
}

export default SignIn


// import React, { useContext} from 'react'
// import { MasaiContext } from "./MasaiContext";

// const SignIn = () => {
//   const {user, setUser} = useContext(MasaiContext);

//   const onChangeHandle = (e) => {
//     let { name, value} = e.currentTarget;
//     console.log(name, value);

//     setUser({
//       ...user,
//       [name]: value
//     });
// }
//   return (
//     <>
//     <div>SignIn</div>
//     <form>
//     <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             placeholder="Enter your email"
//             value={user.email}
//             onChange={onChangeHandle}
//           />

// <label>Password</label>
//           <input
//             type="password"
//             name="Password"
//             placeholder="Enter your Password"
//             value={user.pws}
//             onChange={onChangeHandle}
//           />

//         <a href="/" >
//         Sign In
//       </a>
//       </form>
//       </>
//   );
// };

// export default SignIn