import React, {useState, Dispatch} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';

import {Container} from './styles';
import {SetStateAction} from 'react';

interface pickerProps {
  setOrder?:
    | Dispatch<SetStateAction<null>>
    | Dispatch<SetStateAction<string>>
    | any;
  itemsFilter: {label: string; value: string}[];
}

const PickerFilter: React.FC<pickerProps> = ({setOrder, itemsFilter}) => {
  const [selectFilter, setSelectFilter] = useState(null);

  return (
    <Container>
      <RNPickerSelect
        placeholder={{
          label: 'Ordenar por: ',
          value: null,
          color: '#fff',
        }}
        onValueChange={value => {
          setOrder(value);
          setSelectFilter(value);
        }}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        value={selectFilter}
        items={itemsFilter}
      />
      <Icon name={'keyboard-arrow-down'} size={20} color="#000" />
    </Container>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#000',
    paddingRight: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    paddingRight: 10,
    color: '#000',
    width: 170,
    maxWidth: 170,
  },
  placeholder: {
    color: '#000',
  },
  done: {
    color: '#000',
  },
});

export default PickerFilter;
