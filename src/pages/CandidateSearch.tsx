import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import Candidate from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [users, setUsers] = useState<[{ login: string }]>([]);
  const [candidate, setCandidate] = useState<Candidate>();
  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    searchGithub().then((data) => {
      setUsers(data);
      console.log(data);
      console.log(users);
      // const results = searchGithubUser(users[0]);

      fetchUser(data);
    });
  }, []);

  const fetchUser = async (data: [{ login: string }]) => {
    try {
      const userData = await searchGithubUser(data[currentIndex].login);
      console.log(userData);
      setCandidate(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const saveCandidate = () => {
    if (currentIndex >= users.length) {
      alert("No more candidates available.");
      return;
    }

    const savedCandidates = 
      const storedData = localStorage.getItem("savedCandidates");
      const savedCandidates: Array<Candidate> = storedData
        ? (JSON.parse(storedData) as Candidate[])
        : [];

      savedCandidates.push(users[currentIndex]); // Save current candidate
      localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
     
      nextCandidate(); // Move to next candidate
    
  };
  const nextCandidate = () => {
    setIndex(currentIndex + 1);
    fetchUser(users);
  };

  // const nextCandidate = () => {
  //   setIndex(currentIndex + 1);

  //   fetchUser(users);
  // };

  //   useEffect(() => {
  //     if (users.length > 0) {
  //       searchGithubUser(users[0].username).then((data) => {
  //         setCandidate(data);
  //         console.log("Fetched Candidate:", data);
  //       });

  //     //  localStorage.setItem("savedUsers", users );
  //     });

  //     }
  //  [users];

  return (
    <div>
      <h1>Candidates </h1>
      <div>
        <img
          src={
            candidate?.avatar_url ||
            "https://info.orcid.org/wp-content/uploads/2019/11/github-logo.jpg"
          }
          alt="profile image of GitHub user"
        />
        <ul>
          <li>Login: {candidate?.login}</li>
          <li>Name: {candidate?.name}</li>
          <li>Location: {candidate?.location}</li>
          <li>Email: {candidate?.email}</li>
          <li>HTML URL: {candidate?.html_url}</li>
          <li>Company: {candidate?.company}</li>
        </ul>
        <button onClick={nextCandidate}> - </button>
        <button onClick={nextCandidate}> + </button>
      </div>
    </div>
  );
};

export default CandidateSearch;
