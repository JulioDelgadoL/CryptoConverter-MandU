import React, { useEffect, useState } from 'react';
import { useUserContext } from '@/context/context';
import { Tooltip } from '@mantine/core';
import Dropdown from '../Dropdown/Dropdown';
import { get } from '../../utils/fetchAPI';
import InputField from '../Input/Input';

const CryptoConverter: React.FC = () => {
  const {
    leftDropdownData,
    setDataLeftDropdownData,
    rightDropdownData,
    setDataRightDropdownData,
    capturedValue,
  } = useUserContext();

  const [isExchanging, setIsExchanging] = useState<boolean>(false);
  const [conversion, setConversion] = useState<string>();
  const [info, setInfo] = useState<string>();

  useEffect(() => {
    get('https://api.coinlore.net/api/tickers/?start=0&limit=100').then(
      ({ data }: any) => {
        setDataLeftDropdownData({
          tipo: 'Crypto',
          details: data.map((value: any) => {
            return `${value.name}-(${value.symbol}) se encuentra actualmente #${value.rank} en el raking de performance. Con una variacion de ${value.percent_change_24h}% en las ultimas 24 horas`;
          }),
          values: data.map((value: any) => {
            return ` ${value.name} - ${value.symbol}`;
          }),
          rates: data.map((value: any) => {
            return `${value.price_usd}`;
          }),
          currentValue: '',
          currentRate: '',
          currentInfo: '',
          imgId: 'generic',
        });
      }
    );
  }, []);

  const handleSwap = () => {
    const tempValue = { ...leftDropdownData };
    setDataLeftDropdownData({
      ...rightDropdownData,
    });
    setDataRightDropdownData({
      ...tempValue,
    });
  };

  const handleExchange = () => {
    setIsExchanging(true);
    let result =
      leftDropdownData.tipo === 'Crypto'
        ? Number(capturedValue) * Number(leftDropdownData.currentRate)
        : Number(capturedValue) / Number(rightDropdownData.currentRate);
    setConversion(result.toFixed(8));
    setInfo(leftDropdownData.currentInfo);
  };

  return (
    <>
      <main className=" bg-indigo-800 text-indigo-100 inline-block p-6 rounded-3xl shadow-xl text-center font-sans ">
        <h1 className="text-4xl">Conversor Criptomonedas</h1>
        <div className="flex items-center justify-center space-x-4 pt-10">
          <InputField />
          <Dropdown
            tipoDropdown={leftDropdownData.tipo}
            values={leftDropdownData.values}
            value={leftDropdownData.currentValue}
            src={leftDropdownData.imgId}
            id={1}
          />
          <button
            className="w-12 h-12 bg-violet-900 text-white rounded-full flex items-center justify-center"
            onClick={handleSwap}
          >
            &#x21C4;
          </button>
          <Dropdown
            tipoDropdown={rightDropdownData.tipo}
            values={rightDropdownData.values}
            id={2}
            src={rightDropdownData.imgId}
            value={rightDropdownData.currentValue}
          />
          <button
            className=" w-12 h-12 bg-violet-900 text-white rounded-full flex items-center justify-center"
            onClick={handleExchange}
          >
            &#8595;
          </button>
        </div>
        <div className="pt-10 text-left">
          {isExchanging && (
            <div className="flex">
              <div className="w-1/2">
                <p className="text-xl mb-4">{`${capturedValue} ${leftDropdownData.currentValue} =`}</p>
                <p className="text-4xl mb-4">{`${String(conversion)} ${
                  rightDropdownData.currentValue
                }`}</p>
              </div>
              <Tooltip
                arrowPosition="side"
                arrowOffset={25}
                arrowSize={7}
                arrowRadius={1}
                label={leftDropdownData.currentInfo}
                withArrow
                className='position="bottom'
                position="bottom"
              >
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full h-9">
                  i
                </button>
              </Tooltip>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default CryptoConverter;
