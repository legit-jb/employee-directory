import axios from "axios";

genPeople = () => {
    return axios.get("https://randomuser.me/api/?results=50");
}

export default API;