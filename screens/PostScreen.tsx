import { Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import axios from 'axios'
import Loading from '../components/Loading'
import { IPost } from '../components/Post'
import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { StackParams } from '../App'

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 10px;
`
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`

type PropsRoute = NativeStackScreenProps<StackParams, 'post'>;

const PostScreen = ({ route, navigation } : PropsRoute) => {
  const [isLoading, seIsLoading] = useState(true)
  const [post, setPost] = useState<IPost | undefined>(undefined)
  const { id, title } = route.params

  const getPost = () => {
    seIsLoading(true)
    navigation.setOptions({
      title: title
    })
    axios
      .get('https://63b46e059f50390584b0994f.mockapi.io/post/'+id)
      .then(({ data }) => setPost(data))
      .catch((err) => Alert.alert('Ошибка', 'Не удалось получить данные'))
      .finally(() => seIsLoading(false))
  }

  useEffect(() => getPost(), [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: post?.imgUrl,
        }}
      />
      <PostText>{post?.description}</PostText>
    </ScrollView>
  )
}

export default PostScreen
