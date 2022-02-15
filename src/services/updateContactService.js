import http from "./httpServices";


export default function updateOneContact(id, data) {
  return http.put(`/contacts/${id}`,data);
}
