import { createContext, useState, useContext, ReactNode } from 'react';

type Dropdown = {
  tipo: string;
  values: string[];
  details: string[];
  rates: string[];
  currentValue: string;
  currentInfo: string;
  currentRate: string;
  imgId: string;
};

type DataContextType = {
  leftDropdownData: Dropdown;
  rightDropdownData: Dropdown;
  capturedValue: string;
  setDataLeftDropdownData: (data: Dropdown) => void;
  setDataRightDropdownData: (data: Dropdown) => void;
  setCapturedValue: (value: string) => void;
};

const UserContext = createContext<DataContextType | undefined>(undefined);

function UserContextProvider({ children }: { children: ReactNode }) {
  const [leftDropdownData, setDataLeftDropdownData] = useState<Dropdown>({
    tipo: 'Crypto',
    values: ['Bitcoin'],
    details: [''],
    rates: [''],
    currentValue: '',
    currentRate: '',
    currentInfo: '',
    imgId: 'generic',
  });
  const [rightDropdownData, setDataRightDropdownData] = useState<Dropdown>({
    tipo: 'Moneda',
    values: ['USD'],
    details: ['El dolar'],
    rates: [''],
    currentValue: '',
    currentRate: '',
    currentInfo: '',
    imgId: 'generic',
  });

  const [capturedValue, setCapturedValue] = useState<string>('');

  return (
    <UserContext.Provider
      value={{
        leftDropdownData,
        setDataLeftDropdownData,
        rightDropdownData,
        setDataRightDropdownData,
        capturedValue,
        setCapturedValue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}

export { UserContextProvider, useUserContext };
