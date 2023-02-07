import React from "react";

const Data = ({ name, id, array, description, setArray }) => {
  const handle = () => {
    const filter = array.filter((item, ele) => ele !== id);
    console.log(filter);
    setArray(filter);
  };
  const duplicate = () => {
    const newArray = [...array.slice(0, id + 1), ...array.slice(id)];
    console.log("newArray-->", newArray, id);
    setArray(newArray);
  };
  return (
    <tr key={id}>
      <td>{id} </td>
      <td> {name} </td>
      <td onClick={handle}> X</td>
      <td onClick={duplicate}> + </td>
    </tr>
  );
};

export default Data;
