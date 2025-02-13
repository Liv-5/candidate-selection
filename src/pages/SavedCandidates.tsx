import { useRef, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const candidates = useRef<Candidate[]>([]);
  useEffect(() => {
    const getSavedCandidates = () => {
      const storedData = localStorage.getItem("savedCandidates");
      const savedCandidates: Candidate[] = storedData
        ? (JSON.parse(storedData) as Candidate[])
        : [];
      savedCandidates.map((candidate: Candidate) => {
        candidates.current.push(candidate);
      });
      console.log(candidates);
    };
    getSavedCandidates();
  }, []);

  // const handleDelete = (candidate.login) => {

  return (
    <>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Avatar url</th>
            <th>Login</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>HTML url</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {candidates.current.map((candidate: Candidate, i) => (
            <tr>
              <td key={i}>
                <img
                  src={
                    candidate?.avatar_url ||
                    "https://info.orcid.org/wp-content/uploads/2019/11/github-logo.jpg"
                  }
                  alt="profile image of GitHub user"
                  // width="20px"
                  // height="20px"
                  style={{
                    borderRadius: "25%",
                    maxWidth: "100px",
                    maxHeight: "100px",
                  }}
                />
              </td>
              <td key={candidate.login || i}>{candidate.login}</td>
              <td key={candidate.name}>{candidate.name}</td>

              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>
                <a
                  href="{candidate.html_url}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {candidate.html_url}
                </a>
              </td>
              <td key={candidate.company}>{candidate.company}</td>
              <td key={i}>
                <button onClick={() => handleDelete(candidate.login)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
