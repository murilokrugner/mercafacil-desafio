import React, {useState, useRef} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';

import { Container } from './styles';

const PickerFilter: React.FC = () => {
  const filter = useRef();
  
  const [selectFilter, setSelectFilter] = useState(null);

  return (
    <Container>          
      <RNPickerSelect
            placeholder={{
              label: 'Ordenar por: ',
              value: null,
              color: 'black',
            }} 
            onValueChange={value => {setSelectFilter(value)}}
            style={pickerSelectStyles}
            value={selectFilter}
            ref={el => {
              filter;
            }}
       
            items={[
                { label: 'Nome', value: 'name' },
                { label: 'Status', value: 'status' },
                { label: 'Data', value: 'date' },
            ]}
        />
        {selectFilter !== null && (<Icon name={'keyboard-arrow-down'} size={20} color="#000" />)}
    </Container>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: 'black',
    paddingRight: 10, 
  },
  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
    paddingRight: 10, 
  },
});

export default PickerFilter;