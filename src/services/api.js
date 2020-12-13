import axios from "axios";

export default {
  // getClients: () => axios.get('http://lexberry.com.ua/api/v1/clients'),
  getClients: () => axios.get('https://jsonplaceholder.typicode.com/users'),
  getFilteredClients: (name) => axios.get(`http://lexberry.com.ua/api/v1/clients?search[name]=${name}`),
  getApplicants: (id) => axios.get(`http://lexberry.com.ua/api/v1/applicants?filter[client:id]=${id}`),
}