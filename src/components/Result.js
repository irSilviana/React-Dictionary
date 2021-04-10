import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>
        <p>{props.result.phonetics[0].text}</p>

        {/* Looping Meaning component
        <Meaning meaning={props.result.meanings[0]} />
        <Meaning meaning={props.result.meanings[1]} />
        <Meaning meaning={props.result.meanings[2]} /> */}

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
