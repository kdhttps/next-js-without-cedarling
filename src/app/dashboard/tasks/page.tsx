"use client";

import { accountAtom } from "@/factories/atoms";
import { useAtom } from "jotai";

export default function EmployeesPage() {
  const [user] = useAtom(accountAtom);

  const addTask = () => {
    if (
      user.roles.indexOf("admin") > -1 ||
      user.roles.indexOf("manager") > -1
    ) {
      alert("Allow");
    } else {
      alert("Deny");
    }
  };
  const deleteTask = () => {
    if (user.roles.indexOf("admin") > -1) {
      alert("Allow");
    } else {
      alert("Deny");
    }
  };
  const viewTaskDetails = () => {
    alert("Allow");
  };

  return (
    <div>
      <h1>Tasks</h1>
      <p>This is the Task page.</p>
      <button onClick={viewTaskDetails} className="btn btn-primary">
        Task 1 Details
      </button>
      &nbsp;
      <button onClick={viewTaskDetails} className="btn btn-primary">
        Task 2 Details
      </button>
      <hr />
      <button onClick={addTask} className="btn btn-success">
        Add Task
      </button>
      &nbsp;
      <button onClick={deleteTask} className="btn btn-danger">
        Delete Task
      </button>
    </div>
  );
}
