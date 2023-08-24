import sendRequest from './send-request';
const BASE_URL = '/api/journal';

//user- create a journal entry

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createForm(form) {
    return sendRequest(`${BASE_URL}/create`, 'POST', form);
}

export function saveForm(form) {
    return sendRequest(`${BASE_URL}/save`, 'POST', form);
}

export function updateForm(form) {
    return sendRequest(`${BASE_URL}/update`, 'POST', form);
}

export function deleteForm(form) {
    return sendRequest(`${BASE_URL}/delete`, 'DELETE', form);
}