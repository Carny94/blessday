import { json } from "react-router-dom";
import sendRequest from './send-request'

const BASE_URL = '/api/users';


export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);

}
export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);

  }
  export async function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
  }
  // export function getToken(){
  //   // getItem returns null if there's no string
  //   const token = localStorage.getItem('token')
  //   if(!token) return null
  //   // Obtain the payload of the token
  //   const payload = JSON.parse(atob(token.split('.')[1]));
  //   // A JWT's exp is expressed in seconds, not milliseconds, so convert
  //   if(payload.exp < Date.now() / 1000){
  //     // Token has expired - remove it from localStorage
  //     localStorage.removeItem('token')
  //     return null
  //   }
  //   return token
  // }
  
  // export function getUser(){
  //   const token = getToken()
  //   // If there's a token, return the user in the payload, otherwise return null
  //   return token ? JSON.parse(atob(token.split('.')[1])).user : null
  // }
  
  // export function logOut(){
  //   localStorage.removeItem('token')
  // }
  



