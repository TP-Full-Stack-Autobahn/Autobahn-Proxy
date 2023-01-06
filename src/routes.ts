// Autobahn Proxy API
const baseUrl = "/api";
const baseUrlUser = `${baseUrl}/.user`;

export const urlHello = `${baseUrl}/hello`;
export const urlLogin = `${baseUrlUser}/login`;
export const urlInscription = `${baseUrlUser}/inscription`;
export const urlValidUser = `${baseUrlUser}/valid-user/:id`;
export const urlUsers = `${baseUrlUser}/users`;
export const urlFutureUsers = `${baseUrlUser}/future-users`;
export const urlUser = `${baseUrlUser}/user`;
export const urlAdmin = `${baseUrlUser}/admin`;
export const urlCheckRole = `${baseUrlUser}/checkRole`;

export const urlsAcceptedWithoutConnection = [
    baseUrl,
    urlHello,
    urlLogin,
    urlInscription
];

// Autobahn Symfony API
const urlAutobahnUser = "http://nginx/api";
export const endPointSAutobahnUserHello = `${urlAutobahnUser}/hello`;
export const endPointAutobahnUserLogin = `${urlAutobahnUser}/login`;
export const endPointAutobahnUserInscription = `${urlAutobahnUser}/inscription`;
export const endPointAutobahnUserValidUser = `${urlAutobahnUser}/inscription/valid-user/:id`;
export const endPointAutobahnUserUser = `${urlAutobahnUser}/user`;
export const endPointAutobahnUserUsers = `${urlAutobahnUser}/user/users`;
export const endPointAutobahnUserFutureUsers = `${urlAutobahnUser}/user/future-users`;
export const endPointAutobahnUserAdmin = `${urlAutobahnUser}/admin`;
export const endPointAutobahnUserCheckRole = `${urlAutobahnUser}/user/checkrole`;
