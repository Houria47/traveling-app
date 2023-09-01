import { db } from "./../index.js";

export const getTrips = (req, res) => {
  const q = "SELECT * FROM trip";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    let trips = [];
    data.forEach((element) => {
      // let result =  getTripServices(element.id);
      trips.push({ ...element, services: [] });
    });
    return res.json(trips);
  });
};

export const getTripServices = (req, res) => {
  let q =
    "select s.idservices as id ,s.name , s.price , s.image , s.trip_id from travel.trip t right outer join travel.services s on s.trip_id = t.id where s.trip_id = ?";

  let values = [req.body.tripId];
  console.log(req.body);
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const addTrip = (req, res) => {
  const q =
    "INSERT INTO trip (`destination`, `desc`, `price`, `discount`, `image`, `rate`,`seats`, `from`, `times`) VALUES (?);";
  let values = [
    req.body.destination,
    req.body.description,
    req.body.price,
    req.body.discount,
    req.body.image,
    req.body.rate,
    5,
    "",
    "",
  ];

  console.log(req.body);
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const editTrip = (req, res) => {
  const q =
    "UPDATE trip SET `destination` = ? , `desc`= ? , `price`= ? , `discount`= ? , `image`= ? , `rate` = ? ,`seats` = ? , `from` = ? , `times` = ?  WHERE id = ?;";
  let values = [
    req.body.destination,
    req.body.description,
    req.body.price,
    req.body.discount,
    req.body.image,
    req.body.rate,
    5,
    "",
    "",
  ];

  console.log(req.body);
  db.query(q, [...values, req.body.tripId], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const deleteTrip = (req, res) => {
  const q = "DELETE FROM trip  WHERE id = ?;";

  console.log(req.body);
  db.query(q, [req.body.tripId], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// add service

export const addService = (req, res) => {
  const q =
    "INSERT INTO services (`name`,`desc`, `image`, `price`, `discount`, `trip_id`) VALUES (?);";
  let values = [
    req.body.name,
    req.body.description,
    req.body.image,
    req.body.price,
    req.body.discount,
    req.body.tripId,
  ];

  console.log(req.body);
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
