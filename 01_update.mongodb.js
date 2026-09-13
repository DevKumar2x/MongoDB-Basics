use('ecommerce');

db.products.updateOne(
    { name: "Wireless Mouse" },
    { $set: { price: 899 } }
)

db.products.updateMany(
    { category: "Electronics" },
    { $inc: { stock: 10 } }
)

db.products.updateOne(
    { name: "Wireless Mouse" },
    { $push: { tags: "new" } }
)

// Aggregation Framework : 

// Total revenue from all orders
db.orders.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: "$total" } } }
])

// group by status
db.orders.aggregate([
    { $group: { _id: "$status", totalOrders: { $sum: 1 } } }
])

// Lookup (Join Orders with Products)
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            localField: "products.name",
            foreignField: "name",
            as: "productDetails"
        }
    }
])