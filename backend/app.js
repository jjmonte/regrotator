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

router.get("/getSingleAlbum", (req, res) => {
  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  const albumId = req.query.Album_ID;
  console.log("fetching album " + albumId);
  let albumLookupQuery = "SELECT * FROM ALBUM WHERE ALBUM.Album_id = ?";
  db.query(albumLookupQuery, albumId, function(error, results) {
    if (error) throw error;
    return res.json({
      success: true,
      data: results
    });
  });
});

router.get("/getAlbumsByCategory", (req, res) => {
  console.log("fetching albums");

  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  const reqCategory = req.query.reqCategory;
  console.log(reqCategory);
  let categoryLookupQuery = "SELECT ALBUM.* FROM ALBUM WHERE ALBUM.Category = ?";
  db.query(categoryLookupQuery, reqCategory, function(error, results) {
    if (error) throw error;
    return res.json({
      success: true,
      data: results
    });
  });
});

router.get("/getAlbumsByGenre", (req, res) => {
    console.log("fetching albums");

    db.query("USE rotation", function (error) {
        if (error) throw error;        
    });
    const Genre  = req.query.genre;
    console.log(Genre);
    let genreLookupQuery =  "SELECT ALBUM * FROM ALBUM, ARTIST, ALBUM_OWNERSHIP " + 
                            "WHERE ALBUM.Album_id = ALBUM_OWNERSHIP.Album_id " +
                            "AND ARTIST.Artist_id = ALBUM_OWNERSHIP.Artist_id " +
                            "AND ARTIST.Genre = ?";
    db.query(genreLookupQuery, Genre, function (error, results) {
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
    let songLookupQuery = "SELECT * FROM SONG WHERE SONG.Album_id = ? ORDER BY Track_num ASC";

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
        Track_num,
        Minutes,
        Seconds,
        X_D,
        Explicit,
        Request,
        Try
    } = req.body;
    song.add(Song_title, Artist, Album_id, Track_num, Minutes, Seconds, Request, Try, X_D, Explicit);
});


app.use("/api", router);
app.listen(3001);
