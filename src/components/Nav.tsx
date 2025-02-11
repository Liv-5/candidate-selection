const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const navLinks = [
    {
      name: "Candidate Search",
      link: "/",
    },
    {
      name: "Saved Candidates",
      link: "/Saved",
    },
  ];

  return (
    <nav>
      <section>
        {navLinks.map((l) => (
          <div>
            <a href={l.link}>{l.name}</a>
          </div>
        ))}
      </section>
    </nav>
  );
};

export default Nav;
