/* eslint-disable */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Input from '../../../../src/components/Search/Input';

storiesOf('Input', module).add('Default', () => (
    <Input 
        style={{}}
        icon={'search'}
        ref={''}
        setSearch={() => {}}
        placeholder="search"
    />
));
