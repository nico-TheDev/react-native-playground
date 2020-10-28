import React from "react";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";

export default function Gallery({ photos }) {
    return photos ? (
        <ScrollView contentContainerStyle={styles.gallery}>
            {photos.map((item) => (
                <Image
                style={styles.item}
                    source={{ uri: item.urls.small }}
                    key={item.id}
                    resizeMode={"cover"}
                />
            ))}
        </ScrollView>
    ) : (
        <View>
            <Text>No Images Yet</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    gallery: {
        width:310,
        display: "flex",
        flexWrap: "wrap",
        padding: 10,
        height:1000,
        marginVertical: 20,
        marginHorizontal: 20,
    },
    item: {
        width: 90,
        height: 90,
        margin:5
    },
});
