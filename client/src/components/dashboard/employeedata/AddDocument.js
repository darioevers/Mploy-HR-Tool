import React, { useState, useEffect } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { FormGroup } from "@material-ui/core";
import axios from "axios";

const AddDocument = ({ location, history }) => {
  //ALERT BOX
  const [isShowingAlert, setShowingAlert] = useState(false);

  const [allData, setAllData] = useState(
    location.state && location.state.employeeData
  );

  const [file, setFile] = useState();
  const [fileCv, setFileCv] = useState();
  const [fileDiploma, setFileDiploma] = useState();
  const [fileLetter, setFileLetter] = useState();
  const [fileCertificate, setFileCertificate] = useState();

  const addNew = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("fileCv", fileCv);
    data.append("fileDiploma", fileDiploma);
    data.append("fileLetter", fileLetter);
    data.append("fileCertificate", fileCertificate);
    console.log(data);

    const readyTOSend = JSON.stringify(allData);
    data.append("allData", readyTOSend);
    console.log(data);
    axios
      .post(
        "http://localhost:5000/employee/addemployee",
        data,

        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  //upload success change state
  const [cvUploaded, setCvUploaded] = useState(false);
  const [diplomaUploaded, setDiplomaUploaded] = useState(false);
  const [certUploaded, setCertUploaded] = useState(false);
  const [letterUploaded, setLetterUploaded] = useState(false);

  const handleCvUpload = () =>
    setTimeout(() => {
      setCvUploaded(!cvUploaded);
    }, 2000);

  const handleDiplomaUpload = () =>
    setTimeout(() => {
      setDiplomaUploaded(!diplomaUploaded);
    }, 2000);

  const handleCertUpload = () =>
    setTimeout(() => {
      setCertUploaded(!certUploaded);
    }, 2000);

  const handleLetterUpload = () =>
    setTimeout(() => {
      setLetterUploaded(!letterUploaded);
    }, 2000);

  //image preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    setFile(e.target.files[0]);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  //date uploaded
  const [dateCv, setDateCv] = useState("");
  const [dateDiploma, setDateDiploma] = useState("");
  const [dateCert, setDateCert] = useState("");
  const [dateLetter, setDateLetter] = useState("");

  const handleDateChangeCv = () => {
    let today = new Date();
    let dateToday =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    return dateToday;
  };

  const handleDateChangeDiploma = () => {
    let today = new Date();
    let dateToday =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    return dateToday;
  };

  const handleDateChangeCert = () => {
    let today = new Date();
    let dateToday =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    return dateToday;
  };

  const handleDateChangeLetter = () => {
    let today = new Date();
    let dateToday =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    return dateToday;
  };

  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />

      <div className="addhrinfo_wrapper">
        <h1> Add New Employee </h1>
        <div className="addhrinfo_header">
          <div
            className="inactive_tab"
            onClick={() => {
              history.push({
                pathname: "/dashboard/employeedata/addemployee",
                state: { allData },
              });
            }}
          >
            <h4>General Data</h4>
          </div>
          <div
            className="inactive_tab"
            onClick={() => {
              history.push({
                pathname: "/dashboard/employeedata/addhrinfo",
                state: { allData },
              });
            }}
          >
            <h4>HR Information</h4>
          </div>
          <div className="active_tab">
            <h4>Documents</h4>
          </div>
        </div>

        <FormGroup>
          <div className="adddocuments_wrapper">
            <div className="form_header_photo">
              <div className="photo">
                <div className="dummy_photo">
                  <i>
                    <AccountCircleIcon style={{ fontSize: "135" }} />
                  </i>
                </div>
                <div className="upload-photo">
                  <label for="file">Upload Photo +</label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={onSelectFile}
                  />
                  {selectedFile && <img src={preview} />}
                </div>
              </div>
            </div>

            <div className="file_uploads_header">
              <h3>File Uploads</h3>
            </div>

            <div className="file_uploads_container">
              <div className="upload_cv">
                <div className="upload_content">
                  <div className="upload_content_top">
                    <p
                      className={cvUploaded ? "cv-not-uploaded" : "cv-uploaded"}
                    >
                      CV
                    </p>
                    <p
                      className={cvUploaded ? "cv-uploaded" : "cv-not-uploaded"}
                    >
                      <CheckCircleOutlineIcon style={{ fontSize: "45px" }} />
                    </p>
                  </div>
                  <div className="upload_content_date">
                    <h3>Date of Upload</h3>
                    <h4>{dateCv}</h4>
                  </div>
                </div>
                <div className="upload_button">
                  <label for="fileCv">Upload CV +</label>
                  <input
                    type="file"
                    name="fileCv"
                    id="fileCv"
                    onChange={(e) => setFileCv(e.target.files[0])}
                    onClick={() => {
                      handleCvUpload();
                      setDateCv(handleDateChangeCv(dateCv));
                    }}
                  />
                </div>
              </div>

              <div className="upload_diploma">
                <div className="upload_content">
                  <div className="upload_content_top">
                    <p
                      className={
                        diplomaUploaded
                          ? "diploma-not-uploaded"
                          : "diploma-uploaded"
                      }
                    >
                      Diploma
                    </p>
                    <p
                      className={
                        diplomaUploaded
                          ? "diploma-uploaded"
                          : "diploma-not-uploaded"
                      }
                    >
                      <CheckCircleOutlineIcon style={{ fontSize: "45px" }} />
                    </p>
                  </div>
                  <div className="upload_content_date">
                    <h3>Date of Upload</h3>
                    <h4>{dateDiploma}</h4>
                  </div>
                </div>
                <div className="upload_button">
                  <label for="fileDiploma">Upload Diploma +</label>
                  <input
                    type="file"
                    name="fileDiploma"
                    id="fileDiploma"
                    onChange={(e) => setFileDiploma(e.target.files[0])}
                    onClick={() => {
                      handleDiplomaUpload();
                      setDateDiploma(handleDateChangeDiploma(dateDiploma));
                    }}
                  />
                </div>
              </div>

              <div className="upload_cert">
                <div className="upload_content">
                  <div className="upload_content_top">
                    <p
                      className={
                        certUploaded ? "cert-not-uploaded" : "cert-uploaded"
                      }
                    >
                      Certificate
                    </p>
                    <p
                      className={
                        certUploaded ? "cert-uploaded" : "cert-not-uploaded"
                      }
                    >
                      <CheckCircleOutlineIcon style={{ fontSize: "45px" }} />
                    </p>
                  </div>
                  <div className="upload_content_date">
                    <h3>Date of Upload</h3>
                    <h4>{dateCert}</h4>
                  </div>
                </div>

                <div className="upload_button">
                  <label for="fileCertificate">Upload Certificate +</label>
                  <input
                    type="file"
                    name="fileCertificate"
                    id="fileCertificate"
                    onChange={(e) => setFileCertificate(e.target.files[0])}
                    onClick={() => {
                      handleCertUpload();
                      setDateCert(handleDateChangeCert(dateCert));
                    }}
                  />
                </div>
              </div>

              <div className="upload_letter">
                <div className="upload_content">
                  <div className="upload_content_top">
                    <p
                      className={
                        letterUploaded
                          ? "letter-not-uploaded"
                          : "letter-uploaded"
                      }
                    >
                      Letter of Recommendation
                    </p>
                    <p
                      className={
                        letterUploaded
                          ? "letter-uploaded"
                          : "letter-not-uploaded"
                      }
                    >
                      <CheckCircleOutlineIcon style={{ fontSize: "45px" }} />
                    </p>
                  </div>
                  <div className="upload_content_date">
                    <h3>Date of Upload</h3>
                    <h4>{dateLetter}</h4>
                  </div>
                </div>
                <div className="upload_button">
                  <label for="fileLetter">Upload Letter +</label>
                  <input
                    type="file"
                    name="fileLetter"
                    id="fileLetter"
                    onChange={(e) => setFileLetter(e.target.files[0])}
                    onClick={() => {
                      handleLetterUpload();
                      setDateLetter(handleDateChangeLetter(dateLetter));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </FormGroup>

        <div className="hr-save-btn">
          <button
            onClick={() => {
              setShowingAlert(true);
              addNew();
              setAllData("");
            }}
          >
            SAVE
          </button>
        </div>
        <div
          className={`alert alert-success ${
            isShowingAlert ? "alert-shown" : "alert-hidden"
          }`}
          onTransitionEnd={() => setShowingAlert(false)}
        >
          <CheckCircleOutlineIcon />
          <p> Employee Added To Database!</p>
        </div>
      </div>
    </div>
  );
};

export default AddDocument;
