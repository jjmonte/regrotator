var album = require("./album");
let express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

var album = require("./album");
var song = require("./song");
var db = require("./db");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

router.get("/getAlbums", (req, res) => {
  console.log("fetching albums");
  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  db.query("SELECT * FROM ALBUM", function(error, results) {
    if (error) throw error;
    return res.json({
      success: true,
      data: results
    });
  });
});
router.get("/getArtists", (req, res) => {
  console.log("fetching artists");
  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  db.query("SELECT * FROM ARTIST", function(error, results) {
    if (error) throw error;
    return res.json({
      success: true,
      data: results
    });
  });
});
router.get("/searchAlbum", (req, res) => {
  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  const searchValues = ["%" + req.query.Album_title + "%", req.query.Artist_ID];
  console.log(
    "Searching for album " + searchValues[0] + " ArtistID: " + searchValues[1]
  );
  let albumLookupQuery =
    "SELECT * FROM ALBUM, ALBUM_OWNERSHIP WHERE ALBUM.Album_title LIKE ?" +
    "AND ALBUM_OWNERSHIP.Artist_id = ?" +
    "AND ALBUM.Album_id = ALBUM_OWNERSHIP.Album_id";
  db.query(albumLookupQuery, searchValues, function(error, results) {
    if (error) throw error;
    return res.json({
      success: true,
      data: results
    });
  });
});
router.get("/searchArtist", (req, res) => {
  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  const artistName = "%" + req.query.Artist_name + "%";
  console.log("Searching for album " + artistName);
  let albumLookupQuery = "SELECT * FROM ARTIST WHERE ARTIST.Artist_name LIKE ?";
  db.query(albumLookupQuery, artistName, function(error, results) {
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
router.get("/getSingleArtist", (req, res) => {
  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  const artistId = req.query.Artist_ID;
  console.log("fetching artist " + artistId);
  let artistLookupQuery = "SELECT * FROM ARTIST WHERE ARTIST.Artist_id = ?";

  db.query(artistLookupQuery, artistId, function(error, results) {
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
  let categoryLookupQuery =
    "SELECT ALBUM.* FROM ALBUM WHERE ALBUM.Category = ?";
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

  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  const Genre = req.query.genre;
  console.log(Genre);
  let genreLookupQuery =
    "SELECT ALBUM * FROM ALBUM, ARTIST, ALBUM_OWNERSHIP " +
    "WHERE ALBUM.Album_id = ALBUM_OWNERSHIP.Album_id " +
    "AND ARTIST.Artist_id = ALBUM_OWNERSHIP.Artist_id " +
    "AND ARTIST.Genre = ?";
  db.query(genreLookupQuery, Genre, function(error, results) {
    if (error) throw error;
    return res.json({
      success: true,
      data: results
    });
  });
});

router.get("/getAlbumNamesByArtist", (req, res) => {
  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  const artistId = req.query.Artist_ID;
  console.log("fetching album by artist " + artistId);

  let albumNameLookupQuery =
    "SELECT ALBUM.Album_title, ALBUM.Album_id, ALBUM.Category FROM ALBUM, ALBUM_OWNERSHIP " +
    "WHERE ALBUM.Album_id = ALBUM_OWNERSHIP.Album_id " +
    "AND ALBUM_OWNERSHIP.Artist_id = ?";
  db.query(albumNameLookupQuery, artistId, function(error, results) {
    if (error) throw error;
    return res.json({
      success: true,
      data: results
    });
  });
});
router.get("/getArtistIdFromAlbum", (req, res) => {
  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  const albumId = req.query.Album_ID;
  console.log("fetching artist id" + albumId);

  let artistIdLookupQuery =
    "SELECT Artist_id FROM ALBUM_OWNERSHIP WHERE ALBUM_OWNERSHIP.Album_id = ?";
  db.query(artistIdLookupQuery, albumId, function(error, results) {
    if (error) throw error;
    return res.json({
      success: true,
      data: results
    });
  });
});
router.get("/getSongs", (req, res) => {
  console.log("fetching songs");

  db.query("USE rotation", function(error) {
    if (error) throw error;
  });

  const Album_ID = req.query.Album_ID;
  let songLookupQuery =
    "SELECT * FROM SONG WHERE SONG.Album_id = ? ORDER BY Track_num ASC";

  db.query(songLookupQuery, Album_ID, function(error, results) {
    if (error) throw error;
    return res.json({
      success: true,
      data: results
    });
  });
});
router.get("/addOwnership", (req, res) => {
  console.log("fetching songs");

  db.query("USE rotation", function(error) {
    if (error) throw error;
  });
  const InsertValues = [req.query.Album_ID, req.query.Artist_ID];

  let ownershipQuery =
    "INSERT INTO ALBUM_OWNERSHIP SET Album_id = ?, Artist_id = ?";

  db.query(ownershipQuery, InsertValues, function(error, results) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.json({
        success: false
      });
    } else if (error) {
      throw error;
    }

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

  album.add(
    Album_title,
    Artist,
    Release_date,
    Category,
    Description,
    Rotation,
    null
  );
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
  song.add(
    Song_title,
    Artist,
    Album_id,
    Track_num,
    Minutes,
    Seconds,
    Request,
    Try,
    X_D,
    Explicit
  );
});

app.use("/api", router);
app.listen(3001);
