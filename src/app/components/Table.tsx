"use client"
import React from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

interface TableProps {
  users: User[]
}

export default function Table({ users }: TableProps) {
  const router = useRouter()
  const gotoUser = (userId: User['id']) => () => {
    router.push(`/users/${userId}`)
  }
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>PHONE</th>
          <th>EMAIL</th>
          <th>CITY</th>
          <th>COMPANY</th>
        </tr>
      </thead>
      <tbody >
        {users?.map((user) => (
          <tr key={user.id} onClick={gotoUser(user.id)} className={styles.card} >
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
