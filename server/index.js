//Import dependencies
import express from "express";
import mongodb from "mongodb";
import cors from "cors";

//Configure MongoDB
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017";
const mongoClient = new mongodb.MongoClient(MONGODB_URL);
mongoClient.connect();
const db = mongoClient.db("ecommerce-group");
