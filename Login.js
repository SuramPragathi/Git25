import React from "react";
import './Login.css';
function Login(){
    const handleSubmitClick=()=>{
        alert("Successfully Booked");
    }
    return(
        <div className="App">
            <form autoComplete="off">
                <h2>Login</h2>
                <input placeholder="Username" />
                <input placeholder="Email" />
                <input placeholder="Password" />
                <select>
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>
            <input type="submit" onClick={handleSubmitClick} />
            </form>
            </div>
    );

}
export default Login; 