import mongoose,{ConnectOptions} from 'mongoose';
import environment from './environment';

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`);
    process.exit(-1);
  });

// print mongoose logs in dev env
if (environment.NODE_ENV === 'development') {
    mongoose.set('debug', true);
  }

const connect = () => {
    mongoose
      .connect(environment.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then(() => console.log(`Mongodb connection established with ${environment.MONGODB_URL}`));
    return mongoose.connection;
  };
  
export default connect;