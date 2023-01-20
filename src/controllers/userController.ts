import { Express } from "express";
import {
    endPointAutobahnUserAdmin,
    endPointAutobahnUserCheckRole,
    endPointAutobahnUserFutureUsers,
    endPointAutobahnUserInscription,
    endPointAutobahnUserLogin,
    endPointAutobahnUserUser,
    endPointAutobahnUserUsers,
    endPointAutobahnUserValidUser,
    endPointAutobahnUserHello,
    urlAdmin,
    urlCheckRole,
    urlFutureUsers,
    urlHello,
    urlInscription,
    urlLogin,
    urlUser,
    urlUsers,
    urlValidUser
} from "../routes";
import axios from "axios";

const userController = (server: Express) => {
    server.get(urlHello, (_, res) => {
        axios.get(endPointAutobahnUserHello).then(r => {
            res.send(r.data);
        }).catch(e => {
            console.log(e.message)
        })
    });

    server.post(urlLogin, (req, res) => {
        const body: { email: string; password: string } = req.body;
        axios.post(
            endPointAutobahnUserLogin,
            { email: body.email, password: body.password }
        ).then(r => {
            res.send(r.data);
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.get(urlUser, (req, res) => {
        axios.get(
            endPointAutobahnUserUser,
            {headers: {Authorization: req.header("Authorization")}}
        ).then(r => {
            res.send(r.data);
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.get(urlAdmin, (req, res) => {
        axios.get(
            endPointAutobahnUserAdmin,
            {headers: {Authorization: req.header("Authorization")}}
        ).then(r => {
            res.send(r.data);
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.post(urlCheckRole, (req, res) => {
        const body: { role: string } = req.body;
        axios.post(
            endPointAutobahnUserCheckRole,
            {role: body.role},
            {headers: {Authorization: req.header("Authorization")}}
        ).then(r => {
            res.send(r.data);
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.post(urlInscription, (req, res) => {
        const body: {
            email: string,
            lastname: string,
            firstname: string,
            phone: string,
            nationality: string,
            client: string
        } = req.body;
        axios.post(
            endPointAutobahnUserInscription,
            {
                email: body.email,
                lastname: body.lastname,
                firstname: body.firstname,
                phone: body.phone,
                nationality: body.nationality,
                client: body.client
            }
        ).then(r => {
            res.send(r.data)
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.post(urlValidUser, (req, res) => {
        const userid = req.params.id
        axios.post(
            endPointAutobahnUserValidUser.replace(':id', userid),
            {},
            {headers: {Authorization: req.header("Authorization")}}
        ).then(r => {
            res.send(r.data)
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.get(urlUsers, (req, res) => {
        axios.get(
            endPointAutobahnUserUsers,
            {headers: {Authorization: req.header("Authorization")}}
        ).then(r => {
            res.send(r.data)
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.get(urlFutureUsers, (req, res) => {
        axios.get(
            endPointAutobahnUserFutureUsers,
            {headers: {Authorization: req.header("Authorization")}}
        ).then(r => {
            res.send(r.data)
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });
}
export default userController