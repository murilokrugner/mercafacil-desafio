/* eslint-disable */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import PickerFilter from '../../../../src/components/Search/PickerFilter';

storiesOf('PickerFilter', module).add('Default', () => (
    <PickerFilter 
        setOrder={() => {}}
        itemsFilter={[]}        
    />
));
