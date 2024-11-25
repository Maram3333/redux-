import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description.trim()) {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
