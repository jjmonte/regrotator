const readLineSync = require('readline-sync');

var artist = require('./artist');
/**
 * NOTES:
 * 
 * When adding a new album that belongs to an artist not found in the system, either generate a new entry for that artist
 * or prompt the user to enter info in for it.
 * 
 * When adding a new album, make sure to check if ID is in the database and generate a new ID if it is already there.
 * No duplicate primary keys!
 * 
 * ADD ALBUM: Must lead into addSongs after! 
 *  RIYL will generate basic artist entries if they are not present in the DB!
 * 
 * Do we need to delete albums??? 
 */
module.exports = {
    add: function addAlbum(title, artist, released, added, category, desc, rotation, riyl) {

        var album_id = "A" + Math.floor((Math.random() * 9999) + 1);
        // check if this id is in the database!!!
        var a_title;
        var artist_name;
        var r_date;
        var date = new Date();
        var a_date = date.toISOString().slice(0, 10);
        var category;
        var desc;
        var rot_f;
        var riyl_s;
        var riyl_a = new Array();

        console.log('\n\nCreating a new album entry...\n\n');

        a_title = readLineSync.question('Enter album title: ');
        // cannot be null
        artist_name = readLineSync.question('Enter artist: ');
        // cannot be null
        r_date = readLineSync.question('Enter release date: ');
        category = readLineSync.question('Enter category: ');
        desc = readLineSync.question('Enter a description: ');
        riyl = readLineSync.question('Enter RIYL: (Enter, Like, This, Up To, Five) ')
        rot_s = readLineSync.question('\nDo you want to put this album in rotation? (y/n) ');
        if (rot_s == 'y') {
            rot_f = 1;
        }
        if (rot_s == 'n') {
            rot_f = 0;
        }

        console.log('\nCreated a new album entry with unique id: ' + album_id + 
        '\n\nTitle: ' + a_title +
        '\nArtist: ' + artist_name +
        '\nReleased: ' + release_date +
        '\nAdd Date: ' + r_date +
        '\nCategory: ' + category +
        '\nDescription: ' + desc +
        '\nRIYL: ' + riyl);

        riyl_a = riyl.split(', ');

        var a_comm = readLineSync.question('\nCommit this entry to the database? (y/n) ');

        if (a_comm == 'y') {

            connection.query('INSERT INTO ALBUM (Album_id, Album_title, Category, Release_date, Add_date, Rotation_flag, Description, Artist)' + 
            'VALUES(\''+ album_id +'\',\''+ a_title +'\',\''+ category +'\',\''+ r_date 
            +'\',\''+ a_date +'\', '+ rot_f +',\''+ desc +'\',\''+ artist_name +'\');', function(error, results) {
            if (error) throw error;
            });

            for(i in riyl_a) {
                var temp_id;
                connection.query('SELECT Artist_id FROM rotation.ARTIST WHERE Artist_name = "'+ riyl_a[i] +'"', function(error, results, fields) {
                    if (error) throw error;
                    if (results) {
                        temp_id = artist.addAuto(connection);   
                    }
                    else temp_id = results[0].Artist_id;

                    connection.query('INSERT INTO RIYL (Album_id, Artist_id) VALUES (\''+ album_id +'\', \''+ temp_id +'\');', function(error) {
                        if(error) throw error;
                    });
                });
            }
            

            console.log('\nEntry committed.');
        }
        else if (a_comm == 'n') {
            console.log('\nEntry cancelled.');
        }
    },
    // remove: function delAlbum(connection, selected_row) {
    //     var album_id;
    //     // Get album_id from the user's selected row from main app

    //     // Delete album? Dialog to confirm deletion
    //     connection.query('DELETE FROM ALBUM WHERE Album_id ='+ album_id +';', function(error) {
    //         if (error) throw error;
    //     });
    // },
    update: function updateAlbum(connection, selected_row) {
        var album_id;
        // Get album_id from selected row
        // Should be able to update any row except ID and rotation
        // Rotation should be updated via a different interface or a right click option

        // Prompt user by showing the current data in the row (as a form) and allow to change data
        // Then update all data to what form has (except ID & rotation)!
        connection.query('UPDATE `rotation`.`ALBUM` SET `Album_title`=\'' + a_title +'\', `Category`=\''+ category +'\', ' + 
            '`Release_date`=\''+ r_date +'\', `Add_date`=\''+ a_date +'\', `Description`=\''+ desc +'\', ' +
            '`Artist`=\''+ artist_name +'\' WHERE `Album_id`='+ album_id +';', function(error) {
            if (error) throw error;
        }); 
    },
    toggle_rot: function toggleRotation(connection, selected_row) {
        // get album_id from selected row
        // only toggles the rotation flag
        // through a dialog box or right click option?

        connection.query
        connection.query('UPDATE `rotation`.`ALBUM` SET `Rotation_flag`= !`Rotation_flag`' + 
            'WHERE `Album_id`='+ album_id +';', function(error) {
            if (error) throw error;
        }); 
        
    } 
};
