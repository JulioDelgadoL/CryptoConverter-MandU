// pages/index.tsx

import React, { useEffect, useState } from 'react';
import Splash from '../components/Splash/Splash';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timer dummy para imitar el cargado de los llamados API
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Splash />
      ) : (
        <div className="bg-gray-100 p-4">
          <h1 className="text-3xl">Bienvenido a CyptoConverter</h1>
          <p className="text-red-600">Esto es Boilerplate.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
