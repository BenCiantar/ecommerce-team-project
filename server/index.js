//Import dependencies
import express from "express";
import mongodb, { ObjectId } from "mongodb";
import cors from "cors";

//Configure MongoDB
const MONGODB_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://userAdmin:admin123@cluster0.1v7rv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoClient = new mongodb.MongoClient(MONGODB_URL);
mongoClient.connect();

const db = mongoClient.db("ecommerce-group");
const itemsCollection = db.collection("items");
const cartCollection = db.collection("cart");

const PORT = process.env.PORT || 8080;
const app = express();

//For debugging to see the time, method and elapsed time when a request made (GET, POST, DELETE, etc)
const requestLogger = (request, response, next) => {
  const timestamp = new Date().toISOString();
  const method = request.method;
  const url = request.url;
  const currentTimeMs = Date.now();
  const logString = `Timestamp: ${timestamp}, Method: ${method}, URL: ${url}`;

  request.on("end", () => {
    const elapsedTimeMS = Date.now() - currentTimeMs;
    console.log(`${logString}, elapsedTimeMS: ${elapsedTimeMS}ms`);
  });
  next();
};

app.use(requestLogger);
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

//get item collection
app.get("/items", async (request, response) => {
  const products = await itemsCollection.find({}).toArray();
  response.json(products);
});

app.get("/cart", async (request, response) => {
  const cartItems = await cartCollection.find({}).toArray();
  response.json(cartItems);
});

// Keep server running

//Get all items from the db that match the category
app.get("/items/:category", async (request, response) => {
  const category = request.params.category;
  const filteredItems = await itemsCollection
    .find({ category: category })
    .toArray();
  response.json(filteredItems);
});
//Get single item that matches Id
// add new to ObjectId, import ObjectId, findOne instead of find()
//try and catch
app.get("/item-by-id/:id", async (request, response) => {
  try {
    const id = new ObjectId(request.params.id);
    const filteredItems = await itemsCollection.findOne({ _id: id });
    response.json(filteredItems);
    console.log(request.params);
  } catch (err) {
    console.log(err);
  }
});

//Keep server running
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
