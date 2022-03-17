import { useContext } from "react";
import { MasaiContext } from "./MasaiContext";
import { useNavigate} from "react-router-dom"


const Register = () => {
    //use of usecontext
    const {infro, setInfro} = useContext(MasaiContext);
    const Navigate = useNavigate();

  const onChangeHandle = (e) => {
    let { name, value} = e.currentTarget;
    console.log(name, value);

    setInfro({
      ...infro,
      [name]: value
    });
}

    //post on dp.json

  const successfullSignIn = (e) => {
    e.preventDefault();
    console.log(infro);
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(infro)
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

      // to sign page
      Navigate("/SignIn");
  };

  return (
      <>
    <div>register</div>
    
      <form>
        <div>
          <label>User name</label>
          <input
            type="text"
            name="user"
            placeholder="Enter your user name"
            value={infro.user}
            onChange={onChangeHandle}
          />

<label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={infro.email}
            onChange={onChangeHandle}
          />

<label>Password</label>
          <input
            type="password"
            name="Password"
            placeholder="Enter your Password"
            value={infro.pws}
            onChange={onChangeHandle}
          />
        </div>
      </form>
      <button onClick={successfullSignIn}> SIGN UP</button>
    </>
  );

};

export default Register
