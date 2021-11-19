import React, { useState } from "react";

// i18n IMPORTS
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// LANGUAGES IMPORTS
import TRANSLATIONS_EN from "./en/translations.json";
import TRANSLATIONS_DE from "./de/translations.json";

// MUI IMPORTS
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

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
  const [language, setLanguage] = useState("en");

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
        ></InputLabel>
        <NativeSelect onChange={handleOnclick}>
          <option value="en" onClick={handleOnclick}>
            EN
          </option>
          <option value="de" onClick={handleOnclick}>
            DE
          </option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default LanguageSwitch;
