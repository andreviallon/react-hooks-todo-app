const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        require: [true, 'Please add a todo']
    },

    checked: {
        type: Boolean
    }
});


module.exports = mongoose.model('Transaction', TransactionSchema);
