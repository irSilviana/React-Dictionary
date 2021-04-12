import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeyword(e) {
    setKeyword(e.target.value.trim());
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search(keyword);
  }

  function load() {
    search(keyword);
    setLoaded(true);
  }

  function search(keyword) {
    //Documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
    setKeyword(keyword);
  }

  function handleError(error) {
    console.clear(error);

    alert(
      `😮 Sorry, we can't find the definition of "${keyword}" 
Please type the correct word in English (US) 🌎`
    );
  }

  let form = (
    <section>
      <p>What word do you want to look up?</p>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search for a word..."
          defaultValue={keyword}
          onChange={handleKeyword}
        />
      </form>
      <div className="hint">
        Get definitions, synonyms, translations and more
      </div>
    </section>
  );

  if (loaded) {
    return (
      <div className="Dictionary">
        {form}
        <Result result={result} search={search} setKeyword={setKeyword} />
      </div>
    );
  } else {
    load();
    return (
      <div className="Dictionary">
        {form}
        Loading...
      </div>
    );
  }
}
