const mongoose = require('mongoose');
const { updatedAtSchema ,createdAtSchema } = require('./Utility.Schema');


const moduleSchema = new mongoose.Schema({
    id: {
       type: String,
       required: true,  
    },
    name: {
       type: String,
       required: true,  
    },
    category: [String],
    code: String,
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
   
});

module.exports = mongoose.model('modules', moduleSchema);
