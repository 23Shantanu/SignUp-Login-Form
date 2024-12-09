import React from "react";

interface FormSwitchProps {
  switchToSignUp: () => void;
  switchToLogin: () => void;
}

const FormSwitch: React.FC<FormSwitchProps> = ({
  switchToSignUp,
  switchToLogin,
}) => {
  return (
    <div className="form-switch">
      <p>
        <button type="button" onClick={switchToSignUp}>
          Don't have an account? Sign Up
        </button>
      </p>
      <p>
        <button type="button" onClick={switchToLogin}>
          Already have an account? Login
        </button>
      </p>
    </div>
  );
};

export default FormSwitch;
