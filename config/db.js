const mongoose = require('mongoose')


const connectDb = async () => {
    // const url = 'mongodb://nikolay:qwerty@127.0.0.1:27017';
    // const conn = await mongoose.connect(url);
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
    // const Cat = mongoose.model('Cat', { name: String });
    //
    // const kitty = new Cat({ a: 3 });
    // kitty.save().then(() => console.log('meow'));

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
}

module.exports = connectDb