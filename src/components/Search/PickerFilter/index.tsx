import React, {useState} from 'react';
import {Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import { Container } from './styles';

const PickerFilter: React.FC = () => {
  const [selectFilter, setSelectFilter] = useState();
  return (
    <Container>    
      <Picker
            selectedValue={selectFilter}
            style={{ height: 20, width: 180 }}
            mode={'dialog'}            
            onValueChange={(itemValue, itemIndex) =>
                setSelectFilter(itemValue)
            }>
            <Picker.Item label="Nome" value="name" />
            <Picker.Item label="Mais novos" value="new" />
        </Picker>      
      <Text style={{width: '100%', height: 'auto', position: 'absolute', bottom: 0, left: 0}}>{' '}</Text>
    </Container>
  );
}

export default PickerFilter;