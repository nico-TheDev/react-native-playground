import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function Search({ setSearch }) {
    const [query, setQuery] = useState("");

    const handleChange = (text) => setQuery(text);

    const handleSubmit = () => setSearch(query);

    return (
        <View style={styles.view}>
            <Text style={styles.main}>📷Photoist</Text>
            <Text style={styles.sub}>Search for amazing photos 📸</Text>
            <TextInput
                onChangeText={handleChange}
                value={query}
                placeholder="Search with keywords.."
                style={styles.input}
                onSubmitEditing={handleSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        padding: 20,
    },
    main: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    sub: {
        fontSize: 14,
        marginVertical: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        width: 300,
    },
});
