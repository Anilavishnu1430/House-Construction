// //import mongoose
// const mongoose = require("mongoose");

// //Create schema and model
// const booknowSchema = new mongoose.Schema({
//     type: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         required: true,
//     },
//     stage: {
//         type: String,
//         required: true,
//     },
//     unit: {
//         type: String,
//         required: true,
//     },
//     area: {
//         type: Number,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     fullname: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     advanceAmount: {
//         type: Number,
//         default: 5000,
//         required: true
//     },
//     status: {
//         type: String,
//         default: 'Pending'
//     }
// });

// module.exports = mongoose.model("booknow", booknowSchema);