import React, { useState } from "react";
import axios from "axios";

// TRANSLATION IMPORTS
import { useTranslation } from "react-i18next";

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

  // TRANSLATION
  const { t } = useTranslation();

  return (
    <div className="newadmin_input">
      <div className="newadmin_input_wrapper">
        <input
          type="email"
          value={newAdminEmail}
          onChange={(e) => setNewAdminEmail(e.target.value)}
          placeholder={t("dashboardRightDrawer.formDesc01")}
        />
        <button onClick={handleAddAdmin}>{t("dashboardRightDrawer.formButton01")}</button>
      </div>
    </div>
  );
}

export default NewAdmin;
