import { useState, useEffect } from "react";
import axios from "axios";

const Logout = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  // if there is nothing in the local storage we immediatly
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get(
          "http://localhost:5000/dashboard",
          config
        );
        console.log(data);
        setPrivateData(data.data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("authToken");
        setError("You are not authorized Please Login!");
      }
    };
    fetchPrivateData();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/");
    // should go to the /
  };

  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default Logout;
