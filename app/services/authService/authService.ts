import User from "../../models/user";
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import BaseError from "../../error/baseError";
import { GeneralError } from "../../error/errorConstants";
import moment from "moment";
import environment from "../../config/environment";
import UserSession from "../../models/userVerification";

export const AuthService = {
    generrateUniqueIdentification: async () => {
        while (true) {
            let uniqueIdentifier = `TA${Math.floor(100000 + Math.random() * 900000)}`
            const checkUniqueNumber = await User.findOne({ uniqueIdentifier: uniqueIdentifier })

            if (!checkUniqueNumber)
                return uniqueIdentifier
        }
    }
}

export const passwordGenerator = (size: any) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
