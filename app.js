import  express  from "express";

const app = express();


app.get("/", (req, res) => {
    res.send("Hello bitch")
})

app.listen(3000)