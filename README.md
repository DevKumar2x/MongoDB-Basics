# MongoDB Practice

This project is a small MongoDB learning workspace for practicing database setup, CRUD operations, querying, updates, and deletions using sample e-commerce data.

## Project Files

- `01_setup.mongodb.js` - creates the `ecommerce` database and inserts sample data into `products`, `orders`, and `contacts`
- `01_read.mongodb.js` - demonstrates basic and advanced read queries, sorting, projection, indexing, and query explanation
- `01_update.mongodb.js` - shows update operations and aggregation examples
- `01_delete.mongodb.js` - contains delete examples for single and multiple records

## Database and Collections

The setup script creates the following database and collections:

- Database: `ecommerce`
- Collections:
  - `products`
  - `orders`
  - `contacts`

## Typical Workflow

1. Start MongoDB locally or connect to your MongoDB instance.
2. Run `01_setup.mongodb.js` first to populate the database.
3. Run `01_read.mongodb.js` to test queries.
4. Run `01_update.mongodb.js` to practice update operations and aggregations.
5. Run `01_delete.mongodb.js` when you want to test delete operations.

## Example Usage

Using MongoDB shell or VS Code MongoDB extension, open each file and run it in order.

## Notes

- The database name used in the project is `ecommerce`.
- For consistency, make sure all scripts use the same database name.
- These scripts are intended for learning and practicing MongoDB fundamentals.

## Learning Focus

This repository covers:

- Database creation and seeding
- MongoDB find queries
- Filtering and projection
- Sorting, limiting, and indexing
- Update operations (`updateOne`, `updateMany`, `$set`, `$inc`, `$push`)
- Aggregation with `$group` and `$lookup`
- Delete operations (`deleteOne`, `deleteMany`)
