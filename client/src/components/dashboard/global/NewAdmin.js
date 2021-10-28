import React, { useState } from "react";
import axios from "axios";

function NewAdmin() {
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
    <div className="newadmin_input">
      <div className="newadmin_input_wrapper">
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

export default NewAdmin;
