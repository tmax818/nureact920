import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4>{(isLoading, errMess)}</h4>;
  }
  return (
    <Card>
      <CardImg src={baseUrl + item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

export default RenderCard;
