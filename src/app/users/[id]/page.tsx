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
      <div >
        <h1 className={styles.titleDetails}>{user?.name}</h1>
        <p>Username: <strong>{user?.username}</strong></p>
        <p>Email: <strong> {user?.email}</strong></p>
        <p>Phone: <strong> {user?.phone}</strong></p>
        <p>Website: <strong> {user?.website}</strong></p>
      </div>

      <div className={styles.contentCards}>
      <h2>Posts:</h2>
        {posts?.map(post => (
          <div key={post.id} className={styles.cardDetails}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}