import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Alert,
  FlatList,
  View,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'
import Loading from '../components/Loading'
import Post, { IPost } from '../components/Post'

const HomeScreen = ({ navigation }: any) => {
  const [isLoading, seIsLoading] = useState(true)
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    seIsLoading(true)
    axios
      .get('https://63b46e059f50390584b0994f.mockapi.io/post')
      .then(({ data }) => setPosts(data))
      .catch((err) => Alert.alert('Ошибка', 'Не удалось получить данные'))
      .finally(() => seIsLoading(false))
  }

  useEffect(() => getPosts(), [])
  const renderItem = ({ item }: { item: IPost }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('post', { id: item.id, title: item.title})}
      >
        <Post
          id={item.id}
          title={item.title}
          imgUrl={item.imgUrl}
          description={item.description}
          date={item.date}
        />
      </TouchableOpacity>
    )
  }

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getPosts} />
        }
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}
export default HomeScreen