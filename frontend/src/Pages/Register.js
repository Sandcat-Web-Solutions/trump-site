import { useState } from "react"
import axios from "axios";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";
import { ToastContainer, toast } from "react-toastify";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const backendURL = "http://localhost:8000";

    async function handleRegister() {
        try {
            const response = await axios.post(`${backendURL}/api/register`, {
                username: username,
                password: password
            });
            const token = response.data;

            sessionStorage.setItem("token", token);
            window.location.href="/";

        } catch (error) {
            if (error.response) {
                if(error.response && error.response.status === 409){
                    conflictError();
                    setUsername("");
                } else{
                    
                registerError();
                }
            } else if (error.request) {
                registerError();
            } else {
                console.log("error :(");
            }
        }
    }

    const registerError = () => {
        toast.error(
            <div className="Toast">
                <p>Register failed, try again</p>
            </div>,
            {
                position: toast.POSITION.TOP_CENTER,
            }
        );
    };

    const conflictError = () => {
        toast.error(
            <div className="Toast">
                <p>Username conflict, pick a different username</p>
            </div>,
            {
                position: toast.POSITION.TOP_CENTER,
            }
        );
    };

    return (
        <Container fluid className="LoginContainer">
            <ToastContainer/>
            <Header />
            <div className="LoginDiv">
                <h1>Register</h1>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type="button" value="Register" onClick={handleRegister}></input>
                <input type="text" value="already have an account?" className="SwitchLogin" onClick={() => window.location = "/login"}></input>
            </div>
        </Container>
    );
}; export default Register;