import React, { useEffect, useState } from 'react';

import Splash from '../components/Splash/Splash';
import Converter from '../components/Converter/Converter';

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
        <>
          <header className="bg-gray-100 p-4">
            <h1 className="text-3xl">Bienvenido a CyptoConverter!!!!</h1>
            <p className="text-red-600">Esto es Boilerplate...</p>
          </header>
          <Converter />
        </>
      )}
    </div>
  );
};

export default Home;
