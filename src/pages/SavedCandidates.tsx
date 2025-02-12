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

  return (
    <>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Login</th>
            <th>Name</th>
            <th>Avatar url</th>
            <th>Location</th>
            <th>Email</th>
            <th>HTML url</th> <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {candidates.current.map((candidate: Candidate, i) => (
            <tr>
              <td key={i}>{candidate.login}</td>
              <td key={i}>{candidate.name}</td>
              <td key={i}>
                <img
                  className="avatar"
                  src={
                    candidate?.avatar_url ||
                    "https://info.orcid.org/wp-content/uploads/2019/11/github-logo.jpg"
                  }
                  alt="profile image of GitHub user"
                  width="20"
                  height="20"
                  style={{ borderRadius: "50%" }}
                />
              </td>
              <td key={i}>{candidate.location}</td>
              <td key={i}>{candidate.email}</td>
              <td key={i}>{candidate.html_url}</td>
              <td key={i}>{candidate.company}</td>
              <td key={i}>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
