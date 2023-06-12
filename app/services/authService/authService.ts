import User from "../../models/user";
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import BaseError from "../../error/baseError";
import { GeneralError } from "../../error/errorConstants";
import moment from "moment";
import environment from "../../config/environment";
import UserSession from "../../models/userVerification";

export const AuthService = {

}