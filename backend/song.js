let mysql = require("mysql");
var artist = require('./artist');
var db = require('./db');
module.exports = {

    add: function addSong(title, artist, album_id, track_num, minutes, seconds, req_flag, try_flag, xd_flag, explicit) {

        db.query("USE rotation", function (error) {
            if (error) throw error;
        });

        var song_id = "S" + Math.floor((Math.random() * 9999) + 1);
        var length = parseInt(minutes, 10)*60 + parseInt(seconds, 10);
        var track_numb = parseInt(track_num, 10);
        var d = 1;

        var insertSongQuery = "INSERT INTO SONG SET Song_id = ?, Song_title = ?, Artist = ?, Album_id = ?, Track_num = ?, Length = ?, Request_flag = ?, Try_flag = ?, XD_flag = ?, Exp_flag = ?";
        var insertSongValues = [song_id, title, artist, album_id, track_numb, length, req_flag, try_flag, xd_flag, explicit];
        console.log(insertSongValues);

        // while (d == 1) {
        //     db.query('SELECT * FROM SONG WHERE Song_id = \'' + song_id + '\';', function(error, results) {
                
        //             if (result) {
        //                 console.log("Duplicate ID found. Generating new ID.");
        //                 song_id = "S" + Math.floor((Math.random() * 9999) + 1);
        //             }
        //             else (d++);
                
        //     });
        // }

        db.query(insertSongQuery, insertSongValues, function (err, result) {
            if (err) throw err;
            console.log("1 song added.");
        });
        
    }
};
