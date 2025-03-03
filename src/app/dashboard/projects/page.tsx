"use client";

import { accountAtom } from "@/factories/atoms";
import { useAtom } from "jotai";
import { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

export default function ProjectsPage() {
  const [user] = useAtom(accountAtom);

  const initialProjects = [
    {
      id: 1,
      name: "Project Alpha",
      description: "A project for testing purposes",
      status: "Active",
    },
    {
      id: 2,
      name: "Project Beta",
      description: "A project for development",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "A project for deployment",
      status: "Completed",
    },
  ];
  const [projects] = useState(initialProjects);

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
    if (user.roles && user.roles!.indexOf("admin") > -1) {
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
      <h1>Projects</h1>
      <button className="btn btn-primary mb-3" onClick={handleAdd}>
        <FaPlus className="me-2" />
        Add Project
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
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleUpdate(project.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(project.id)}
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
