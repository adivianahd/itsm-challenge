"use client"
import React, { useEffect, useState } from "react";
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
  const [valueSearch, setValueSearch] = useState('');
  const [userFiltered, setUserFiltered] = useState<User[]>(users);

  const handleSearch = async (term: string) => {
    if (!term) {
      setUserFiltered(users);
      return;
    }
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase()) ||
      user.username.toLowerCase().includes(term.toLowerCase()) ||
      user.email.toLowerCase().includes(term.toLowerCase()) ||
      user.company.name.toLowerCase().includes(term.toLowerCase())
    );
    setUserFiltered(filteredUsers);
  };

  return (
    <div className={styles.containerTable}>
      <input
        type="text"
        placeholder="Search..."
        value={valueSearch}
        onChange={(e) => {
          setValueSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />

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
        {userFiltered === null &&
            users?.map((user) => (
              <tr key={user.id} onClick={gotoUser(user.id)} className={styles.card} >
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
            ))
          }
          {userFiltered?.length !== 0 &&
            userFiltered?.map((user) => (
              <tr key={user.id} onClick={gotoUser(user.id)} className={styles.card} >
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
              </tr>
            ))
          }
          {userFiltered?.length === 0 &&
            <tr className={styles.card}>
            <td>Oops! nothing here!</td>
          </tr>}
        </tbody>
      </table>
    </div>
  );
}
