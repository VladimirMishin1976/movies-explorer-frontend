import React from "react";

import './Topic.css';

function Topic({ title }) {

  return (
    <h2 className="topic">{title}</h2>
  );
}

export default Topic;