let mysql = require("mysql");
var artist = require('./artist');
var db = require('./db');
module.exports = {

    add: function addSong(title, artist, album_id, track_num, length, req_flag, try_flag, xd_flag, explicit) {

        db.query("USE rotation", function (error) {
            if (error) throw error;
        });

        var song_id = "S" + Math.floor((Math.random() * 9999) + 1);

        var insertSongQuery = "INSERT INTO SONG SET Song_id = ?, Song_title = ?, Artist = ?, Track_num = ?, Length = ?, Request_flag = ?, Try_flag = ?, XD_flag = ?, Exp_flag";
        var insertSongValues = [song_id, title, artist, album_id, track_num, length, req_flag, try_flag, xd_flag, explicit];
        console.log(insertSongValues);

        while (d == 1) {
            db.query('SELECT * FROM SONG WHERE Song_id = \'' + song_id + '\';', function(error, results) {
                if (results.length > 0) {
                    if (result) {
                        console.log("Duplicate ID found. Generating new ID.");
                        song_id = "S" + Math.floor((Math.random() * 9999) + 1);
                    }
                    else (d++);
                }
            });
        }

        db.query(insertSongQuery, insertSongValues, function (err, result) {
            if (err) throw err;
            console.log("1 Album added.");
        });
        
    }
};
