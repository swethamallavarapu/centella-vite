// import React, { useState } from "react";

// function MyProject(props) {
//   const [projectid, setprojectid] = useState("");
//   const [name, setname] = useState("");

//   const changeprojectid = (event) => {
//     setprojectid(event.target.value);
//   };

//   const changename = (event) => {
//     setname(event.target.value);
//   };

//   const transferValue = (event) => {
//     event.preventDefault();
//     const val = {
//       projectid,
//       name,
//     };
//     props.func(val);
//     clearState();
//   };

//   const clearState = () => {
//     setprojectid("");
//     setname("");
//   };

//   return (
//     <div>
//       <label>ProjectID</label>
//       <input type="text" value={projectid} onChange={changeprojectid} />
//       <label>ProjectName</label>
//       <input type="text" value={name} onChange={changename} />
//       <button onClick={transferValue}> Click Me</button>
//     </div>
//   );
// }

// export default MyProject;

import React, { useRef, useState } from "react";
import "../assets/css/MyProject.css";

function MyProject() {
  const list = [
    {
      id: 1,
      name: "Project-1",
      projectid: "CEN101",
      participators: "Name1,Name2..",
      description: "Loreum Ipsum......",
    },
    {
      id: 2,
      name: "Project-2",
      projectid: "CEN102",
      participators: "Name1,Name2..",
      description: "Loreum Ipsum......",
    },
  ];
  const [lists, setList] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div className="crud">
      <div>
        <AddList setList={setList} />
        <form onSubmit={handleSubmit}>
          <table>
            {lists.map((current) =>
              updateState === current.id ? (
                <EditList current={current} lists={lists} setList={setList} />
              ) : (
                <tr>
                  <td>{current.name}</td>
                  <td>{current.projectid}</td>
                  <td>{current.participators}</td>
                  <td>{current.description}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      type="button"
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );

  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setList(newlist);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const projectid = event.target.elements.projectid.value;
    const participators = event.target.elements.participators.value;
    const description = event.target.elements.description.value;
    const newlist = lists.map((li) =>
      li.id === updateState
        ? {
            ...li,
            name: name,
            projectid: projectid,
            participators: participators,
            description: description,
          }
        : li
    );

    setList(newlist);
    setUpdateState(-1);
  }
}

function EditList({ current, lists, setList }) {
  function handInputname(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, name: value } : li
    );

    setList(newlist);
  }
  function handInputprojectid(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, projectid: value } : li
    );

    setList(newlist);
  }
  function handInputparticipators(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, participators: value } : li
    );

    setList(newlist);
  }
  function handInputdescription(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, description: value } : li
    );

    setList(newlist);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handInputname}
          name="name"
          value={current.name}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputprojectid}
          name="projectid"
          value={current.projectid}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputparticipators}
          name="participators"
          value={current.participators}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputdescription}
          name="description"
          value={current.description}
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}

function AddList({ setList }) {
  const nameRef = useRef();
  const projectidRef = useRef();
  const participatorsRef = useRef();
  const descriptionRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const projectid = event.target.elements.projectid.value;
    const participators = event.target.elements.participators.value;
    const description = event.target.elements.description.value;
    const newlist = {
      id: 3,
      name,
      projectid,
      participators,
      description,
    };
    setList((prevList) => {
      return prevList.concat(newlist);
    });
    nameRef.current.value = "";
    projectidRef.current.value = "";
    participatorsRef.current.value = "";
    descriptionRef.current.value = "";
  }
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="ProjectName " ref={nameRef} />
      <input
        type="text"
        name="projectid"
        placeholder="Project ID"
        ref={projectidRef}
      />
      <input
        type="text"
        name="partcipators"
        placeholder="Participators"
        ref={participatorsRef}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        ref={descriptionRef}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default MyProject;
