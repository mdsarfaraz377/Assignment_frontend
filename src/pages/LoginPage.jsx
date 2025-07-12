import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const navigate = useNavigate();  
          

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();  

        if (email === "staff@clinic.com" && password === "123456") {
            navigate("/calender");   
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Clinic Staff Login</h2>
    
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="staff@clinic.com"
                />
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 
                  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123456"
                />
              </div>
    
              {error && <p className="text-red-500 text-sm">{error}</p>}
    
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 
                rounded-md hover:bg-blue-700 transition duration-200"
              >
                Login
              </button>
            </form>        
          </div>
        </div>
      );
};
    
export default LoginPage;