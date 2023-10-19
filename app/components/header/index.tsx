import React from 'react'
import { useContext } from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header} style={{ height: '5vh' }}>Header</header>
  )
}