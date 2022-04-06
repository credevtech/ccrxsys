const mongoose = require('mongoose');
const { accountSchema, documentSchema, updatedAtSchema ,createdAtSchema , addressSchema } = require('./Utility.Schema');


const subjectSchema = new mongoose.Schema({
    subjects: [
        {
            subject: {
                type: String,
                required: true,
            },
            grade: {
                type: String,
                required: true,
                uppercase: true,
            },
            board: {
                type: String,
                required: true,
            },
            year: {
                type: String,
                required: true,
            },
        }
    ],
    documents: [documentSchema]

});

const teritiarySchema = new mongoose.Schema({ 
    qualifications: [
        {
            program: {
                type: String,
                required: true,
            },
            level: {
                type: String,
                required: true,
            },
            institution: {
                type: String,
                required: true,
            },
            year: {
                type: String,
                required: true,
            },
        }
    ],
    documents: [documentSchema]
});

const nextOfKinSchema = new mongoose.Schema({
    name: {
            type: String,
            required: true,
        },
    address: {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    relation: {
        type: String,
        required: true,
        lowercase: true

    },
    phone: {
        type: String,
        required: true,
    },
});

const medicalSchema = new mongoose.Schema({
    condition: {
        type: String,
        required: true,
    },
    documents: [documentSchema],
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});

const studentSchema = new mongoose.Schema({

    dateOfBirth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true

    },
    phone: {
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
    gender: {
        type: String,
        required: true,
        lowercase: true

    },
    address: addressSchema,
    maritalStatus: {
        type: String,
        required: true,
        lowercase: true

    },

    nextOfKin: nextOfKinSchema,
    olevels: subjectSchema,
    alevels: subjectSchema,
    teritiaries: teritiarySchema,
    account: accountSchema,
    medicals: [medicalSchema],
    class: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "classes",
    },
    bill: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "billings",
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});


module.exports = mongoose.model('student', studentSchema);


