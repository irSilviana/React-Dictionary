import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  //let [data, setData] = useState(null);

  function handleKeyword(e) {
    setKeyword(e.target.value.trim());
  }

  function handleResponse(response) {
    //   setData(response.data[0]);
  }

  function handleError(error) {
    console.clear(error);
    alert(
      `😮 Sorry, we can't find the definition of "${keyword}" 
Please type the correct word in English (US) 🌎`
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`🔎 Searching for the definition of "${keyword}"`);

    //Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Input keyword..."
          onChange={handleKeyword}
        />
      </form>
    </div>
  );
}
