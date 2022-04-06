const mongoose = require('mongoose');
const { documentSchema, updatedAtSchema ,createdAtSchema } = require('./Utility.Schema');


const transactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    purpose: {
        type: String,
        required: true,
        lowercase: true

    },
    amount: {
        type: Number,
        required: true,
    },
    documents: [documentSchema],
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});
const invoiceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});
const recieptSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    transaction: transactionSchema, 
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});

const chargeSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    purpose: {
        type: String,
        required: true,
        lowercase: true
    },
    amount: {
        type: Number,
        required: true,
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});

const billingSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: true,
    },
    debit: {
        balance: Number,
        debits: [chargeSchema]
    },
    credit: {
        balance: Number,
        credits: [transactionSchema]
    },
    invoices: [invoiceSchema],
    reciepts: [recieptSchema],

    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
});

module.exports = mongoose.model('billings', billingSchema);