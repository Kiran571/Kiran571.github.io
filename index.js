import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    verified: {
        type: Boolean,
        default: false 
    }
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", async (req, res)=> {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user !== null && password === user.password) {
        user.verified = true;
        await user.save();
        res.json({
            message: "login successful",
            user: user,
        });
    } else {
        res.status(400).json({
            message: "Invalid credentials"
        });
    }
    // const users = User.findOne({ email: email}, (err, user) => {
    //     if(user){
    //         if(password === user.password ) {
    //             res.send({ message: "Login Successfull", user: user })
                
    //         } else {
    //             res.send({ message: "Password didn't match"})
    //         }
    //     } else {
    //         res.send({message: "User not registered"})
    //     }
    // }).then(() => {
    //     users.verified = true;
    // }).catch((e) => {
    //     res.json({
    //         success: false,
    //         error: err.message
    //     })
    // })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.listen(9002,() => {
    console.log("BE started at port 9002")
})