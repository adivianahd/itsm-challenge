"use client"
import React from "react";
import { useFetchJSON } from "./hooks/useFetchJSON";
import styles from "./page.module.css";
import Table from "./components/Table";
import Header from "./components/Header";

export default function Home() {
  const { fetchData, data: users } = useFetchJSON<User[]>('https://jsonplaceholder.typicode.com/users')
  React.useEffect(() => { fetchData() }, [])

  return (
    <div>
      <div className={styles.cardLayout}>
      <Header />
      <Table users={users as User[]} />
      </div>
    </div>
  );
}
