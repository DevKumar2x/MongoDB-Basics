use('eccomerce');

// delete one
db.contacts.deleteOne({ name: "Alice" })

// delete many
db.orders.deleteMany({ status: "Delivered" })

