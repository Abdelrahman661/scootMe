import { Outlet, Link } from "react-router-dom";
import "./App.css";
import welcomelogo from "../public/welcomelogo.svg"
import welcomeland from "../public/welcomeland.svg"

function App() {
  return (
    <div className="flex flex-col h-screen w-full bg-white">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="mb-4">
          <img src={welcomelogo} alt="" />
        </div>

        <div className="w-60 h-60">
          <img
            src={welcomeland}
            alt="Scooter Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <Link
        to="/login"
        className="bg-orange-500 py-4 text-center mx-auto w-[90%] rounded-full mb-5"
      >
        <button className="text-white font-semibold text-lg">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default App;
