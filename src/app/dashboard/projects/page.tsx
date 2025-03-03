"use client";

import { accountAtom } from "@/factories/atoms";
import { useAtom } from "jotai";

export default function ProjectsPage() {
  const [user] = useAtom(accountAtom);

  const addProject = () => {
    if (user.roles.indexOf("admin") > -1) {
      alert("Allow");
    } else {
      alert("Deny");
    }
  };

  const deleteProject = () => {
    if (user.roles.indexOf("admin") > -1) {
      alert("Allow");
    } else {
      alert("Deny");
    }
  };

  const viewProjectDetails = () => {
    alert("Allow");
  };

  return (
    <div>
      <h1>Projects</h1>
      <p>This is the projects page.</p>
      <button onClick={viewProjectDetails} className="btn btn-primary">
        Project 1 Details
      </button>
      &nbsp;
      <button onClick={viewProjectDetails} className="btn btn-primary">
        Project 2 Details
      </button>
      <hr />
      <button onClick={addProject} className="btn btn-success">
        Add Project
      </button>
      &nbsp;
      <button onClick={deleteProject} className="btn btn-danger">
        Delete Project
      </button>
    </div>
  );
}
