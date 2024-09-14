import React from "react";
import Form from "./Form";

function FormRapper({ handleSubmit }) {
  return (
    <div>
      <h1 data-testid="form-title">New Form</h1>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default FormRapper;
