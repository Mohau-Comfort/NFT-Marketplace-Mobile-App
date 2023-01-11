import { View, Text } from 'react-native';
import React from 'react';
import { SIZES } from '../utilities';

export const SubInfo = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text>SubInfo</Text>
        </View>
    );
};

export const People = () => { };
export const EndDate = () => { };
export const EthPrice = () => { };
export const NFTTitle = () => { };


