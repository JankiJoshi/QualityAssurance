

function validateForm() {
    if(dovalidate()){

        var name = $("#fullName").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var email = $("#email").val();
        var phone = $("#phNumber").val();
        var make = $("#make").val();
        var model = $("#model").val();
        var year = $("#year").val();

        var options = [name, address, city, email, phone, make, model, year ];
        addCar.insert(options);
    }
}

function dovalidate() {
    var form = $("#myForm");

    form.validate({
        rules: {
            fullName: {
                required: true
            },
            address:{
                required: true
            },
            city:{
                required: true
            },
            email: {
                required: true,
                emailCheck: true // custom checking of email
            },
            phNumber: {
                required: true,
                phoneCheck: true // custom checking of phone number
            },
            make: {
                required: true
            },
            model: {
                required: true
            },
            year: {
                required: true
            }
        },
        messages: {
            fullName: {
                required: "Name is required"
            },
            address: {
                required: "Address Name is required"
            },
            city:{
                required: "City is required"
            },
            email: {
                required: "Email is required",
                emailCheck: "Please enter a valid email" // custom checking of email
            },
            phNumber: {
                required: "Phone number is required",
                phoneCheck: "Enter valid phone number" //custom checking of phone
            },
            make: {
                required: "Make name is required"
            },
            model: {
                required: "Model name is required"
            },
            year: {
                required: "Year is required"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("emailCheck",
    function (value, element) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return this.optional(element) || regex.test(value);
    }, "Valid email is required");

jQuery.validator.addMethod("phoneCheck",
    function (value, element) {
        var regex = /^\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/;
        return this.optional(element) || regex.test(value);
    }, "Valid phone is required");



function showLastRecord() {

    var id = localStorage.getItem("id");
    var options = [id];
    addCar.select(options, successSelectLastRecord);

    function successSelectLastRecord(tx,results) {

        var htmlCode;

            var row = results.rows[0];

            htmlCode =
                "<h2>Car Info</h2>" +
                "<p><b>Name: </b>" + row['name'] + "</p>" +
                "<p><b>Address: </b>" + row['address'] + "</p>" +
                "<p><b>City: </b>" + row['city'] + "</p>" +
                "<p><b>Phone: </b>" + row['phone'] + "</p>" +
                "<p><b>Make: </b>" + row['make'] + "</p>" +
                "<p><b>Model: </b>" + row['model'] + "</p>" +
                "<p><b>Year: </b>" + row['year'] + "</p>" +
                "<a href='http://www.jdpower.com/cars/" + row['make'] + "/" + row['model'] + "/" + row['year'] + "'target='_blank'>More...</a>"
            //options = row;

        $("#displayResult").html(htmlCode);

    }
}

function selectAllCars() {

    addCar.selectAll(successSelectAllRecords);

    function successSelectAllRecords(tx,results) {
        var htmlCode;
        if(results.rows.length == 0)
        {
            htmlCode = "<h2>No records yet to display.</h2>"
        }
        else
        {
            htmlCode = "<table>";

            for( var i = 0; i < results.rows.length; i++){
                var row = results.rows[i];

                htmlCode +=
                    "<tr>" +
                    "<td><b>Name: </b>" + row['name'] + "</td>" +
                    "<td><b>Address: </b>" + row['address'] + "</td>" +
                    "<td><b>City: </b>" + row['city'] + "</td>" +
                    "<td><b>Phone: </b>" + row['phone'] + "</td>" +
                    "<td><b>Email: </b>" + row['email'] + "</td>" +
                    "<td><b>Make: </b>" + row['make'] + "</td>" +
                    "<td><b>Model: </b>" + row['model'] + "</td>" +
                    "<td><b>Year: </b>" + row['year'] + "</td>" +
                    "<td><a href='http://www.jdpower.com/cars/" + row['make'] + "/" + row['model'] + "/" + row['year'] + "'target='_blank'>More...</a></td>" +
                    "</tr>"
            }
            htmlCode += "</table>";
        }



       //options = row;

        $("#listView").html(htmlCode);

    }
}