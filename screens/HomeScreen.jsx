import axios, { Axios } from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../components/Loading';
import { Post } from '../components/Post';

export const HomeScreen = function ({ navigation }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const fetchPosts = function () {
    setIsLoading(true)

    axios.get('https://635d781c07076ac24f3dace4.mockapi.io/testForStudy')
      .then(({ data }) => {
        setItems(data)
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Йоу, ошибка.', 'Не удалось получить статьи.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  React.useEffect(() => {
    fetchPosts()
  }, []);

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <View >
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPostScreen',
            { id: item.id, title: item.title })
          }>
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            ></Post>
          </TouchableOpacity>
        )
        }
      />
    </View >
  );
}
