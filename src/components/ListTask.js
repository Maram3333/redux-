import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { setFilter } from "../tasksSlice";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) => task.isDone === (filter === "done"));

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("done"))}>Done</button>
        <button onClick={() => dispatch(setFilter("not"))}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
