"use client"
import React from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/itsm-consulting-logo.webp";
import ArrowBack from "../../../public/arrow-back.png";

interface HeaderProps {
  showBack?: boolean
}


export default function Header({ showBack = false }: HeaderProps) {
  const router = useRouter()
  const gotoUsers = () => () => {
    router.push(`/`)
  }

  return (
    <div className={styles.header}>
      <div className={styles.titleHeader}>
        {showBack &&
          <div className={styles.headerBack} onClick={gotoUsers()}>
          <Image          
            src={ArrowBack} 
            alt="Volver al listado"
            width={25}
            height={25}
        />
        </div>
        }
        <div className={styles.title}>Users Challenge</div>
        </div>
      <div className={styles.image}>
        <Image
          src={Logo}
          alt="Itsm Consulting"
          width={45}
          height={45}
        />
      </div>
    </div>
  );
}
