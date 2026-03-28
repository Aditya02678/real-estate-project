import express from 'express';
import cors from 'cors';
import cookieparser from 'cookie-parser';
import dotenv from 'dotenv'

import{userRoute} from "./routes/user.route.js";
import{residencyRoute} from "./routes/residency.route.js";
dotenv.config()



const app = express();

const PORT =process.env.PORT ||8000;

app.use(express.json());
app.use(cors());
app.use(cookieparser());


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.use('/api/user',userRoute);
app.use('/api/residency',residencyRoute);
