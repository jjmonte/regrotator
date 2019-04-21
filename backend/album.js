let mysql = require("mysql");
var artist = require('./artist');
var db = require('./db');
// var riyl = require('./riyl')
/**
 * NOTES:
 * 
 * When adding a new album that belongs to an artist not found in the system, either generate a new entry for that artist
 * or prompt the user to enter info in for it.
 * 
 * When adding a new album, make sure to check if ID is in the database and generate a new ID if it is already there.
 * No duplicate primary keys!
 * 
 * ADD ALBUM: lead into addSongs after 
 * RIYL will generate basic artist entries if they are not present in the DB
 * 
 * Do we need to delete albums??? 
 */
module.exports = {

    add: function addAlbum(title, artist, released, category, desc, rotation, riyl) {

        db.query("USE rotation", function (error) {
            if (error) throw error;
        });

        var album_id = "A" + Math.floor((Math.random() * 9999) + 1);
        // check if this id is in the database!!!
        var a_title = title;
        var artist_name = artist;
        var r_date = released;
        var date = new Date();
        var a_date = date.toISOString().slice(0, 10);
        var catg = category;
        var descript = desc;
        var rot_f = rotation;

        var d = 1;

        //var riyl_a = new Array();
        //riyl_a = riyl.split(', ');

        var insertAlbumQuery = "INSERT INTO ALBUM SET Album_id = ?, Album_title = ?, Category = ?, Release_date = ?, Add_date = ?, Rotation_flag = ?, Description = ?, Artist = ?";
        var insertAlbumValues = [album_id, a_title, catg, r_date, a_date, rot_f, descript, artist_name];
        console.log(insertAlbumValues);

        // while (d == 1) {
        //     db.query('SELECT * FROM ALBUM WHERE Album_id = \'' + album_id + '\';', function(error, results) {
        //         if (error) throw error;
        //         if (results.length > 0) {
        //             if (result) {
        //                 console.log("Duplicate ID found. Generating new ID.");
        //                 album_id = "A" + Math.floor((Math.random() * 9999) + 1);
        //             }
        //             else (d++);
        //         }
        //     });
        // }

        db.query(insertAlbumQuery, insertAlbumValues, function (err, result) {
            if (err) throw err;
            console.log("1 Album added.");
        });

        // for(i in riyl_a) {
        //     var temp_id;
        //     connection.query('SELECT Artist_id FROM rotation.ARTIST WHERE Artist_name = "'+ riyl_a[i] +'"', function(error, results, fields) {
        //         if (error) throw error;
        //         if (results) {
        //             temp_id = artist.addAuto(connection);   
        //         }
        //         else temp_id = results[0].Artist_id;

        //         connection.query('INSERT INTO RIYL (Album_id, Artist_id) VALUES (\''+ album_id +'\', \''+ temp_id +'\');', function(error) {
        //             if(error) throw error;
        //         });
        //     });
        // }
    },
    // remove: function delAlbum(connection, selected_row) {
    //     var album_id;
    //     // Get album_id from the user's selected row from main app

    //     // Delete album? Dialog to confirm deletion
    //     connection.query('DELETE FROM ALBUM WHERE Album_id ='+ album_id +';', function(error) {
    //         if (error) throw error;
    //     });
    // },
    update: function updateAlbum(selected_row) {
        var album_id;
        // Get album_id from selected row
        // Should be able to update any row except ID and rotation
        // Rotation should be updated via a different interface or a right click option

        // Prompt user by showing the current data in the row (as a form) and allow to change data
        // Then update all data to what form has (except ID & rotation)!
        db.query('UPDATE `rotation`.`ALBUM` SET `Album_title`=\'' + a_title +'\', `Category`=\''+ category +'\', ' + 
            '`Release_date`=\''+ r_date +'\', `Add_date`=\''+ a_date +'\', `Description`=\''+ desc +'\', ' +
            '`Artist`=\''+ artist_name +'\' WHERE `Album_id`='+ album_id +';', function(error) {
            if (error) throw error;
        }); 
    },
    toggle_rot: function toggleRotation(connection, selected_row) {
        // get album_id from selected row
        // only toggles the rotation flag
        // through a dialog box or right click option?

        connection.query('UPDATE `rotation`.`ALBUM` SET `Rotation_flag`= !`Rotation_flag`' + 
            'WHERE `Album_id`='+ album_id +';', function(error) {
            if (error) throw error;
        }); 
        
    } 
};
