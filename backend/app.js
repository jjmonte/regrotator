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
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

var album = require('./album');
var db = require('./db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

router.get("/getAlbums", (req, res) => {
    console.log("fetching albums");
    db.query("USE rotation", function (error) {
        if (error) throw error;        
    });
    db.query("SELECT * FROM ALBUM", function (error, results) {
        if (error) throw error;
        return res.json({
            success: true,
            data: results
        });
    });
});
//THINGS 2 ADD: all of the variables to the const, 
router.post("/addAlbum", (req, res) => {
    const {
        Album_title,
        Artist,
        Release_date,
        Category,
        Description,
        Rotation
        
    } = req.body;
    // connection.query("USE rotation", function (error) {
    //     if (error) throw error;
    // });
    var album_id = "A" + Math.floor((Math.random() * 9999) + 1);
    var date = new Date();
    var a_date = date.toISOString().slice(0, 10);

    album.add(Album_title, Artist, Release_date, Category, Description, Rotation, null);
    // connection.query('INSERT INTO ALBUM (Album_id, Album_title, Category, Release_date, Add_date, Rotation_flag, Description, Artist)' + 
    // 'VALUES(\''+ album_id +'\',\''+ Album_title +'\',\''+ Category +'\',\''+ Release_date 
    // +'\',\''+ a_date +'\', '+ Rotation +',\''+ Description +'\',\''+ Artist +'\');', function(error, results) {
    //     if (error) throw error;
    // });
    // connection.query('INSERT INTO ALBUM (Album_title, Artist)' + 'VALUES(\'' + Album_title + '\',\'' + Artist + '\');', function (error, results) {
    //     if (error) throw error;
    // });
});


app.use("/api", router);
app.listen(3001);
