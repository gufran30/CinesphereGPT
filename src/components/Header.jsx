import { useDispatch, useSelector } from "react-redux";
import userIcon from "/images/userIcon.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { supportedlanguages } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    // toggle gpt search
    dispatch(toggleGPTSearchView());
  };

  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    // get the current user is by setting an observer on the Auth object
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when components unmounts - this is hygiene practice
    return () => unsubscribe();
  }, []);

  return (
    <header className="nav bg-gradient-to-b from-black p-5 absolute z-1000 left-0 top-0 w-full">
      <div className="px-10 flex items-center justify-between">
        <div className="logo-container">
          <h1 className="text-3xl font-bold text-red-600 text-shadow-black">
            CinesphereGPT
          </h1>
        </div>

        {user && (
          <div className="flex items-center gap-3">
            {showGPTSearch && (
              <div>
                <select
                  onClick={handleLanguageChange}
                  className="text-white bg-gray-900 px-2 py-1"
                >
                  {supportedlanguages.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <button
                onClick={handleGPTSearchClick}
                className="bg-purple-700 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-purple-800"
              >
                {showGPTSearch ? "Homepage" : "GPT Search"}
              </button>
            </div>

            <div className="w-8">
              <img
                className="w-full object-cover object-center"
                src={user?.photoURL || userIcon}
                alt="user icon"
              />
            </div>

            <div>
              <button
                onClick={handleSignout}
                className="bg-gray-600 text-white hover:bg-gray-700 cursor-pointer rounded-md font-semibold text-sm px-2 py-1"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
