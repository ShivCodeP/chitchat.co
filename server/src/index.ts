import "dotenv/config";
import express from "express";
import { Connect } from "./configs";
import { userRoutes } from "./routes";
import session from "express-session";
import bodyParser from "body-parser";
import connectMongo from 'connect-mongodb-session';
import { MongoClient, MongoClientOptions } from 'mongodb';

declare function ConnectMongoDBSession(fn: typeof session): typeof ConnectMongoDBSession.MongoDBStore;

declare namespace ConnectMongoDBSession {
    class MongoDBStore extends session.Store {
        constructor(connection?: MongoDBSessionOptions, callback?: (error: Error) => void);
        client: MongoClient;

        get(sid: string, callback: (err: any, session?: session.SessionData | null) => void): void;
        set(sid: string, session: session.SessionData, callback?: (err?: any) => void): void;
        destroy(sid: string, callback?: (err?: any) => void): void;
        all(callback: (err: any, obj?: session.SessionData[] | { [sid: string]: session.SessionData; } | null) => void): void;
        clear(callback?: (err?: any) => void): void;
    }

    interface MongoDBSessionOptions {
        uri: string;
        collection: string;
        expires?: number | undefined;
        databaseName?: string | undefined;
        connectionOptions?: MongoClientOptions | undefined;
        idField?: string | undefined;
    }
}

const MongoDBStore = connectMongo(session)
let store = new MongoDBStore({
  uri: `mongodb+srv://naukri:${process.env.MONGODB_PASSWORD}@cluster0.u9tan.mongodb.net`,
  collection: 'mySessions'
}, (err) => {
    if(err) {
        console.log(err);
    }
});

store.on('connected', () => {
  store.client; // The underlying MongoClient object from the MongoDB driver
});

// Catch errors
store.on('error', function(err) {
    if(err) {
        console.log(err);
    }
});

const app = express();

const TWO_HOURS = 1000*60*60*2;

interface Env_Var {
    NODE_ENV: String;
    SESS_NAME: String;
    SESS_SECRET: String;
}

const {
    NODE_ENV,
    SESS_NAME ,
    SESS_SECRET,
} = process.env;

const IN_PROD = NODE_ENV === 'production';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use(session({

    name: SESS_NAME,
    resave: true,
    store,
    saveUninitialized:true,
    secret:SESS_SECRET,
    cookie: {
      sameSite: true ,
      secure: IN_PROD,
    }
}))


app.use("/",(req,res) => {
    res.send("hello world")
})

app.use("/auth/user",userRoutes)

const Port = process.env.PORT;

app.listen(Port,async() => {
    try {
        await Connect()
        console.log(`Server is listening on port ${Port}`)
    } catch (error) {
        console.log(error)
    }
})