import React from "react";

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const getPasswordStrength = (password: string): string => {
    const lengthCriteria = password.length >= 8;
    const upperCaseCriteria = /[A-Z]/.test(password);
    const lowerCaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);

    const strength = [
      lengthCriteria,
      upperCaseCriteria,
      lowerCaseCriteria,
      numberCriteria,
    ].filter(Boolean).length;

    if (strength === 4) return "Strong";
    if (strength === 3) return "Medium";
    if (strength === 2) return "Weak";
    return "";
  };

  return (
    <div aria-live="polite" className="password-strength">
      Password Strength: {getPasswordStrength(password)}
    </div>
  );
};

export default PasswordStrength;
