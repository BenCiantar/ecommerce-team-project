//Import dependencies
import express from "express";
import mongodb from "mongodb";
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
const orderCollection = db.collection("orders");
const usersCollection = db.collection("users");

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

app.get("/items", async (request, response) => {
  const products = await itemsCollection.find({}).toArray();
  response.json(products);
});

app.get("/cart", async (request, response) => {
  const cartItems = await cartCollection.find({}).toArray();
  response.json(cartItems);
});

app.get('/orders', async (request, response) => {
  const ordersItems = await orderCollection.find({}).toArray();
  response.json(ordersItems);
});

// GET users
app.get("/users", async (request, response) => {
  const users = await usersCollection.find({}).toArray();
  response.json(users);
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

app.post("/place-order", async (request, response) => {
  const newOrder = request.body;
  console.log(request.body);

  await orderCollection.insertOne(newOrder);

  response.status(200).end();
});

// Register a user -- POST
app.post("/users", async (request, response) => {
  const newUser = request.body;
  await usersCollection.insertOne(newUser);

  response.status(200).end();
});

//Keep server running
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
