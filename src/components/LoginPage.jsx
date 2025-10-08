import { useRef, useState } from "react";
import { validateFormData } from "../utils/validateFormData";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import userIcon from "/images/userIcon.png";
import bgBanner from "/images/bg-img.png";

const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // useRef avoids re-rendering the component on every keystroke.
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  // Toggles the form type and clears any previous error messages
  const handleSignInSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    // Get the name value only if it's the sign-up form, otherwise it's an empty string
    const nameValue = !isSignInForm ? name.current.value : null;

    // Call the validation utility function with the form data
    const msg = validateFormData(
      emailValue,
      passwordValue,
      nameValue,
      isSignInForm
    );
    setErrorMessage(msg);

    // If the validation function returns a message, it means there's an error, so we stop here.
    if (msg) return;

    // Firebase logic ---- Sign in - Sign up

    if (!isSignInForm) {
      // Signup
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: nameValue,
            photoURL: userIcon,
          })
            .then(() => {
              // Profile updated!
              // dispatch user data to appStore
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      // Signin
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="login-page relative w-full min-h-dvh bg-stone-800 text-white flex justify-center items-center">
      <Header />
      <div className="bg-container absolute inset-0 w-full h-full before:content-[''] before:bg-black/50 before:absolute before:inset-0">
        <img
          className="w-full h-full object-cover"
          src={bgBanner}
          alt="Background Image"
        />
      </div>

      <div className="bg-black/70 rounded-md absolute z-50 text-white max-w-[31rem] w-[50%] min-w-[25rem] p-18">
        <form onSubmit={handleFormSubmit}>
          <h1 className="text-3xl font-bold mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div>
            {!isSignInForm && (
              <input
                ref={name}
                className="w-full bg-stone-800/70 px-4 py-3 mb-4  rounded-sm border border-gray-500"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
              />
            )}

            <div>
              <input
                ref={email}
                className="w-full bg-stone-800/70 px-4 py-3 mb-4  rounded-sm border border-gray-500"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                ref={password}
                className="w-full bg-stone-800/70 px-4 py-3 mb-4  rounded-sm border border-gray-500"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-600/90 p-2 rounded-sm font-semibold cursor-pointer"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {!errorMessage ? null : (
              <p className="text-sm text-red-600 font-semibold ml-1 mt-2">
                *{errorMessage}
              </p>
            )}
          </div>
          <div className="mt-4">
            <p>
              <span className="text-gray-400 mr-1">
                {isSignInForm
                  ? "New to CinesphereGPT?"
                  : "Already have an account?"}
              </span>

              <span
                onClick={handleSignInSignUpForm}
                className="font-semibold hover:underline cursor-pointer"
              >
                {isSignInForm ? "Sign up now." : "Sign in now."}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
