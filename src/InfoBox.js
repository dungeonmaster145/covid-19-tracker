import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases,active, total,isRed,...props}) {
  //console.log(title, active);
  return (
    <Card onClick={props.onClick} className={`infoBox ${active && 'infobox--selected' } ${isRed && 'infoBox--red'}`}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${isRed && "infobox--current"}`} >
          {cases}
        </h2>

        <Typography className="infoBox__total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;