"use client";
export default function ProjectsPage() {
  const addProject = () => {};

  return (
    <div>
      <h1>Projects</h1>
      <p>This is the projects page.</p>
      <button onClick={addProject} className="btn btn-success">
        {" "}
        Add Project{" "}
      </button>
    </div>
  );
}
