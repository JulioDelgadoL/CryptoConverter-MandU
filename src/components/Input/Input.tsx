import React, { useState } from 'react';
import { useUserContext } from '@/context/context';
import { Input, CloseButton } from '@mantine/core';

function InputField() {
  const [valueInput, setValueInput] = useState('');
  const { setCapturedValue } = useUserContext();

  return (
    <Input
      className="col-span-2 row-span-1"
      placeholder="Ingrese el Valor"
      value={valueInput}
      onChange={(event) => {
        setCapturedValue(event.currentTarget.value);
        setValueInput(event.currentTarget.value);
      }}
      rightSectionPointerEvents="all"
      mt="md"
      rightSection={
        <CloseButton
          aria-label="Clear input"
          onClick={() => setValueInput('')}
          style={{ display: valueInput ? undefined : 'none' }}
        />
      }
    />
  );
}

export default InputField;
