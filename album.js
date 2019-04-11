const readLineSync = require('readline-sync');

module.exports = {
    add: function addAlbum(connection) {

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

        console.log('\n\nCreating a new album entry...\n\n');

        a_title = readLineSync.question('Enter album title: ');
        // cannot be null
        artist_name = readLineSync.question('Enter artist: ');
        // cannot be null
        r_date = readLineSync.question('Enter release date: ');
        category = readLineSync.question('Enter category: ');
        desc = readLineSync.question('Enter a description: ');
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
        '\nDescription: ' + desc);

        var a_comm = readLineSync.question('\nCommit this entry to the database? (y/n) ');

        if (a_comm == 'y') {

            connection.query('INSERT INTO ALBUM (Album_id, Album_title, Category, Release_date, Add_date, Rotation_flag, Description, Artist\)' + 
            'VALUES(\''+ album_id +'\',\''+ a_title +'\',\''+ category +'\',\''+ r_date 
            +'\',\''+ a_date +'\', '+ rot_f +',\''+ desc +'\',\''+ artist_name +'\'\)\;', function(error, results) {
            if (error) throw error;
            });

            console.log('\nEntry committed.');
        }
        else if (a_comm == 'n') {
            console.log('\nEntry cancelled.');
        }
    },
    remove: function delAlbum(connection, selected_row) {
        var album_id;
        // Get album_id from the user's selected row from main app

        // Delete album? Dialog to confirm deletion
        connection.query('DELETE FROM ALBUM WHERE Album_id ='+ album_id +';', function(error) {
            if (error) throw error;
        });
    },
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
