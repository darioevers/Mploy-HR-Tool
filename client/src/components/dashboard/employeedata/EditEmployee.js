import React, { useState, useEffect } from "react";
import DashboardTopNav from "../global/DashboardTopNav";
import DashboardSideNav from "../global/DashboardSideNav";
import axios from "axios";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";

const EditEmployee = ({ location, history }) => {
  const [editEmp, setEditEmp] = useState(location.state && location.state.employee);
    
  
  const edit = () => {
    console.log(editEmp);
    axios
      .put(
        "http://localhost:5000/employee/update",
        { editEmp },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) =>{ console.log(data)
      history.push("/dashboard/employeedata/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="addemployee_mainbox">
      <DashboardTopNav />
      <DashboardSideNav />
      {/* personal edit data */}

      <FormGroup>
         <div>
        <FormControl>
          <InputLabel htmlFor="my-input">First Name</InputLabel>
          <Input
            name="firstname"
            value={editEmp.bio.firstName}
            onChange={(e) =>
              setEditEmp({ ...editEmp, bio:{...editEmp.bio, firstName: e.target.value }})
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Last Name</InputLabel>
          <Input
            name="lastname"
            value={editEmp.bio.lastName}
            onChange={(e) =>
              setEditEmp({ ...editEmp,bio:{...editEmp.bio, lastName: e.target.value }})
            }
          />
         </FormControl>
         
         <FormControl>
          <InputLabel htmlFor="my-input">Date of Birth</InputLabel>
          <Input
            name="dateofbirth"
            value={editEmp.bio.dateOfBirth}
            onChange={(e) =>
              setEditEmp({ ...editEmp,bio:{...editEmp.bio, dateOfBirth: e.target.value } })
            }
          />
          </FormControl>
         <FormControl>
          <InputLabel htmlFor="my-input">Nationality</InputLabel>
          <Input
            name="nationality"
            value={editEmp.bio.nationality}
            onChange={(e) =>
              setEditEmp({ ...editEmp, bio:{...editEmp.bio, nationality: e.target.value } })
            }
          />
         </FormControl>
          <FormControl>
          <InputLabel id="demo">Gender</InputLabel>
          <Select
            labelId="demo"
            value={editEmp.bio.gender}
            onChange={(e) => setEditEmp({ ...editEmp, bio:{...editEmp.bio, gender: e.target.value }})}
          >
          
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="x">X</MenuItem>
            
          </Select>
         </FormControl>
          <FormControl>
          <InputLabel htmlFor="my-input">Phone Number</InputLabel>
          <Input
            name="phoneNumber"
            value={editEmp.bio.phoneNumber}
            onChange={(e) =>
              setEditEmp({ ...editEmp, bio:{...editEmp.bio, phoneNumber: e.target.value } })
            }
          />
          </FormControl>
         <FormControl>
          <InputLabel htmlFor="my-input">Marital Status</InputLabel>
          <Input
            name="maritalStatus"
            value={editEmp.bio.maritalStatus}
            onChange={(e) =>
              setEditEmp({ ...editEmp,bio:{...editEmp.bio, maritalStatus: e.target.value } })
            }
          />
         </FormControl>

          <FormControl>
          <InputLabel htmlFor="my-input">Status</InputLabel>
          <Input
            name="status"
            value={editEmp.bio.status}
            onChange={(e) => setEditEmp({ ...editEmp, bio:{...editEmp.bio, status: e.target.value } })}
          />
        </FormControl>
         </div>

        {/* address update */}
         <div>
          <Typography variant="h6">Address</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Street</InputLabel>
          <Input
            name="street"
            value={editEmp.addressOne.streetOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp, addressOne:{...editEmp.addressOne, streetOne: e.target.value } })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">City</InputLabel>
          <Input
            name="city"
            value={editEmp.addressOne.cityOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp, addressOne:{...editEmp.addressOne, cityOne: e.target.value } })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Postal Code</InputLabel>
          <Input
            name="postalCode"
            value={editEmp.addressOne.postalCodeOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp, addressOne:{...editEmp.addressOne, postalCodeOne: e.target.value } })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={editEmp.addressOne.stateOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp, addressOne:{...editEmp.addressOne, stateOne: e.target.value } })
            }
          >
            <MenuItem value="sachsen">Schsen</MenuItem>
            <MenuItem value="Berlin">Berlin</MenuItem>
            <MenuItem value="Hamburg">Hamburg</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Country</InputLabel>
          <Input
            name="Country"
            value={editEmp.addressOne.countryOne}
            onChange={(e) =>
              setEditEmp({ ...editEmp,addressOne:{...editEmp.addressOne, countryOne: e.target.value } })
            }
          />
        </FormControl>
        
        </div>

      {/* education info update */}
      <div>
          <Typography variant="h6">Education</Typography>

        <FormControl>
          <InputLabel htmlFor="my-input">School</InputLabel>
          <Input
            name="school"
            value={editEmp.education.school}
            onChange={(e) =>
              setEditEmp({ ...editEmp, education:{...editEmp.education, school: e.target.value } })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Degree</InputLabel>
          <Input
            name="degree"
            value={editEmp.education.degree}
            onChange={(e) =>
              setEditEmp({ ...editEmp,education:{...editEmp.education, degree: e.target.value } })
            }
          />
        </FormControl>

  <FormControl>
          <InputLabel htmlFor="my-input">Field Of Study</InputLabel>
          <Input
            name="specialization"
            value={editEmp.education.specialization}
            onChange={(e) => setEditEmp({ ...editEmp, education:{...editEmp.education, specialization: e.target.value } })}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Year Of Completion</InputLabel>
          <Input
            name="endDate"
            value={editEmp.education.endDate}
            onChange={(e) =>
              setEditEmp({ ...editEmp, education:{...editEmp.education, endDate: e.target.value } })
            }
          />
        </FormControl>
</div>
        {/* work Experience update */}
        <div>
          <Typography variant="h6">Work Experience</Typography>
      
        <FormControl>
          <InputLabel htmlFor="my-input">company</InputLabel>
          <Input
            name="company"
            value={editEmp.workExperience.company}
            onChange={(e) =>
              setEditEmp({ ...editEmp, workExperience:{...editEmp.workExperience, company: e.target.value } })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Job Title</InputLabel>
          <Input
            name="postalCode"
            value={editEmp.workExperience.jobTitle}
            onChange={(e) =>
              setEditEmp({ ...editEmp, workExperience:{...editEmp.workExperience, jobTitle: e.target.value } })
            }
          />
        </FormControl>
  
        <FormControl>
          <InputLabel htmlFor="my-input">From</InputLabel>
          <Input
            name="from"
            value={editEmp.workExperience.from}
            onChange={(e) =>
              setEditEmp({ ...editEmp,workExperience:{...editEmp.workExperience, from: e.target.value } })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">To</InputLabel>
          <Input
            name="from"
            value={editEmp.workExperience.to}
            onChange={(e) =>
              setEditEmp({ ...editEmp,workExperience:{...editEmp.workExperience, to: e.target.value } })
            }
          />
        </FormControl>
        </div>
        <div>
        {/* contract Info update */}
        <Typography variant="h6">Hr Info</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Contract Number</InputLabel>
          <Input
            name="contractNo"
            value={editEmp.contractInfo.contractNo}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, contractNo: e.target.value } })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">hireDate</InputLabel>
          <Input
            name="hireDate"
            value={editEmp.contractInfo.hireDate}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, hireDate: e.target.value } })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">contractEnd</InputLabel>
          <Input
            name="contractEnd"
            value={editEmp.contractInfo.contractEnd}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, contractEnd: e.target.value } })
            }
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">probationPeriod</InputLabel>
          <Input
            name="probationPeriod"
            value={editEmp.contractInfo.probationPeriod}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, probationPeriod: e.target.value } })
            }
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">employmentType</InputLabel>
          <Input
            name="employmentType"
            value={editEmp.contractInfo.employmentType}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, employmentType: e.target.value } })
            }
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">position</InputLabel>
          <Input
            name="position"
            value={editEmp.contractInfo.position}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, position: e.target.value } })
            }
          />
        </FormControl>

              <FormControl>
          <InputLabel htmlFor="my-input">team</InputLabel>
          <Input
            name="team"
            value={editEmp.contractInfo.team}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, team: e.target.value } })
            }
          />
        </FormControl>


    <FormControl>
          <InputLabel htmlFor="my-input">department</InputLabel>
          <Input
            name="department"
            value={editEmp.contractInfo.department}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, department: e.target.value } })
            }
          />
        </FormControl>

         <FormControl>
          <InputLabel htmlFor="my-input">salary</InputLabel>
          <Input
            name="salary"
            value={editEmp.contractInfo.salary}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, salary: e.target.value } })
            }
          />
        </FormControl>

          <FormControl>
          <InputLabel htmlFor="my-input">overtime</InputLabel>
          <Input
            name="overtime"
            value={editEmp.contractInfo.overtime}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, overtime: e.target.value } })
            }
          />
        </FormControl>


          <FormControl>
          <InputLabel htmlFor="my-input">workLocation</InputLabel>
          <Input
            name="workLocation"
            value={editEmp.contractInfo.workLocation}
            onChange={(e) =>
              setEditEmp({ ...editEmp, contractInfo:{...editEmp.contractInfo, workLocation: e.target.value } })
            }
          />
        </FormControl>
        </div>

        <FormControl>
          <Button onClick={edit}  color="primary"
                   >Update</Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default EditEmployee;
