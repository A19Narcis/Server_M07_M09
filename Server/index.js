const cors = require("cors");
const express = require("express");

const app = express();
const PORT = 3000;

/*
let cors_config = {
    origin: function (origin, callback){
        return callback(null, true);
    }
};
*/

app.use (cors({
    origin: function (origin, callback){
        return callback(null, true);
    }
}));

/*Confguració*/
app.get('/auth/:userid/:passwdid', (req, res) => {
    let user = req.params.userid;
    let pass = req.params.passwdid;

    var ret = {
        isAuth: false,
        rols: []
    }

    console.log("New request...");

    var people = [
            {
                name: 'Narcis',
                pass: 'wotlk',
                isAuth: true,
                rols: [
                    'Admin',
                    'Editor'
                ]
            },
            {
                name: 'Teo',
                pass: 'user2002',
                isAuth: true,
                rols: [
                    'User',
                    'Public_service'
                ]
            },
            {
                name: 'Sergi',
                pass: 'user2003',
                isAuth: true,
                rols: [
                    'User',
                    'Interface_editor'
                ]
            }
    ]

    people.forEach(person => {
        if (person.name == user && person.pass == pass){
            ret.isAuth = person.isAuth;
            ret.rols = person.rols;
        }
    });

    res.send(JSON.stringify(ret));

});


/*Obrir Servidor*/
app.listen(PORT, () => {
    console.log("Server RUNNING ["+PORT+"]");
});