import { Express } from "express";
import axios from "axios";
import {
    endPointAutobahnCarsCars,
    endPointAutobahnCarsCreate, endPointAutobahnCarsDelete,
    endPointAutobahnCarsEdit,
    urlCarCreate, urlCarDelete,
    urlCarEdit, urlCars
} from "../routes";

const carsController = (server: Express) => {
    server.get(urlCars, (req, res) => {
        axios.get(
            endPointAutobahnCarsCars,
            {headers: {Authorization: req.header("Authorization")}}
        ).then(r => {
            res.send(r.data)
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.post(urlCarCreate, (req, res) => {
        const body: {
            name: string,
            price: number,
            image: string
        } = req.body;
        axios.post(
            endPointAutobahnCarsCreate,
            {
                name: body.name,
                price: body.price,
                image: body.image
            }
        ).then(r => {
            res.send(r.data)
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.put(urlCarEdit, (req, res) => {
        const carid = req.params.id
        const body: {
            name: string,
            price: number,
            image: string
        } = req.body;
        axios.post(
            endPointAutobahnCarsEdit.replace(':id', carid),
            {
                name: body.name,
                price: body.price,
                image: body.image
            },
            {headers: {Authorization: req.header("Authorization")}}
        ).then(r => {
            res.send(r.data)
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });

    server.delete(urlCarDelete, (req, res) => {
        const carid = req.params.id
        axios.post(
            endPointAutobahnCarsDelete.replace(':id', carid),
            {},
            {headers: {Authorization: req.header("Authorization")}}
        ).then(r => {
            res.send(r.data)
        }).catch(e => {
            res.status(e.response.status).send(e.response.data)
        })
    });
}
export default carsController