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
      {navLinks.map((l) => (
        <a className="nav-item nav-link" href={l.link}>
          {l.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
