const mongoose = require('mongoose');
const express = require('express');
const bookRoute = require('./Route/bookRoute');

require('dotenv/config');

const app = express();

//  Middleware
app.use(express.json());

// Default route
app.get('/',(req, res)=>{
    res.send("This is default route");
})

app.use('/api/book', bookRoute);

async function main() {
    const data = await mongoose.connect(process.env.DB);
    console.log(data.default.STATES.connected);
}
main()

app.listen(process.env.PORT)

// const res = await mongoose.connect('mongodb+srv://Usm21:Usm21@cluster0.eyiasfw.mongodb.net/?retryWrites=true&w=majority');
