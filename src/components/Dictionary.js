import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeyword(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Searching for the definition of "${keyword}"`);
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
