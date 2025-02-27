// app/dashboard/layout.js
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-light vh-100 p-3">
          <h2 className="mb-4">Next JS</h2>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link href="/dashboard/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/employees" className="nav-link">
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/manage" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4">{children}</div>
      </div>
    </div>
  );
}
