const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true
    },
});
const createdAtSchema = {
    type: Date,
    immutable: true,
    default: () => Date.now()
};
const updatedAtSchema = {
    type: Date,
    default: () => Date.now()
};
const addressSchema = new mongoose.Schema({
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
});

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});

module.exports = {
    documentSchema,
    createdAtSchema,
    updatedAtSchema,
    addressSchema,
    accountSchema
}