import React, { useState } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import { COLORS, NFTData } from "../utilities";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

export const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList data={NFTData}
                        renderItem={({ item }) => <Text>{item.name}</Text>}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};