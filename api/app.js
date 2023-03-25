require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors('*'));

// app.listen(port);

// Public route
// app.get('/', (req,res) => {
//     res.status(200).json({msg: "Api Works"})
// });

const userRoutes = require('./routes/userRoute');
// app.use('/auth/register', userRoutes);
app.use('/user', userRoutes);

const authRoute = require('./routes/loginRoute')
app.use('/auth/login', authRoute);

const bookRoute = require('./routes/bookRoute');
app.use('/books', bookRoute)



const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose.connect(
    // `mongodb+srv://${dbUser}:${dbPassword}@cluster0.cnwqr6g.mongodb.net/?retryWrites=true&w=majority`
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.lmftgwd.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
    app.listen(port) 
    console.log('connected')
    })
    .catch((err)=> { console.log(err),console.log('O cluster pode estar fora do ar.. aguarde um instante')} )