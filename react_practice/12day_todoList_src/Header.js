import React from 'react'
import styles from './Header.module.css'


export default function Header({filters, filter, onFilterChange}) {
  return (
    <div className={styles.header}>
        <h2>할일목록</h2>
        <ul className={styles.filters}>
            {filters.map(( value, idx )=>(
                <li key={idx}>
                    <button className={`${styles.filter} ${filter==value && styles.selected}`}
                    onClick={()=>onFilterChange(value)}>{value}</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
