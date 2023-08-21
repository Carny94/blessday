//Service modules export business/app logic
//such as managing tokens, etc.
//service modules often depend upon API modulees
//for making AJAX requests to the server

import * as usersAPI from './users-api';

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    //TODO: return user from token instead
    return getUser();
}
export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    //TODO: return user from token instead
    return getUser();
}

export function getToken() {
    //getItem will return null if the key does not expire
    const token = localStorage.getItem('token');
    if(!token) return null;
    //obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]))
    // a JWT exp is expressed in seconds, not milliseconds
    if (payload.exp * 1000 < Date.now()) {
        //Token has expired
        localStorage.removeItem('token');
        return null;
    }
        return token;
    
}

export function getUser() {
    const token= getToken();

    // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}
export function logOut() {
    localStorage.removeItem('token');
  }

  export function checkToken() {
   return usersAPI.checkToken()
   //checkToken returns a string, but lets
   //make it a date object for more flexibility
   .then(dateStr => new Date(dateStr));
  }