import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import TripForm from "../../../components/Admin/TripForm";
import ServiceForm from "../../../components/Admin/ServiceForm";
import Container from "../../../components/UI/Container";

import classess from "./settings.module.css";

function Settings() {
  const [query] = useSearchParams();
  const navigate = useNavigate();
  const type = query.get("type");

  const filters = [
    { name: "Add Trip", type: "trip" },
    { name: "Add Service", type: "service" },
  ];

  const filtersBtns = filters.map((btn) => (
    <div
      key={btn.type}
      onClick={() => navigate(`/admin/?type=${btn.type}`)}
      className={
        type === btn.type
          ? `${classess.filterBtn} ${classess.filterBtnActive}`
          : classess.filterBtn
      }
    >
      {btn.name}
    </div>
  ));

  if (query.get("type"))
    return (
      <div>
        <div className={classess.filters}>{filtersBtns}</div>
        <Container className={classess.settings}>
          {type === "service" && <ServiceForm />}
          {type === "trip" && <TripForm />}
        </Container>
      </div>
    );

  return <></>;
}

export default Settings;
