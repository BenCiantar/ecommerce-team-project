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

app.use(cors({origin: "*"}));
app.use(express.json());

app.use(requestLogger);

//get item collection
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

//Get all items from the db
app.get("/all-items/", async (request, response) => {
  const items = await itemsCollection
    .find({})
    .toArray();
  response.json(items);
});

//Get all items from the db where the name inclused the query string
app.get("/filtered-items/:query", async (request, response) => {
  const query = request.params.query;
  const filteredItems = await itemsCollection
    .find({name: {$regex: query, $options: "i"}})
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

app.post("/login", async (request, response) => {
  const loginDetails = request.body;
  const users = await usersCollection.find({}).toArray();
  let userExist = false;
  let userDetails = {};
  for (let user of users) {
    if (
      user._id === loginDetails._id &&
      user.password === loginDetails.password
    ) {
      userExist = true;
      userDetails = user;
      userDetails.isLoggedIn = true;
    }
  }
  if (userExist) {
    response.json(userDetails);
    response.status(200).end();
  } else {
    response.statusMessage = "Incorrect login details, please try again.";
    response.status(400).end();
  }
});

//Keep server running
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
