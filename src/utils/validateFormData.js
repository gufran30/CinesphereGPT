export const validateFormData = (email, password, name, isSignUpForm) => {
  // check for empty inputs
  if (!email) return "Email is required";
  if (!password) return "Password is required";

  // Regex expression for validating name, email & password
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  if (!isEmailValid) return "Invalid email address format.";

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.{8,32}$)/.test(
      password
    );

  if (!isPasswordValid)
    return "Password must be 8-32 characters and include uppercase, lowercase, number, and special characters.";

  // --- Sign Up Specific Validation ---
  // If it's the sign-up form, also validate the name.
  if (!isSignUpForm) {
    if (!name) return "Name is required";
    if (name.length < 3) return "Full name must be at least 3 characters long.";
  }

  // If all checks pass, return null to indicate successful validation
  return null;
};
