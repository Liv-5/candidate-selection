import { Link } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Saved Candidates",
      link: "/SavedCandidates",
    },
  ];

  return (
    <nav className="nav">
      {navLinks.map((l, i) => (
        <Link key={i} className="nav-item nav-link" to={l.link}>
          {l.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
