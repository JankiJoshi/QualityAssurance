/**
 * Created by jjoshi6191 on 4/4/2017.
 */

var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ") -- " + error.message);
}

function successTransaction() {
    console.info("Success: Transaction is successful");
}

var DB = {
    createDatabase: function () {
        var shortName = "Seller";
        var version = "1.0";
        var displayName = "DB for Seller Information";
        var dbSize = 2 * 1024 * 1024;

        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess() {
            console.info("Success: Database creation successful");
        }
    },
    createTables: function () {
        function txFunction(tx) {
            var options = [];
            console.info("Creating table: addCar ");

            var sql = "CREATE TABLE IF NOT EXISTS addCar(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(20) NOT NULL," +
                "address VARCHAR(50) NOT NULL," +
                "city VARCHAR(25) NOT NULL," +
                "email VARCHAR(50) NOT NULL," +
                "phone VARCHAR(13) NOT NULL," +
                "make VARCHAR(30) NOT NULL," +
                "model VARCHAR(30) NOT NULL," +
                "year INTEGER(4) NOT NULL);";

            function successCreate() {
                console.info("Success: table created successfully");
            }

            tx.executeSql(sql, options, successCreate, errorHandler);
            console.info("table created");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};