let mysql = require("mysql");
var db;

function connectDB() {
    if (!db) {
        db = connection = mysql.createConnection({
             host: "134.209.10.140",
             user: "webrequest",
             password: "JpeKR15jYGS54R5j",
             database: "rotation"
        });

        connection.connect(function (err) {   
            if (err) {
                return console.error("error: " + err.message);      
            }
            else {
                console.log("Connected to the MySQL server."); 
            }
        });
    }
    return db;  
}

module.exports = connectDB();