import React from "react";

import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddTripForm from "./AddTripForm";
import EditTripForm from "./EditTripFrom";

function TripForm() {
  const trips = useSelector((state) => state.travels.items);

  const [query] = useSearchParams();
  const editId = query.get("editId");

  if (editId) {
    const requestedTrip = trips.find((item) => item.id === +editId);
    if (!requestedTrip) {
      return <p>no trip</p>;
    } else {
      return <EditTripForm oldTripInfo={requestedTrip} />;
    }
  }

  return <AddTripForm />;
}

export default TripForm;
