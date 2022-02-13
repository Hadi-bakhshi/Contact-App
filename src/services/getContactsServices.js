import http from "./httpServices";

export function getAllContacts(){
    return http.get("/contacts")
}
