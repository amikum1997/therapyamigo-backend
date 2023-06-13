import path from 'path'
import dotenv from 'dotenv-safe';

dotenv.config({
    path: path.join(__dirname, '../../.env'),
    sample: path.join(__dirname, '../../.env.example'),
});

const environment = {
     PORT : process.env.PORT,
     NODE_ENV : process.env.NODE_ENV,
     LOGS : process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
     MONGODB_URL : process.env.NODE_ENV === 'production' ? process.env.MONGODB_PRODUCTION as string : process.env.MONGODB_DEVELOPMENT as string,
     jwtSecret: process.env.JWT_SECRET,
     jwtExpirationInterval: process.env.JWT_EXPIRATION,
     baseurl: process.env.BASEURL
}

export default environment