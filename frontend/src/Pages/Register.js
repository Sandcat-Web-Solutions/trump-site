import { useState } from "react"
import { Container } from "react-bootstrap";
import Header from "../Components/Header";

function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <Container fluid className="LoginContainer">
            <Header/>
       <div className="LoginDiv">
       <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <input type="button" value="Register"></input>
            <input type="text" value="already have an account?" className="SwitchLogin" onClick={() => window.location="/login"}></input>
        </div>
        </Container>
    );
}; export default Register;