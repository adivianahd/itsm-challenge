'use client'

import Header from '@/app/components/Header'
import { useFetchJSON } from '@/app/hooks/useFetchJSON'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import styles from '../../page.module.css'

export default function UserDetail() {
  const params = useParams<{ id: string }>()
  const { fetchData: fetchUser, data: user } = useFetchJSON<User>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const { fetchData: fetchPosts, data: posts } = useFetchJSON<Post[]>(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
  useEffect(() => {
    fetchUser()
    fetchPosts()
  }, [])

  return (
    <div className={styles.cardLayout}>
      <Header showBack />
      <h1>User Details</h1>
      <br />{params.id}
      <br />{user?.name}
      <br />{user?.website}
      <h1>Posts</h1>
      <ul>
        {posts?.map(post => (<li key={post.id}>{post.title}</li>))}
      </ul>
    </div>
  )
}