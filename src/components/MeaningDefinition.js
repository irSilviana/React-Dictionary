import React from "react";
// import Synonym from "./Synonym";

export default function MeaningDefinition(props) {
  return (
    <div className="MeaningDefinition">
      <h6>Definition</h6>
      <div>{props.definition.definition}</div>
      <div>
        Example: <em>{props.definition.example}</em>
      </div>
      {/* <Synonym synonym={props.definition.synonyms} /> */}
    </div>
  );
}
