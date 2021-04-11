import React from "react";
import SynonymList from "./SynonymList";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="Synonym">
        Synonyms:
        {props.synonym.map(function (synonym, index) {
          return (
            <span key={index}>
              <SynonymList list={synonym} />
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
