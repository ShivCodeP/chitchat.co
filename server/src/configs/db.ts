import * as dotenv from 'dotenv';
dotenv.config();
import {connect} from "mongoose";

const Connect = async ()=>{
    return await connect(`${process.env.MONGODB_URL}`)
}

export default Connect;