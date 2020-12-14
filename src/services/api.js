import axios from "axios";

export default {
  getClients: () => axios.get('https://lexberry.com.ua/api/v1/clients'),
  getFilteredClients: (name) => axios.get(`https://lexberry.com.ua/api/v1/clients?search[name]=${name}`),
  getApplicants: (id) => axios.get(`https://lexberry.com.ua/api/v1/applicants?filter[client:id]=${id}`),
}