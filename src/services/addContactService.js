import http from "./httpServices";

export function addNewContact(data){
    return http.post("/contacts", data);
}