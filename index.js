const express = require("express");
const { authRoute } = require("./routes/auth.routes");
const cors = require("cors");
const { connection } = require("./connection");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/user", authRoute);


app.listen(8080, async () => {
    try {
        await connection;
        console.log("Connected to Database");
    } catch (err) {
        // console.log(err);
    }
    console.log(`Server Running at 8080 Port`);
});