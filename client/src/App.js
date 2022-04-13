import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import HomePage from "./Pages/HomePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  const loginCheck = {
    name: "",
    pass: "",
  };

  const [user, setUser] = useState({ name: "" });
  const [error, setError] = useState("");
  const [loginStatus, setLoginStatus] = useState("false");

  //Lougout
  const Logout = () => {
    setLoginStatus("false");
  };

  const Register = (details) => {
    const registerData = JSON.stringify({
      Username: details.name,
      UserPass: details.pass,
    });

    //fetch request
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": "2",
      },
      body: registerData,
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request Failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        if (jsonResponse.errno === 1062) {
          setError("User already exists!");
        } else {
          setError("User registered!");
        }
      });
  };

  const Login = (details) => {
    //Stringify JS Object to pass through to server.
    const loginData = JSON.stringify({
      Username: details.name,
      UserPass: details.pass,
    });

    //fetch request
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": "2",
      },
      body: loginData,
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request Failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        loginCheck.name = jsonResponse.Username;
        loginCheck.pass = jsonResponse.UserPass;
      })
      .then(() => {
        //Checking
        if (
          details.name === loginCheck.name &&
          details.pass === loginCheck.pass
        ) {
          setError("");
          setUser({
            name: details.name,
          });
          setLoginStatus("true");
        } else {
          console.log("Incorrect!");
          setError("Incorrect username or password.");
        }
      });
  };

  return (
    <div className="App">
      {loginStatus === "true" ? (
        <HomePage Username={user.name} Logout={Logout} />
      ) : (
        <LoginForm Login={Login} error={error} Register={Register} />
      )}
    </div>
  );
}

export default App;
