import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>

        {props.result.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

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
