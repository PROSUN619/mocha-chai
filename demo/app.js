//console.log('Hello Node Js1');

const express = require('express');
const app = express();
const port = 5000;
const userRoutes = require('./routes/userRoutes')

// app.get('/', (req,res) => {
//     res.send('Hello');
// });

app.use('/api',userRoutes);


const server = app.listen(port, () => {
    console.log(`App is listening at port no ${port}`);
})


module.exports = server;


