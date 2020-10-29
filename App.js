import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";


export default function App() {

    return (
        <View style={styles.main}>
            Hello There! 
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        padding: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});
