import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
const App: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Start with SignUp form

  // Function to toggle between SignUp and Login forms
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="app-container">
      {isSignUp ? (
        <SignUpPage toggleForm={toggleForm} />
      ) : (
        <LoginPage toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default App;
