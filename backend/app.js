var album = require('./album');
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

router.get("/getSongs", (req, res) => {
    console.log("fetching songs");
    db.query("USE rotation", function (error) {
        if (error) throw error;
    });
    
    const Album_ID  = req.query.Album_ID;
    let songLookupQuery = "SELECT * FROM SONG WHERE SONG.Album_id = ?";

    db.query(songLookupQuery, Album_ID,  function (error, results) {
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
