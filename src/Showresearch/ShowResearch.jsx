import React from 'react';
import "./ShowResearch.css"
import ResearchDetails from './ResearchDetails';
import ResearchSection from './ResearchSection';



const ShowResearch= () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <ResearchDetails  username="HERE USERNAME COME FROM DATABASE" department="HERE DEPARTMENT COME FROM DATABASE" enrollmentNo="HERE ENROLLMENT COME FROM DATABASE" graduationYear="HERE GRADUATION YEAR COME FROM DATABASE" githubLink="HERE GITHUBID COME FROM DATABASE" linkedinLink="HERE LINKDIN COME FROM DATABASE" email="HERE EMAIL COME FROM DATABASE" phone="HERE PHONE NO. COME FROM DATABASE"  researchName="HERE RESEARCH NAME COME FROM DATABASE" />
      </div>
      <div className="content">
        <ResearchSection researchProof="HERE PROOF OF RESEARCH COME FROM DATABASE" aboutResearch="HERE CONTENT OF ABOUT RESEARCH COME FROM DATABASE" researchApproach=" How is a paragraph structured?Good paragraphs begin with a topic sentence that briefly explains what the paragraph is about. Next come a fe" />
      </div>
    </div>




    // <ResearchForm/>
  );
};

export default ShowResearch;
