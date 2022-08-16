const express = require('express');
const db = require('./config/connection')

const User = require('./models/User')
const workoutRoutes = require('./controllers/workouts')

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('api/workouts', workoutRoutes)

run()
async function run() {
    try {
    const user = await User.create({ 
        name: 'Kyle', 
        age: 26,
        email: "APPLE@gmail.com",
        hobbies: ["Gym", "Dancing", "Singing"],
        address: {
            street: "Main St",
        },
    })
    console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}
// user.save().then(() => console.log("User Saved!"))
