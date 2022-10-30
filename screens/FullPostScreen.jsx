import axios from 'axios';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../components/Loading';

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
  `
const PostDate = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  `
const PostText = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
  `

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const { id, title } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });

    axios.get('https://635d781c07076ac24f3dace4.mockapi.io/testForStudy/' + id)
      .then(({ data }) => {
        setData(data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, []);

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.imageUrl }} ></PostImage>
      <PostDate>{new Date(data.createdAt).toLocaleDateString()}</PostDate>
      <PostText>{data.text}</PostText>
    </View>
  );
}

