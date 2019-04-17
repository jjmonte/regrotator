var album = require('./album');
let mysql = require("mysql");
let express = require("express");
var cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
//THINGS 2 ADD: all of the variables to the const, 
router.post("/addAlbum", (req, res) => {
    const {
        Artist,
        Album_title,
        Release_date,
        Category,
        Description,
        Rotation
        
    } = req.body;
    connection.query("USE rotation", function (error) {
        if (error) throw error;
    });
    var album_id = "A" + Math.floor((Math.random() * 9999) + 1);
    var date = new Date();
    var a_date = date.toISOString().slice(0, 10);
    
    var insertAlbumQuery = "INSERT INTO ALBUM SET Album_id = ?, Album_title = ?, Category = ?, Release_date = ?, Add_date = ?, Rotation_flag = ?, Description = ?, Artist = ?";
    var insertAlbumValues = [album_id, Album_title, Category, Release_date, a_date, Rotation, Description, Artist];
    console.log(insertAlbumValues);
    connection.query(insertAlbumQuery, insertAlbumValues, function (err, result) {
        if (err) throw err;
        console.log("1 Album added.");
    });
    // connection.query('INSERT INTO ALBUM (Album_title, Artist)' + 'VALUES(\'' + Album_title + '\',\'' + Artist + '\');', function (error, results) {
    //     if (error) throw error;
    // });
});


app.use("/api", router);
app.listen(3001);
