import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import Candidate from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [users, setUsers] = useState<Candidate[]>([]);
  const [candidate, setCandidate] = useState<Candidate>();

  useEffect(() => {
    searchGithub().then((data) => {
      setUsers(data);
      console.log(data);

      const results = searchGithubUser(users[0]);

      setCandidate();
    });
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      searchGithubUser(users[0].username).then((data) => {
        setCandidate(data);
        console.log("Fetched Candidate:", data);
      });
    }
  }, [users]);

  return <h1>users[0]</h1>;
};

export default CandidateSearch;
