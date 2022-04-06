const mongoose = require('mongoose');
const { updatedAtSchema ,createdAtSchema } = require('./Utility.Schema');
const programSchema = require('./Program.Schema');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    program: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "programs"
    },
    country: {
        type: String,
        required: true,
    },
    modules: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "modules"
        }
    ],
    
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
});

module.exports = mongoose.model('classes', classSchema);
