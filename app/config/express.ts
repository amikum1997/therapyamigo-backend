import express, { Application } from "express";
import path from "path";
import router from "../routes";
import morgan from 'morgan';
import environment from "./environment";
import cors from 'cors';
import compress from 'compression';
import helmet from "helmet";
import methodOverride from 'method-override';
import HandleError from "../error/errorHandeler";
import expressLayout from 'express-ejs-layouts';
import * as passportConfig from "./passport";
import passport from "passport";
import session from "express-session";
import { INext, IRequest, IResponse } from "../interface/vendors";
import { mongoConnection } from "./mongoose";
import MongoStore from "connect-mongo";


const app: Application = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionStore = MongoStore.create({ mongoUrl: environment.MONGODB_URL });

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: environment.jwtSecret as unknown as string,
    store: sessionStore,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(path.join(__dirname, '../..', "./public")));
app.use('/admin', express.static(path.join(__dirname, '../..', "./public")));

// upload image static path
app.use('/', express.static(path.join(__dirname, '..', '/uploads')))

// EJS setup
app.use(expressLayout);

app.set('layout', 'layouts/websiteLayout')

// Setting the root path for views directory
app.set('views', path.join(__dirname, '../..', 'views'));

// Setting the view engine
app.set('view engine', 'ejs');

// Logger
app.use(morgan(environment.LOGS));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers


// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// mount api v1 routes
app.use('/', router);

app.get('*', function (req, res) {
    res.render("utility/error404")
});

// BASE ERROR HANDELING
app.use(HandleError.returnError);


export default app;