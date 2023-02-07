import React, { useState } from "react";

function MyProject(props) {
  const [projectid, setprojectid] = useState("");
  const [name, setname] = useState("");

  const changeprojectid = (event) => {
    setprojectid(event.target.value);
  };

  const changename = (event) => {
    setname(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      projectid,
      name,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setprojectid("");
    setname("");
  };

  return (
    <div>
      <label>ProjectID</label>
      <input type="text" value={projectid} onChange={changeprojectid} />
      <label>ProjectName</label>
      <input type="text" value={name} onChange={changename} />
      <button onClick={transferValue}> Click Me</button>
    </div>
  );
}

export default MyProject;
