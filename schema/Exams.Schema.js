const mongoose = require('mongoose');
const { documentSchema, updatedAtSchema ,createdAtSchema } = require('./Utility.Schema');


const examSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true,
    },
    paper: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true.value,
        ref:"papers"
    },
    time: {
        type: String,
        required: true,
    },
    documents: [documentSchema],
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});
const resultSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    paper: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true.value,
        ref:"papers"
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});

const paperSchema = new mongoose.Schema({
    code: {
        type: Date,
        required: true
    },
    module: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref:"modules"
    },
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema,
});

const resultsSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    results: [resultSchema],
    createdAt: createdAtSchema,
    updatedAt: updatedAtSchema
});


const result = mongoose.model('result', resultSchema);
const results = mongoose.model('results', resultsSchema);
const paper = mongoose.model('papers', paperSchema);
const exam = mongoose.model('exam', examSchema);

module.exports = {
    result,
    results,
    paper,
    exam
};