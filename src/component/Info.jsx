import { useContext } from "react";
import { MasaiContext } from "./MasaiContext";
import { useNavigate} from "react-router-dom"

function InfroInput() {
  //use of usecontext
    const {infro, setInfro} = useContext(MasaiContext)
    const Navigate = useNavigate();

  const onChangeHandle = (e) => {
    let { name, value} = e.currentTarget;
    console.log(name, value);

    setInfro({
      ...infro,
      [name]: value
    });

  };

  

  return ( 
    <div>
      <form>

        <div>
          <label>Highest qualification</label>
          <input
            type="text"
            name="hq"
            placeholder="Enter your Highest qualification"
            value={infro.hq}
            onChange={onChangeHandle}
          />

          <label>Passing year</label>
          <input
            type="number"
            name="py"
            placeholder="Enter your Passing year"
            value={infro.py}
            onChange={onChangeHandle}
          />

          <label>date of birth</label>
          <input
            type="number"
            name="dob"
            placeholder="Enter your date of birth"
            value={infro.dob}
            onChange={onChangeHandle}
          />

          <label>Gender</label>
          <select
            name="Gender"
            value={infro.gender}
            onChange={onChangeHandle}
          >
            <option value=""></option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>

          <label>state</label>
          <input
            type="text"
            name="state"
            value={infro.state}
            onChange={onChangeHandle}
          />


        </div>
      </form>
      <button onClick={(successfullSignIn)=>{ Navigate("/register");}}> SUBMIT</button>
    </div>
  );
}

export default InfroInput;
