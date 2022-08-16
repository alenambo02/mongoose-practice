const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
        street: String, 
        city: String,
    }
)

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} IS NOT AN EVEN NUM`
        }
    },
    email: { 
        type: String, 
        required: true,
        lowercase: true,
    },
    // sidenote if i used immutable: true will never let you change it 
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
})

module.exports = mongoose.model('User', userSchema)