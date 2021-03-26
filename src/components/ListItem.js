import React from "react";

const ListItem = (props) => {
  const { time, staff } = props;
  return (
    <li>
      <span>Son las </span>
      <span>Tengo </span>
    </li>
  );
};

export default ListItem;
