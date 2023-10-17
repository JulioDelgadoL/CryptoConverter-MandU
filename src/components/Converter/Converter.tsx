// components/CryptoConverter.tsx
import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { get } from '../../utils/fetchAPI';

const CryptoConverter: React.FC = () => {
  const [data, setCryptoData] = useState<any>();
  const [leftDropdown, setLeftDropdown] = useState<any>({
    tipo: 'Crypto',
    values: ['Bitcoin'],
  });
  const [rightDropdown, setRightDropdown] = useState<any>({
    tipo: 'Moneda',
    values: ['USD'],
  });

  const handleSwap = () => {
    const temp = leftDropdown;
    setLeftDropdown(rightDropdown);
    setRightDropdown(temp);
  };

  useEffect(() => {
    get('https://api.coinlore.net/api/tickers/?start=0&limit=100').then(
      ({ data }: any) => {
        setCryptoData(
          data.map((value: any) => {
            return {
              name: value.name,
              id: value.nameid,
              priceUSD: value.price_usd,
            };
          })
        );

        setLeftDropdown({
          tipo: 'Crypto',
          values: data.map((value: any) => {
            return `${value.name} - ${value.symbol}`;
          }),
        });
      }
    );
  }, []);

  return (
    <>
      <div className="w-90 p-8 rounded-lg bg-lime-600 shadow-md">
        <div className="flex items-center justify-center space-x-4">
          <Dropdown
            tipoDropdown={leftDropdown.tipo}
            values={leftDropdown.values}
          />
          <button
            className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center"
            onClick={handleSwap}
          >
            &#x21C4;
          </button>
          <Dropdown
            tipoDropdown={rightDropdown.tipo}
            values={rightDropdown.values}
          />
        </div>
      </div>
    </>
  );
};

export default CryptoConverter;
