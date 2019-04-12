
/**
 * NOTES:
 * 
 * When adding a new artist, be sure to check for duplicate IDs. Cannot have duplicate primary keys, will error.
 * 
 * REMOVING ARTISTS NOT ALLOWED!! If an artist is removed then riyl, songs, and albums break
 * Also, why would you need to delete an artist on here?? If they are pieces of shit, admins can go into the DB
 * and delete them manually.
 */
module.exports = {

    add: function addArtist(connection) {

        var artist_id = "A" + Math.floor((Math.random() * 9999) + 1);
        // check if this id is in the database!!!
        var artist_name;
        var debut;
        var genre;
        var country;
        var state;
        var city;

        connection.query('INSERT INTO ARTIST (Artist_id, Artist_name, City, State, Country, Debut_year, Genre)' + 
            'VALUES(\''+ artist_id +'\',\''+ artist_name +'\',\''+ city +'\',\''+ state 
            +'\',\''+ country +'\', '+ debut +',\''+ genre +'\');', function(error, results) {
            if (error) throw error;
            });

        return artist_ID;
    },
    addAuto: function addArtistAuto(artist, connection) {

        var artist_id = "M" + Math.floor((Math.random() * 9999) + 1);
        // check if this id is in the database!!!
        var artist_name = artist;

        connection.query('INSERT INTO ARTIST (Artist_id, Artist_name, City, State, Country, Debut_year, Genre)' + 
            'VALUES(\''+ artist_id +'\',\''+ artist_name +'\', NULL, NULL, ' +
            'NULL, NULL, NULL );', function(error, results) {
            if (error) throw error;
            });

        return artist_ID;
    },
    update: function updateArtist(connection, selected_row) {

        connection.query('UPDATE `rotation`.`ARTIST` SET `Artist_name`=\'' + artist_name +'\', `Category`=\''+ category +'\', ' + 
            '`Release_date`=\''+ r_date +'\', `Add_date`=\''+ a_date +'\', `Description`=\''+ desc +'\', ' +
            '`Artist`=\''+ artist_name +'\' WHERE `Album_id`='+ album_id +';', function(error) {
            if (error) throw error;
        });
        


    }

};