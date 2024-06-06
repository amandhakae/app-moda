import React, { useEffect, useState } from 'react'; 
import { View, Text, FlatList } from 'react-native'; 
import { styles } from "../config/styles";
export default function NewsScreen() { 
    const [news, setNews] = useState({}); 
    useEffect(() => { 
        fetch('https://api.mockaroo.com/api/80dc16d0?count=1000&key=72438780') 
        .then(response => response.json()) 
        .then(data => setNews(data.articles)) 
        .catch(error => console.error(error)); 
    }, []); 
    return ( 
    <View> 
        <FlatList data={news} 
        keyExtractor={(item) => item.url} 
        renderItem={({ item }) => ( 
        <View> 
            <Text>{item.title}</Text> 
            <Text>{item.description}</Text> 
            </View> 
            )} 
            /> 
            </View> 
            ); 
        }