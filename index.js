require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');



const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}))


//connect to mongo db
const URI = process.env.MONGO_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}, (err)=>{

    if(err) throw err;
    else{
        return console.log(`mongodb connected yes!!`);
    }

})

//routes
app.use('/contact', require('./routes/contactRoute'));
app.use('/user', require('./routes/userRoute'));
app.use('/', require('./routes/projectRoute'));
app.use('/', require('./routes/expRoute'));
app.use('/', require('./routes/eduRoute'));
app.use('/', require('./routes/aboutRoute'));
app.use('/', require('./routes/upload'));


PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening on port:${PORT}`);
})