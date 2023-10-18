import { useUserContext } from '@/context/context';
import { Select } from '@mantine/core';

interface DropdownProps {
  tipoDropdown: string;
  values: string[];
  id: number;
  value: string;
  src: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  tipoDropdown,
  values,
  id,
  value,
  src,
}) => {
  const {
    leftDropdownData,
    setDataLeftDropdownData,
    rightDropdownData,
    setDataRightDropdownData,
  } = useUserContext();

  function filtereDSelectedValue(val: string) {
    let index = values.indexOf(val);
    if (id === 1) {
      setDataLeftDropdownData({
        ...leftDropdownData,
        currentValue: val,
        currentInfo: leftDropdownData?.details[index],
        currentRate: leftDropdownData?.rates[index],
        imgId: val?.split(' ').slice(-1)[0].toLowerCase(),
      });
    }
    if (id === 2) {
      setDataRightDropdownData({
        ...rightDropdownData,
        currentValue: val,
        imgId: val?.split(' ').slice(-1)[0].toLowerCase(),
      });
    }
  }
  return (
    <>
      <img src={`images/logos/${src}.png`} className="pt-6" />
      <Select
        className="text-center"
        label={`Seleccione una ${tipoDropdown}`}
        value={value}
        placeholder={tipoDropdown}
        data={values}
        onChange={(value: string) => {
          filtereDSelectedValue(value);
        }}
        searchable
      />
    </>
  );
};

export default Dropdown;
