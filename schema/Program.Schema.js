const mongoose = require('mongoose');
const { updatedAtSchema ,createdAtSchema } = require('./Utility.Schema');

const programSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,  
    },
    name: {
        type: String,
        required: true,
    },
    department: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "departments"
    },
    country: {
        type: String,
        required: true,
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
});

module.exports = mongoose.model('programs', programSchema);
