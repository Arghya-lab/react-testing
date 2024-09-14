import React, { useState } from "react";

function MovieForm({ handleSubmit }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    handleSubmit({ text });
  };

  return (
    <form data-testid="form" onSubmit={onSubmit}>
      <input
        data-testid="text-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button data-testid="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default MovieForm;
