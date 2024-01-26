import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Dinosaur = () => {
  const { dinosaur } = useParams();
  const [dino, setDino] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/api/${dinosaur}`)
      .then(async (response) => await response.json())
      .then((json) => setDino(json));
  }, []);

  return (
    <div className="dinosaur">
      <h1>{dino.name}</h1>
      <p>{dino.description}</p>
      <Link to="/">See all</Link>
    </div>
  );
};
export default Dinosaur;
