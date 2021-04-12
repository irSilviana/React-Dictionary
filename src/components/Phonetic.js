import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  function start() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <FontAwesomeIcon icon={faPlayCircle} onClick={start} />{" "}
      <span>{props.phonetic.text}</span>
    </div>
  );
}
