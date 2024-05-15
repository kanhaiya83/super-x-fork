import { useEffect, useState } from "react";
import googleIcon from "../assets/images/google.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { handleEmailLinkLogin, handleLogin } from "../config/firebase";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../context/authContext";
const LoginPage = () => {
  const { user } = useAuthContext();
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      if (location.state && location.state.from) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="border border-slate-600 rounded py-4 mx-auto max-w-[700px] my-20">
        <h1 className="text-white text-3xl font-semibold pb-2 mb-2 px-5 text-center">
          Welcome to SuperX
        </h1>
        <div className="px-5 flex flex-col items-center">
          {/* <h5 className="text-xl mb-3 text-slate-800">
                Please login with your Google account to continue.
              </h5> */}
          <input
            type="email"
            className="py-3 px-2 rounded border-slate-200 border-2 w-full max-w-xs"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={() => {
              handleEmailLinkLogin(email);
            }}
            className={`bg-violet-700 text-white font-semibold p-3 rounded mt-3 mb-3 mx-auto block w-full max-w-xs`}
            disabled={!email}
          >
            Login
          </button>
          <p className="text-center">OR</p>
          <button
            onClick={handleLogin}
            className={`bg-slate-200 p-5 rounded mt-3 mx-auto block w-full max-w-xs`}
          >
            <div className="flex items-center justify-center">
              <img src={googleIcon} alt="" className="w-6 mr-1" />
              <span>Login with Google</span>
            </div>
          </button>
          <div className="flex items-center justify-center mt-2">
            {/* <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-5 h-5 mr-2"
                  value={isChecked}
                  onChange={(e) => {
                    setIsChecked(e.target.checked);
                  }}
                /> */}
            <span className="text-lg text-center text-slate-400">
              By continuing,you agree to the{" "}
              <span className=" text-blue-400">Terms</span> and{" "}
              <span className="text-blue-400">Privacy Policy</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
