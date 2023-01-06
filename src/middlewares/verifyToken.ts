import { Request, Response } from "express";
import {urlsAcceptedWithoutConnection} from "../routes";

export default function (req: Request, res: Response, next: () => void) {
    const { url } = req;
    if (!urlsAcceptedWithoutConnection.includes(url)) {
        const token = req.header("Authorization");
        if (!token) {
            res.status(401).send({message: "Token is missing"});
            return;
        }
    }
    next();
};
