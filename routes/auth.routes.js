
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../model/UserModel");
const authRoute = express.Router();
authRoute.get("/", async (req, res) => {
    const data = await UserModel.find();
    res.send(data);
  });

authRoute.post("/register", async(req, res) => {
    const { email, name, password } = req.body
    // console.log('name: ', name);
    // console.log('password: ', password);
    // console.log('email: ', email);

    const user = await UserModel.find({email:email})
    // console.log("user",user)
    // res.send(user)
    try {
        if (user.length >= 1) {
            res.status(400).send({ "msg": "please login" })
        }
        else {
            bcrypt.hash(password, 4, async (err, hash) => {
                // console.log('password: ', password);
                const user = new UserModel({ email, name, password: hash });
                // console.log('password: ', password);
                // console.log('user: ', user);
                await user.save()
                res.status(200).send({ "msg": " user added" })
            });

        }
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }

})


authRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log('user: ', user);

    if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Server error" });
        }

        if (!result) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign({ id: user.id }, "mock11");
        return res.json({ token, name: user.name, email: user.email });
    });
});


module.exports = {
    authRoute,
};
