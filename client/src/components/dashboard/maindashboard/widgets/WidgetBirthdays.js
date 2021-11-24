import React,{useState,useEffect} from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios"
function WidgetBirthdays() {
  // const [employees, setEmployees] = useState();

  // useEffect(() => {
  //   getAllEmployee();
  // }, []);

  // const getAllEmployee = () => {
  //   axios
  //     .get(
  //       "http://localhost:5000/employee/todaybirthday",

  //       {
  //         header: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )

  //     .then((data) => {
  //       console.log(data.data);
  //       setEmployees(data.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="widget_birthdays_mainbox">
      <div className="birthdays_header">
        <h1>BIRTHDAYS</h1>
      </div>

      <div className="birthdays_today">
        <Carousel itemsToShow={2}>
        {/* {employees &&
            employees.map((employee) => (
          <div className="contact_one" key={employee._id}>
            <div className="contact_one_image">{employee.bio.firstName}</div>
            <div className="contact_one_name">
            <img
            src={`http://localhost:5000/${employee.bio.photo}`} width="50" onError={(e)=>{e.target.onError=null; e.target.src='http://localhost:5000/uploads/error.jpg'} }/>

               </div>
          </div>
            ))} */}

          {/* <div className="contact_two">
            <div className="contact_two_image"></div>
            <div className="contact_two_name">User 2 </div>
          </div> */}

          {/* <div className="contact_three">
            <div className="contact_three_image"></div>
            <div className="contact_three_name">User 3 </div>
          </div> */}

          {/* <div className="contact_four">
            <div className="contact_four_image"></div>
            <div className="contact_four_name">User 4 </div>
          </div> */}

          {/* <div className="contact_five">
            <div className="contact_five_image"></div>
            <div className="contact_five_name">User 5 </div>
          </div> */}
        </Carousel>
        <h1>Today</h1>
      </div>

      <div className="birthdays_month">
        <Carousel itemsToShow={2}>
          <div className="contact_one">
            <div className="contact_one_image"></div>
            <div className="contact_one_name">User 1 </div>
          </div>

          <div className="contact_two">
            <div className="contact_two_image"></div>
            <div className="contact_two_name">User 2 </div>
          </div>

          <div className="contact_three">
            <div className="contact_three_image"></div>
            <div className="contact_three_name">User 3 </div>
          </div>

          <div className="contact_four">
            <div className="contact_four_image"></div>
            <div className="contact_four_name">User 4 </div>
          </div>

          <div className="contact_five">
            <div className="contact_five_image"></div>
            <div className="contact_five_name">User 5 </div>
          </div>
        </Carousel>
        <h1>This Month</h1>
      </div>
    </div>
  );
}
export default WidgetBirthdays;
