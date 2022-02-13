import http from "./httpServices";

export function deleteContacts(id){
    return http.delete(`/contacts/${id}`);
}