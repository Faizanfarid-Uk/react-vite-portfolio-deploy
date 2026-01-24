import { useLocation, Link } from "react-router-dom";

function PageHeader() {
  const location = useLocation();
  const path = location.pathname;

  const pageMap = {
    "/about": "About",
    "/skills": "Skills",
    "/projects": "Projects",
    "/contact": "Contact",
  };

  const pageTitle = pageMap[path];

  if (!pageTitle) return null; // no breadcrumb on home

  return (
    <div className="page-header">
      <p className="breadcrumb">
        <Link to="/">Home</Link> <span>/</span> {pageTitle}
      </p>
    </div>
  );
}

export default PageHeader;
