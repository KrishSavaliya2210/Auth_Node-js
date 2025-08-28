const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL;


main().
then(() => console.log("Database connection successful")).
catch(err => console.log(err));

async function main() {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB");    
}
