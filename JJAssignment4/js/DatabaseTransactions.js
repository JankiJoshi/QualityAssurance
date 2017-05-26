/**
 * Created by jjoshi6191 on 4/4/2017.
 */


var addCar;
addCar = {
    insert: function (options) {

        function txFunction(tx) {

            var sql = "INSERT INTO addCar(name, address, city, email, phone, make, model, year)" +
                " VALUES(?,?,?,?,?,?,?,?);";

            function successInsert(tx, results) {
                console.info("Success: Insert Successful");

                $(location).prop('href', "#displayInfo");
                localStorage.setItem("id", results.insertId);
            }
            tx.executeSql(sql, options, successInsert, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, successSelectLastRecord) {

        function txFunction(tx) {

            var sql = "SELECT * FROM addCar WHERE id=?;";

            tx.executeSql(sql, options, successSelectLastRecord, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function (successSelectAllRecords) {
        function txFunction(tx) {

            var sql = "SELECT * FROM addCar;";
            var options = [];

            tx.executeSql(sql, options, successSelectAllRecords, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};