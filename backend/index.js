import express from "express";
import mysql from "mysql";
import cors from "cors";
// import multer from "multer";

// handlers
import {
  addService,
  addTrip,
  deleteTrip,
  editTrip,
  getTripServices,
  getTrips,
} from "./trips/index.js";

// let storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// let upload = multer({ storage: storage }).single("file");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "travel",
});

db.connect((err) => {
  if (err) {
    console.log("not connected");
    throw err;
  }
  console.log("Connected to MySQL database");
});

// Trips Actions
// get all trips
app.get("/trips", getTrips);

// get trip services..

app.post("/tripServices", getTripServices);

// add service
app.post("/addService", addService);
// add trip
app.post("/trip", addTrip);

// edit trip
app.post("/editTrip", editTrip);
app.listen(8800, () => {
  console.log("connected to backend!!!!");
});

// delete trip
app.post("/deleteTrip", deleteTrip);

// Booking actions
// Book a trip

app.post("/book", (req, res) => {
  const q = "UPDATE trip SET `seats` = ?  WHERE id = ?;";
  let tripId = req.body.destination;
  let seats = req.body.numOfASeats - req.body.numOfPassengers;
  console.log(req.body);

  if (seats < 0) {
    res.status(300).json(err);
  } else {
    db.query(q, [seats, tripId], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data);
    });
  }
});

export { db };
