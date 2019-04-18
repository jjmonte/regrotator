var album = require('./album');
let express = require("express");
var cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

var album = require('./album');
var song = require('./song');
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

    album.add(Album_title, Artist, Release_date, Category, Description, Rotation, null);
});

router.post("/addSong", (req, res) => {
    const {
        Song_title, 
        Artist,
        Album_id,
        Track_number,
        Minutes,
        Seconds,
        XDFlag,
        Try_flag,
        Explicit
        
    } = req.body;
    song.add(Song_title, Artist, Album_id, Track_number, Track_length, XDFlag, Try_flag, null, Explicit);
});


app.use("/api", router);
app.listen(3001);
