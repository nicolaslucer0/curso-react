import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const baseUrl = "https://api.github.com/users/nicolaslucer0/repos";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(baseUrl);
      setProjects(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <FlexContainerColumn id="projects">
        <FlexContainerRow>
          {projects.map((project) => (
            <Project key={project.name}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.svn_url}
              >
                {project.name}
              </a>
            </Project>
          ))}
        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  );
};
export default Projects;

const FlexContainerRow = styled.div`
   {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const FlexContainerColumn = styled.div`
   {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    flex-direction: column;
    margin: auto;
    align-items: center;
    @media (max-width: 768px) {
      width: 90%;
      padding: 0;
    }
  }
`;

const Project = styled.div`
   {
    color: white;
    background: #3355aa;
    width: 25%;
    text-align: center;
    padding: 2em;
    margin: 2em;
    overflow: hidden;
    a {
      text-decoration: none;
      color: white;
      font-size: 20px;
    }
  }
`;
