import React, {useState} from "react";
import "../components/RegistrationForm.css"


const RegistrationForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError("All fields are required.");
            return;
        }

        setError("");
        console.log("Form submitted:", { username, email, password });
    };

    return (
   <form onSubmit={handleSubmit} className="form-container">
    <h2>Register</h2>

    {error && <p className="error">{error}</p>}

    <div className="form-group">
        <label htmlFor="Username">Username</label>
        <input 
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
    </div>

    <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input 
        type="text" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
    </div>

     <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
    </div>

     <button type="submit" className="submit-btn">
            Submit
        </button>
   </form>

    )
}

export default RegistrationForm;