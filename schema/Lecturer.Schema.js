const mongoose = require('mongoose');
const { accountSchema, addressSchema , updatedAtSchema ,createdAtSchema } = require('./Utility.Schema');

const profileSchema = new mongoose.Schema({
    qualifications: [
        {
            name: String,
            institution: String,
            year: String
        }
    ],
    details: Text,
});

const lecturerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,  
    },
    foreNames: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    idNumber: {
        type: String,
        required: true,
    },
    address: addressSchema,
    profile: profileSchema,
    account: accountSchema,
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
});

module.exports = mongoose.model('lecturers', lecturerSchema);
