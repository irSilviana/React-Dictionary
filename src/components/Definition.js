import React from "react";
import Synonym from "./Synonym";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h6>Definition</h6>
      <div>{props.definition.definition}</div>
      <div>
        Example: <em>{props.definition.example}</em>
      </div>
      <Synonym synonym={props.definition.synonyms} />
    </div>
  );
}
