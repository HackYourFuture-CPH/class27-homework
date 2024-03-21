import React, { useState } from "react";

function NewTodoForm() {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
