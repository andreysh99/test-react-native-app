import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

export interface IPost {
  id: number
  title: string
  description: string
  imgUrl: string
  date: string
}

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`
const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`

const Post = ({ title, imgUrl, date }: IPost) => {
  const time = new Date(+date).toLocaleDateString()
  return (
    <PostView>
      <PostImage
        resizeMode='stretch'
        source={{
          uri: imgUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{time}</PostDate>
      </PostDetails>
    </PostView>
  )
}

export default Post
