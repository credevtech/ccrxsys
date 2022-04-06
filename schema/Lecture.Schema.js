const mongoose = require('mongoose');
const { accountSchema, documentSchema, updatedAtSchema ,createdAtSchema , addressSchema } = require('./Utility.Schema');


const lectureSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    class: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "classes",
    },
    module: {
        type: mongoose.SchemaTypes.objectId,
        ref: "modules"
    },
    // attendance: {
    //     type: mongoose.SchemaTypes.objectId,
    //     ref: "attendances"  
    // }

});

module.exports = mongoose.model('lectures', lectureSchema);
