import { Component } from "react";
import API from "../utils/API";

class Directory extends Component {
  state = {
    employees: [],
    search: "",
  };

  componentDidMount() {
    this.grabEmployees();
  }

  grabEmployees = () => {
    API.search()
      .then((res) => {
        // console.log("API results", res.data.results);
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <tbody>
          {this.state.employees.map((employee, index) => (
            <tr id={index} key={index}>
              <th scope="row">{index + 1}</th>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date.substring(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

export default Directory;
