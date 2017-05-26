/**
 * Created by jjoshi6191 on 4/4/2017.
 */



function btnSave_click() {
    validateForm();
}

function lastInfo_show() {
    showLastRecord();
}
function selectAll_show() {
    selectAllCars();
}


function init() {
    $("#btnSave").on("click", btnSave_click);
    $("#displayInfo").on("pageshow", lastInfo_show);
    $("#searchCar").on("pageshow", selectAll_show);
}

$(document).ready(function () {
    initDB();
    init();
});

function initDB() {
    try{
        DB.createDatabase();
        console.info("Finally created database");
        if(db){
            console.info("creating tables");
            DB.createTables();
        }
    }catch (e){
        console.error("Error: (Fatal) error initDB, cannot proceed");
    }
}
