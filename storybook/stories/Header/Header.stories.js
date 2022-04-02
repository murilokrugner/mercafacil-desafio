/* eslint-disable */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Header from '../../../src/components/Header';

storiesOf('Header', module).add('Default', () => (
    <Header 
        title={'Header'}
        setOrder={() => {}}
        setSearch={() => {}}
        itemsFilter={[]}
    />
));
