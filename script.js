const mongoose = require('mongoose');

async function main() {
     await mongoose.connect('mongodb://localhost:27017/ecommerc');
        console.log('Connected to database');
        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
        });sss
        const Product = mongoose.model('Product', productSchema);
        const data = new Product({
            name: 'Laptop',
            price: 1000,
            category: 'Electronics'
        });
       let result=  await data.save();
        console.log(result);
}

main();