var mongoose = require('mongoose');
var dbURI = "mongodb+srv://Doukpng:ChUGPnqNfvUYUv7S@east.t6fe8.mongodb.net/"

mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to " + dbURI)
})
mongoose.connection.on("disconnected",function(err){
    console.log("Mongoose disconnected to " + dbURI)
})

process.on("SIGINT",function(){
    mongoose.connection.close()
    console.log("mongodb bağlantısı kesildi uygulama durduruldu.")
    process.exit(0)
})

