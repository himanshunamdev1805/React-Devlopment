import { useState, useEffect } from 'react';
import './index.css';
import LoggedIn from './loggedIn';
import ReactDOM from 'react-dom/client';

const RegistrationForm = () => {
  const [data, setData] = useState([])
  const [formsubmit, setFormsubmit] = useState(false)
  const [error, setErrors] = useState({})
  // const [lg, setlg] = useState(false)
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  useEffect(() => {

    // console.log('hello');

    if (Object.keys(error).length === 0 && formsubmit) {
      setErrors(validation(values))
      localStorage.setItem('data', JSON.stringify(data)
      )
      console.log(data);



    }

  }, [data]);
  const handleChange = (e) => {


    setValues({
      ...values,
      [e.target.name]: e.target.value,

    })
  };


  // console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((values.name === '' || values.name === null)) {
      alert("enter name")
      // <p>{error.name}</p>
    } else {
      // console.log(values)
      setErrors(validation(values))

      setFormsubmit(true)
      setData([...data, values])
    }


  }





  const validation = (val) => {

    const error = {}

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!val.name) {

      error.name = 'Username is requrired';

    } if (!val.email) {

      error.email = 'Email is requrired';

    } else if (!regex.test(values.email)) {

      error.email = 'This is not a valid email format';

    }

    if (!val.password) {

      error.password = 'Password is requrired';

    } else if (values.password >= 8) {

      error.password = 'Password cant be less than 8 Characters and combination of letter and  numbers';

    }


    return error


   
  }
//  const handleClick = (e) => {
//     e.preventDefault();
//     <LoggedIn/>
//     console.log('The link was clicked.');
//   };

  return (

    <div className="App">

      <div className="title">Welcome</div>
      <div className="subtitle">User Registration-Form! </div>
      <p>{error.name}</p>
      <p>{error.email}</p>
      <p>{error.password}</p>

      <form>

        <div className="input-container ic2">

          <input name='name' className="input" type="text" placeholder="FullName" value={values.name} onChange={handleChange} />

          <div className="cut"></div>


        </div>


        <div className="input-container ic2">
          {values.error}


          <input name='email' className="input" type="text" placeholder="Email" value={values.email} onChange={handleChange} />
          <div className="cut cut-short"></div>

        </div>

        <div className="input-container ic2">
          <input name='password' className="input" type="password" placeholder="Password" value={values.password} onChange={handleChange} />
          <div className="cut cut-short"></div>

        </div>


        <div>
          <button type="text" className="submit" onClick={handleSubmit}>SignUp</button>
        </div>
        
      </form>
      <div>
      {/* <a href="#" onClick={handleClick}> Login</a> */}
        </div>
    </div>


  );
}

export default RegistrationForm;
