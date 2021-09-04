let mongoose = require('mongoose');
let url= 'mongodb://localhost:27017/employee';
mongoose.connect(url, (error, conn)=>{
    if(error) {
        console.error('Unable to connect to the mongo database');
    }
    console.info('connected successfully');
});