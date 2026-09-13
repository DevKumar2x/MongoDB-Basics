use('ecommerce');

db.products.find()

db.products.find().pretty()

db.products.find({ category: "Electronics" })

db.products.find({ price: { $gt: 1000 } }) // greater than 1000
db.products.find({ price: { $gte: 1000, $lte: 50000 } })

db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

db.products.find({}, { name: 1, price: 1, _id: 0 })

db.products.find().sort({ price: -1 }).limit(2)


// Create an Index
db.products.createIndex({ name: 1 })

// View All Indexes
db.products.getIndexes()

// Explain Query Performance
db.products.find({ price: { $gt: 5000 } }).explain("executionStats")

