import React from 'react';

const Splash: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <img
          src="images/chainLinkLogo.png"
          alt="Logo"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">CryptoConverter</h1>
        <p className="text-gray-500">Cargando...</p>
      </div>
    </div>
  );
};

export default Splash;
