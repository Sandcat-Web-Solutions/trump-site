import { useState } from "react"
import { Container } from "react-bootstrap";
import Header from "../Components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    const backendURL = "http://localhost:8000";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    const navigate = useNavigate();
    
    async function handleLogin() {
        try {
            const response = await axios.post(`${backendURL}/api/login`, {
                username: username,
                password: password
            });
            const token = response.data;

            sessionStorage.setItem("token", token);
            navigate(-1);
        } catch (error) {
            if (error.response) {
                console.log("errr from server :(");
            } else if (error.request) {
                console.log("error getting response from server :(")
            }
            else {
                console.log("error :(");
            };
        };
    };
    return (
        <Container fluid className="LoginContainer">
            <Header />
            <div className="LoginDiv">
                <h1>Login</h1>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type="button" value="Login" onClick={handleLogin}></input>
                <input type="text" value="don't have an account?" className="SwitchLogin" onClick={() => window.location = "/register"}></input>
            </div>
        </Container>
    );
}; export default Login;