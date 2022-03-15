import React, {useState} from 'react'

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name: "", pass: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
        <h2>Welcome!</h2>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
            <label htmlFor="name">Username: </label>
            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>
        <div className="form-inner">
            <label htmlFor="pass">Password: </label>
            <input type="password" name="pass" id="pass" onChange={e => setDetails({...details, pass: e.target.value})} value={details.pass}/>
        </div>
        <div className="form-inner"><input type="submit" value="Login" /></div>
    </form>
  )
}

export default LoginForm