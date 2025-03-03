"use client";

import { accountAtom } from "@/factories/atoms";
import { useAtom } from "jotai";
import { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

export default function TasksPage() {
  const [user] = useAtom(accountAtom);

  const initialTasks = [
    {
      id: 1,
      name: "Design Home Page",
      description: "Create the layout and design for the homepage.",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Implement User Authentication",
      description: "Add login and signup functionality.",
      status: "Pending",
    },
    {
      id: 3,
      name: "Test Payment Gateway",
      description: "Ensure the payment gateway integration works correctly.",
      status: "Completed",
    },
    {
      id: 4,
      name: "Optimize Database Queries",
      description: "Improve the performance of database queries.",
      status: "Completed",
    },
  ];
  const [tasks] = useState(initialTasks);

  const handleAdd = () => {
    if (
      user.roles &&
      (user.roles!.indexOf("admin") > -1 || user.roles!.indexOf("manager") > -1)
    ) {
      alert("Allow");
    } else {
      alert("Deny");
      return;
    }
  };

  const handleUpdate = (id: number) => {
    if (
      user.roles &&
      (user.roles!.indexOf("admin") > -1 || user.roles!.indexOf("manager") > -1)
    ) {
      alert("Allow");
    } else {
      alert("Deny");
      return;
    }
  };

  const handleDelete = (id: number) => {
    if (user.roles && user.roles.indexOf("admin") > -1) {
      alert("Allow");
    } else {
      alert("Deny");
    }
  };

  return (
    <div className="p-4">
      <h1>Tasks</h1>
      <button className="btn btn-primary mb-3" onClick={handleAdd}>
        <FaPlus className="me-2" />
        Add Task
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleUpdate(task.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(task.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
