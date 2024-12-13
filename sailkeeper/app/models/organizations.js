const mongoose = require('mongoose')

const OrganizationSchema = new mongoose.Schema({
    bizName: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    admin: {
        type: String,
        required: true,
    },
    joinID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Organization', OrganizationSchema)