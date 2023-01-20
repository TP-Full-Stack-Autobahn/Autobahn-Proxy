// Autobahn Proxy API
const baseUrl = "/api";
const baseUrlUser = `${baseUrl}/.user`;
const baseUrlCar = `${baseUrl}/.car`;

export const urlHello = `${baseUrl}/hello`;
export const urlLogin = `${baseUrlUser}/login`;
export const urlInscription = `${baseUrlUser}/inscription`;
export const urlValidUser = `${baseUrlUser}/valid-user/:id`;
export const urlUsers = `${baseUrlUser}/users`;
export const urlFutureUsers = `${baseUrlUser}/future-users`;
export const urlUser = `${baseUrlUser}/user`;
export const urlAdmin = `${baseUrlUser}/admin`;
export const urlCheckRole = `${baseUrlUser}/checkRole`;
export const urlCars = `${baseUrlCar}/cars`;
export const urlCarCreate = `${baseUrlCar}/create`;
export const urlCarEdit = `${baseUrlUser}/edit/:id`;
export const urlCarDelete = `${baseUrlCar}/delete/:id`;

export const urlsAcceptedWithoutConnection = [
    baseUrl,
    urlHello,
    urlLogin,
    urlInscription
];

// Autobahn Symfony API
const urlAutobahnUser = "http://nginx/api";
export const endPointAutobahnUserHello = `${urlAutobahnUser}/hello`;
export const endPointAutobahnUserLogin = `${urlAutobahnUser}/login`;
export const endPointAutobahnUserInscription = `${urlAutobahnUser}/inscription`;
export const endPointAutobahnUserValidUser = `${urlAutobahnUser}/inscription/valid-user/:id`;
export const endPointAutobahnUserUser = `${urlAutobahnUser}/user`;
export const endPointAutobahnUserUsers = `${urlAutobahnUser}/user/users`;
export const endPointAutobahnUserFutureUsers = `${urlAutobahnUser}/user/future-users`;
export const endPointAutobahnUserAdmin = `${urlAutobahnUser}/admin`;
export const endPointAutobahnUserCheckRole = `${urlAutobahnUser}/user/checkrole`;

// Autobahn Cars API
const urlAutobahnCars = "http://car:5002";
export const endPointAutobahnCarsCars = `${urlAutobahnCars}/cars`;
export const endPointAutobahnCarsCreate = `${urlAutobahnCars}/cars/create`;
export const endPointAutobahnCarsEdit = `${urlAutobahnCars}/cars/edit/:id`;
export const endPointAutobahnCarsDelete = `${urlAutobahnCars}/cars/delete/:id`;
