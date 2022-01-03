const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
//mongodb is where the connection is made and where the data goes to once a player is added
const myConectionsString = 'mongodb+srv://admin:Laseife123@cluster0.3x2zx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(myConectionsString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

var statsSchema = new Schema({
    name: String,
    goals: String,
    assists: String,
    picture: String
});


var StatModel = mongoose.model("stat", statsSchema);





////this get request is used to retrieve and request data from a specified resource in a server.


app.get('/api/stats', (req, res) => {
    // const mystats =  [
    //     {
    //         "Name": "Thierry Henry",
    //         "Goals": "Goals:175",
    //         "Assist": "Assist:74",
    //         "Picture": "https://cdn.mos.cms.futurecdn.net/hCjmY85sb7pcufoJoHaMhD-970-80.jpg.webp"

    //     },
    //     {
    //         "Name": "Cristiano Ronaldo",
    //         "Goals": "Goals:91",
    //         "Assist": "Assist:36",
    //         "Picture": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"

    //     },
    //     {
    //         "Name": "Alan Shearer",
    //         "Goals": "Goals:283",
    //         "Assist": "Assist:64",
    //         "Picture": "https://i2.wp.com/thesefootballtimes.co/wp-content/uploads/2016/12/shearer.jpg?fit=1600%2C1050&ssl=1"

    //     },
    //     {
    //         "Name": "Wayne Rooney",
    //         "Goals": "Goals:208",
    //         "Assist": "Assist:103",
    //         "Picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Zarya-MU_%286%29.jpg/220px-Zarya-MU_%286%29.jpg"

    //     },
    //     {
    //         "Name": "Ryan Giggs",
    //         "Goals": "Goals:109",
    //         "Assist": "Assist:162",
    //         "Picture": "https://assets.manutd.com/AssetPicker/images/0/0/10/126/687715/Legends-Profile_Ryan-Giggs1523461920015.jpg"

    //     },
    //     {
    //         "Name": "Eric Cantona",
    //         "Goals": "Goals:70",
    //         "Assist": "Assist:56",
    //         "Picture": "https://assets.manutd.com/AssetPicker/images/0/0/10/126/687718/Legends-Profile_Eric-Cantona1523462164078.jpg"

    //     }
    // ];
    StatModel.find((err, data) => {
        res.json(data);
    })

    // res.status(200).json({
    //      message: "everything is good",
    //     stats: mystats
    // })
});

//this get request is used to retrieve and request data from a specified resource in a server.
app.get('/api/stats/:id', (req,res)=>{
    console.log(req.params.id)

    StatModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })

})
//this put request is used to updates the existing resource.
app.put('/api/stats/:id', (req,res) => {
    console.log("Update Player: " +req.params.id);
    console.log(req.body);

    StatModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
        (err,data)=>{
            res.send(data);
        })
}) 
// this is how the resource is deleted from the server

app.delete('/api/stats/:id', (req,res)=>{
    console.log("Delete Player:  "+req.params.id);

    StatModel.findByIdAndDelete(req.params.id,(err,data)=>{

        res.send(data);
    })
})





app.post('/api/stats', (req, res) => {
    //talking to the console
    console.log("Player Receieved");
    console.log(req.body.name);
    console.log(req.body.goals);
    console.log(req.body.assists);
    console.log(req.body.picture);

    StatModel.create({
        name: req.body.name,
        goals: req.body.goals,
        assists: req.body.assists,
        picture: req.body.picture

    })
    //talking to the console
    res.send('Item Added');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

