import React from "react";
import Synonym from "./Synonym";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <div>{props.definition.definition}</div>
      <div>
        <em className="example">{props.definition.example}</em>
      </div>
      <Synonym
        synonym={props.definition.synonyms}
        search={props.search}
        setKeyword={props.setKeyword}
      />
    </div>
  );
}
