import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./style.css";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [sortField, setSortField] = useState(null);

  useEffect(() => {
    API.search()
      .then((res) => {
        setEmployees(
          res.data.results.map((employee, i) => ({
            lastName: employee.name.last,
            firstName: employee.name.first,
            image: employee.picture.large,
            email: employee.email,
            phone: employee.phone,
            key: i,
          }))
          // end map
        );
        // end setEmployees
      })
      .catch((err) => console.log(err));
  }, []);
  // end useEffect

  if (sortField !== null) {
    employees.sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return -1;
      }
      if (a[sortField] > b[sortField]) {
        return 1;
      }
      return 0;
    });
    // end sort
  }
  // end if statement

  return (
    <table>
      <thead>
        <tr>
          <th
            scope="col"
            role="button"
            className="bttn"
            onClick={() => setSortField("key")}
          >
            id
          </th>
          <th scope="col">image</th>
          <th
            scope="col"
            role="button"
            className="bttn"
            onClick={() => setSortField("firstName")}
          >
            First
          </th>
          <th
            scope="col"
            role="button"
            className="bttn"
            onClick={() => setSortField("lastName")}
          >
            Last
          </th>
          <th
            scope="col"
            role="button"
            className="bttn"
            onClick={() => setSortField("email")}
          >
            email
          </th>
          <th
            role="button"
            className="bttn"
            onClick={() => setSortField("phone")}
          >
            phone
          </th>
        </tr>
      </thead>
      <tbody className="table">
        {employees.map((entry) => (
          <tr key={entry.key}>
            <td>{entry.key}</td>
            <td>
              <img
                alt={entry.firstName + " " + entry.lastName}
                src={entry.image}
              />
            </td>
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.email}</td>
            <td>{entry.phone.substring(0, 14)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  // end return
};

export default EmployeeTable;
