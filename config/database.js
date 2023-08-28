const mongoose = require('mongoose');

require("dotenv").config();

const connectWithDb=()=>{

    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser :true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB connection is successfully"))
    .catch( (error)=>{
           console.log("issue in DB connection");
           console.log(error);
           process.exit(1);
    }); 

}

module.exports = connectWithDb;  