import axios from "axios";

export default {
  getClients: () => axios.get('http://lexberry.com.ua/api/v1/clients'),
  getFilteredClients: (name) => axios.get(`http://lexberry.com.ua/api/v1/clients?search[name]=${name}`),
  getApplicants: (id) => axios.get(`http://lexberry.com.ua/api/v1/applicants?filter[client:id]=${id}`),
}