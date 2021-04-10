import React from "react";
import MeaningDefinition from "./MeaningDefinition";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <MeaningDefinition definition={definition} />
          </div>
        );
      })}
    </div>
  );
}
