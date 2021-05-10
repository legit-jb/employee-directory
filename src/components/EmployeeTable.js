import React, { useState, useEffect } from "react";
import API from "../utils/API";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [ascending, setAscending] = useState(true);

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
      <caption>Employee Direct</caption>
      <thead>
        <tr>
          <th>
            <span role="button" onClick={() => setSortField("key")}>
              id
            </span>
          </th>
          <th>image</th>
          <th>
            <span role="button" onClick={() => setSortField("firstName")}>
              First
            </span>
          </th>
          <th>
            <span role="button" onClick={() => setSortField("lastName")}>
              Last
            </span>
          </th>
          <th>
            <span role="button" onClick={() => setSortField("email")}>
              email
            </span>
          </th>
          <th>
            <span role="button" onClick={() => setSortField("phone")}>
              phone
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.map((entry) => (
          <tr>
            <td>{entry.key}</td>
            <td> <img alt={entry.lastName + ", " + entry.firstName} src={entry.image} /></td>
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
