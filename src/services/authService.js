import { postData } from "./api";

export function loginUser(credentials){
    return postData("/auth/login", credentials)
}