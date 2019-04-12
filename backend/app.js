// let mysql = require('mysql');

// var album = require('./album');

// let connection = mysql.createConnection({
//     host: '134.209.10.140',
//     user: 'webrequest',
//     password: 'JpeKR15jYGS54R5j',
//     database: 'rotation'
// });

// connection.connect(function (err) {
//     if (err) {
//         return console.error('error: ' + err.message);
//     }

//     console.log('Connected to the MySQL server.');

//     //  Connected to Server. 
//     //
//     //

//     connection.query('USE rotation', function (error, results, fields) {
//         if (error) throw error;
//     });
//     connection.query('describe ALBUM', function (error, results, fields) {
//         if (error) throw error;
//         results.forEach(result => {
//             console.log(result.Field + " - " + result.Type);
//         });
//     });

//     // // CORRECT INSERT SYNTAX
//     // connection.query('INSERT INTO `rotation`.`ALBUM` (`Album_id`,`Album_title`,`Category`,`Release_date`,`Add_date`,`Rotation_flag`,`Description`,`Artist`\)VALUES(\'A90\',\'Oil of Every Pearl\\\'s Un-Insides\',\'H\',\'2018-06-15\',\'2018-8-15\',0,\'desc of sophie??!\',\'SOPHIE\'\)\;', function(error, results) {
//     //     if (error) throw error;
//     // });

//     album.add(connection);

//     console.log('\nDisplaying all albums in database:\n');

//     connection.query('SELECT * FROM ALBUM', function(error, results, fields) {
//         if (error) throw error;
//         results.forEach(result => {
//             console.log(result);
//         });
//     });
//     connection.end();
// });
let mysql = require("mysql");
let express = require("express");
var cors = require('cors');
const app = express();
const router = express.Router();
app.use(cors());

let connection = mysql.createConnection({
    host: "134.209.10.140",
    user: "webrequest",
    password: "JpeKR15jYGS54R5j",
    database: "rotation"
});
    
connection.connect(function (err) {   
    if (err) {
        return console.error("error: " + err.message);      
    }
    console.log("Connected to the MySQL server.");    
});

router.get("/getAlbums", (req, res) => {
    console.log("fetching albums");
    connection.query("USE rotation", function (error) {
        if (error) throw error;        
    });
    connection.query("SELECT * FROM ALBUM", function (error, results) {
        if (error) throw error;
        return res.json({
            success: true,
            data: results
        });
    });
});

app.use("/api", router);
app.listen(3001);
