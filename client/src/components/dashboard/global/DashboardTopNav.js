import React, { useState } from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchButton from "./SearchButton";
import axios from "axios";

function TopNav() {
  const [newAdminEmail, setNewAdminEmail] = useState("");

  const handleAddAdmin = () => {
    console.log(newAdminEmail);
    axios
      .patch(
        "http://localhost:5000/dashboard/addAdmin",
        { newAdminEmail },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setNewAdminEmail("");
  };

  return (
    <div className="topnav_mainbox">
      <div className="logo">
        <h1>Mploy</h1>
      </div>
      <div className="top-nav-line"></div>
      <SearchButton />
      <div className="language_switch">
        <div className="eng_wrapper">
          <p>ENG</p>
        </div>
        <div className="deu_wrapper">
          <p>DEU</p>
        </div>
      </div>
      <div className="darkmode_switch">
        <DarkModeSwitch />
      </div>
      <div>
        <input
          type="email"
          value={newAdminEmail}
          onChange={(e) => setNewAdminEmail(e.target.value)}
          placeholder="New Admin email"
        />
        <button onClick={handleAddAdmin}>Add +</button>
      </div>
    </div>
  );
}
export default TopNav;
