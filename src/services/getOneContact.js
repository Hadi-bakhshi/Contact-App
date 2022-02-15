import http from "./httpServices";

export function getOneContact(id){
    return http.get(`/contacts/${id}`)
}