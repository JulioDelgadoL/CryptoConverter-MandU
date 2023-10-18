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
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-500 to-blue-500">
      {loading ? (
        <Splash />
      ) : (
        <>
          <Converter />
        </>
      )}
    </div>
  );
};

export default Home;
