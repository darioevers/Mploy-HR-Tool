import React, { useState } from "react";

// REACT FLAG SELECT IMPORT
import ReactFlagsSelect from 'react-flags-select';
import { Gb } from 'react-flags-select';
import { De } from 'react-flags-select';

// i18n IMPORTS
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// LANGUAGES IMPORTS
import TRANSLATIONS_EN from "./en/translations.json";
import TRANSLATIONS_DE from "./de/translations.json";

// FLAG IMPORTS
import germanyFlag from "../img/graphics/germany.png";
import ukFlag from "../img/graphics/united-kingdom.png";

// MUI IMPORTS
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      de: {
        translation: TRANSLATIONS_DE,
      },
    },
  });

const LanguageSwitch = () => {


  const [language, setLanguage] = useState("");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      {/* <form autoComplete="off">
        <FormControl sx={{ width: "5em", color: "text.primary" }}>
          <InputLabel variant="standard"
            htmlFor="uncontrolled-native" />
          <Select
            name="languages"
            onClick={handleOnclick}
          >
            <MenuItem value="en">
              <img src={ukFlag} alt="UK Flag" />
            </MenuItem>
            <MenuItem value="de">
              <img src={germanyFlag} alt="German Flag" />
            </MenuItem>
          </Select>
        </FormControl>
      </form > */}
      <FormControl
        sx={{
          width: "5em",
          color: "text.primary"
        }}>
        <NativeSelect
          onChange={handleOnclick}
          onClick={handleOnclick}
          value={language}
          sx={{ color: "text.primary" }}>
          <option value="en">
            EN
          </option>
          <option value="de">
            DE
          </option>
        </NativeSelect>
      </FormControl>
    </div >
  );
};

export default LanguageSwitch;
