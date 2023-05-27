import React, { useState } from "react";

    function PollDisplay() {
  const [jsVotes, setJsVotes] = useState(0);
  const [pythonVotes, setPythonVotes] = useState(0);
  const [csVotes, setCSharpVotes] = useState(0);
  const [javaVotes, setJavaVotes] = useState(0);

  return (
    <div style={ {}}>
      <h1>What is your favourite Programming Language?</h1>
      <br />
      <h3>javascript</h3>
      <h3 >Votes: {jsVotes}</h3>
      {/* <button onClick={() => setJsVotes(jsVotes + 1)}>Vote</button> */}
      <br />
      <h3>python</h3>
      <h3>
        Votes: {pythonVotes}
      </h3>
      {/* <button onClick={() => setPythonVotes(pythonVotes + 1)}>Vote</button> */}
      <br />
      <h3>c#</h3>
      <h3>
        Votes: {csVotes}
      </h3>
      {/* <button onClick={() => setCSharpVotes(csVotes + 1)}>Vote</button> */}
      <br />
      <h3>java</h3>
      <h3>
        Votes: {javaVotes}
      </h3>
      {/* <button onClick={() => setJavaVotes(javaVotes + 1)}>Vote</button> */}
      <br />

      
    </div>
  );
}

export default PollDisplay;
