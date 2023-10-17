import { useState } from 'react';
import { Select } from '@mantine/core';

interface DropdownProps {
  tipoDropdown: string;
  values: any[];
}

const Dropdown: React.FC<DropdownProps> = ({ tipoDropdown, values }) => {
  const [value, setValue] = useState('');
  const [imageSrc, setImageSrc] = useState(`images/logos/generic.png`);

  function handleSelectedValue(value: any) {
    setValue(value);
    let id = value?.split(' ').slice(-1)[0].toLowerCase();
    setImageSrc(`images/logos/${id || 'generic'}.png`);
  }

  function handleImgMissing() {
    setImageSrc(`images/logos/generic.png`);
  }

  return (
    <>
      <img src={imageSrc} onError={handleImgMissing} />
      <Select
        label={`Seleccione una ${tipoDropdown}`}
        value={value}
        placeholder={tipoDropdown}
        data={values}
        onChange={handleSelectedValue}
        searchable
      />
    </>
  );
};

export default Dropdown;
