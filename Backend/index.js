import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contect.route.js";  // Typo in 'contact' vs 'contect'

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4001;

//connect to mongodb
const URI = process.env.MngoDBURI;  // Typo in variable name, it should be 'MONGO_URI'

try {
    mongoose.connect("mongodb://localhost:27017/myBookClub", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongoDB DataBase");

} catch (error) {
    console.log("Error:", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contect", contactRoute);  // Ensure the correct spelling 'contact'
app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false,
    })
})
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
