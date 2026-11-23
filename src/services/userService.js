import { getData } from "./api";

export function getUsers(){
    return getData("/users")
}

export function getUserById(id){
    return getData(`/users/${id}`)
}