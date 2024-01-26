import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Index = () => {
  const [dinos, setDinos] = useState([]);

  useEffect(() => {
    fetch('https://hungry-cow-59-qmaa2d1r0gkr.deno.dev/api')
      .then(async (response) => await response.json())
      .then((json) => setDinos(json));
  }, []);

  return (
    <main>
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more</p>
      <div>
        {dinos.map((dino) => {
          return (
            <div key={dino.name}>
              <Link to={`/${dino.name.toLowerCase()}`}>{dino.name}</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Index;
