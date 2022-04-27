const mongoose = require('mongoose');
const Student = require('./schema/Student.Schema')

mongoose.connect("mongodb://localhost/starterdb", () => {
    console.log("Database Connected");
});

const _student = Student.create(a = {
    "dateOfBirth": "11/07/2002",
    "email": "tafadzwa@credevtech.com",
    "phone": "0782615805",
    "foreNames": "Tafadzwa",
    "lastName": "Makumbe",
    "idNumber": "887584875K97",
    "gender": "male",
    "address": {
        "street": "2995, Northwood",
        "city": "Chivhu",
        "country": "Zimbabwe"
    },
    "maritalStatus": "single",
    "nextOfKin": {
        "name": "Dona Makumbe",
        "relation": "Mother",
        "address": {
            "street": "2995, joeop Street, Avondale",
            "city": "Harare",
            "country": "Zimbabwe"
        },
        "phone":"0773858588"

    },
    "olevels": {
        "subjects": [
            {"subject": "English", "grade": "C" , "board": "Zimsec", "year": "2013"}
        ],
        "documents": {
            "name": "236723472654765263.png"
        }
    },
    "alevels": {
        "subjects": [
            {"subject": "Mathematics", "grade": "C" , "board": "Zimsec", "year": "2015"}
        ],
        "documents": {
            "name": "457747847857548588.png"
        }
    },
    "teritiaries": {
        // "qualifications": [
           
        // ],
        // "documents": {
           
        // }
    }
    

        
    
}).then((student) => {
    console.log(student);

});

