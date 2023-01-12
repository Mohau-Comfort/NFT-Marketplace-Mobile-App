import React from "react";
import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../utilities";
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsBid, DetailsDescription } from "../components";

//Details Header
const DetailsHeader = ({ data, navigation }) => (

    <View style={{ width: "100%", height: 373 }}>
        <Image
            source={data.image}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
        />

        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />

        <CircleButton
            imgUrl={assets.heart}
            right={15}
            top={StatusBar.currentHeight + 10}
        />
    </View>
);

//Details screen component
export const Details = ({ route, navigation }) => {
    const { data } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />

            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    zIndex: 1,
                }}
            >
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>

            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: SIZES.extraLarge * 3,
                }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View style={{ padding: SIZES.font }}>
                            <DetailsDescription data={data} />

                            {data.bids.length > 0 && (
                                <Text
                                    style={{
                                        fontSize: SIZES.font,
                                        fontFamily: FONTS.semiBold,
                                        color: COLORS.primary,
                                    }}
                                >
                                    Current Bid
                                </Text>
                            )}
                        </View>
                    </React.Fragment>
                )}
            />
        </SafeAreaView>
    );
};