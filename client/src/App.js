import { useState, useEffect} from 'react';
import LoginForm from './LoginForm';

function App() {
  const testUser = {
    name: "adminuser",
    pass: "test123"
  }

  const [user, setUser] = useState({name: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    console.log(testUser);
    //Temp Solution, add in Database checking stuffs here.

    if(details.name === testUser.name && details.pass === testUser.pass) {
      setError("");
      setUser({
        name: details.name
      });
    } else {
      setError("Incorrect username or password.");
    }
  }

  const Logout = () => {
    setUser({ name: "" });
  }

  return (
    <div className="App">
      {(user.name != "") ? (
        <div>
          <h1>Welcome, <span>{user.name}</span></h1>
          <button id="logoutBtn" onClick={Logout}>Logout</button>
        </div>
      ) :  (<LoginForm Login={Login} error={error}/>)}
    </div>
  );
}

export default App;
