const mongoose = require('mongoose');
const { updatedAtSchema ,createdAtSchema } = require('./Utility.Schema');

const divisions = new mongoose.Schema({
    id: {
       type: String,
       required: true,  
    },
    name: {
       type: String,
       required: true,  
    },  
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema

});
const departments = new mongoose.Schema({
    id: {
       type: String,
       required: true,  
    },
    name: {
       type: String,
       required: true,  
    },
    division: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "divisions"
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema

});

const divisionSchema = mongoose.model('divisions', divisions);
const departmentSchema = mongoose.model('departments', departments);

module.exports = {
    divisionSchema,
    departmentSchema
}