import { Request, Response } from "express";
import {urlsAcceptedWithoutConnection} from "../routes";
import jwt_decode from "jwt-decode";

type TokenProps = {
    iat: number,
    exp: number,
    roles: Array<string>
    email:string
}

export default function (req: Request, res: Response, next: () => void) {
    const token = req.header("Authorization");
    const decoded: TokenProps = jwt_decode(token);

    if (!decoded.roles.includes('ROLE_ADMIN')) {
        res.status(401).send({message: "Forbidden."});
        return;
    }
    next();
};
