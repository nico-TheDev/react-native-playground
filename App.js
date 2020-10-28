import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import Search from "./components/Search";
import Gallery from "./components/Gallery";

export default function App() {
    const [query, setQuery] = useState("");
    const [photos, setPhotos] = useState();

    useEffect(() => {
        if (query) {
            fetch(
                `https://api.unsplash.com/search/photos/?client_id=b-DRqU3VJRCcHNbrCzTo7Ne1nUu_EA-qdYRCQYTcYTU&query=${query}&per_page=100`
            )
                .then((res) => res.json())
                .then((res) => {
                    setPhotos(res.results);
                });
        }
    }, [query]);
    return (
        <View style={styles.main}>
            <Search setSearch={setQuery} />
            <Gallery photos={photos} />
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
