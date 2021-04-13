import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.keyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeyword(e) {
    setKeyword(e.target.value.trim());
  }

  function handleResponse(response) {
    setResult(response.data[0]);
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
    search(keyword);
  }

  function load() {
    search(keyword);
    setLoaded(true);
  }

  function search(keyword) {
    setKeyword(keyword);

    //Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);

    // Documentation Photos API: https://www.pexels.com/api/documentation/
    let pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, { headers: headers })
      .then((res) => {
        setPhotos(res.data.photos);
      })
      .catch((error) => {
        console.clear(error);
      });
  }

  function quickSelection(e) {
    e.preventDefault();
    search(e.target.innerHTML);
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
      <div className="list">
        <ul>
          <li>
            <a href="/" onClick={quickSelection}>
              inspiration
            </a>
          </li>
          <li>
            <a href="/" onClick={quickSelection}>
              love
            </a>
          </li>
          <li>
            <a href="/" onClick={quickSelection}>
              heart
            </a>
          </li>
          <li>
            <a href="/" onClick={quickSelection}>
              traveling
            </a>
          </li>
        </ul>
      </div>
    </section>
  );

  if (loaded) {
    return (
      <div className="Dictionary">
        {form}
        <Result result={result} search={search} setKeyword={setKeyword} />
        <Photos photos={photos} />
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
