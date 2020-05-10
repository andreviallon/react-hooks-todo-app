const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },

    checked: {
        type: Boolean,
        default: false,
        required: [true]
    }
});


module.exports = mongoose.model('Todo', TodoSchema);
