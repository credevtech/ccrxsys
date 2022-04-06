const mongoose = require('mongoose');
const { updatedAtSchema ,createdAtSchema } = require('./Utility.Schema');


const roomTypeSchema = new mongoose.Schema({
    
    name: {
       type: String,
       required: true,  
    },
    price: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "roomTypes"
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
   
});
const blockSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true,  
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
   
});
const roomSchema = new mongoose.Schema({

    name: {
       type: String,
       required: true,  
    },
    type: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "roomTypes"
    },
    block: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "block"
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
   
});




const accomodationSchema = new mongoose.Schema({

    name: {
       type: String,
       required: true,  
    },
    category: [String],
    code: String,
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
   
});


const accomodation = mongoose.model('accomodations', accomodationSchema);
const room = mongoose.model('rooms', roomSchema);
const block = mongoose.model('block', blockSchema);
const roomType = mongoose.model('roomType', roomTypeSchema);


module.exports = {
    accomodation,
    room,
    block,
    roomType,
}