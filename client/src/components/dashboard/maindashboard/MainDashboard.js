import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import Widgets from "./widgets/Widgets";
import WelcomeMessage from "./widgets/WelcomeMessage";

function MainDashboard() {
  const [privateData, setPrivateData] = useState("");

  const history = useHistory();
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
        setPrivateData(data.user);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("authToken");
      }
    };
    fetchPrivateData();
  }, [history]);
  // for logining out

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/");
    // should go to the /
  };

  return (
    <div className="maindashboard_area">
      <DashboardTopNav />
      <DashboardSideNav userdata={privateData} logout={logoutHandler} />
      <Widgets userdata={privateData} />
    </div>
  );
}
export default MainDashboard;
