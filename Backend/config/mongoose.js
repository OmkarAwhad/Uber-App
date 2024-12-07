const mongoose = require('mongoose')

exports.connect = () => {
     mongoose.connect(process.env.MONGODB_URL)
     .then(()=> console.log("DB connected"))
     .catch((e)=>{
          console.log("Error in DB connected ")
          console.error(e)
          process.exit(1)
     })
}