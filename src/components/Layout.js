import React from 'react'

import styles from './Layout.module.scss'

function Layout ({ children, sidebar }) {
  return (
    <main className={styles.layout}>
      {sidebar}
      <div className={styles.content}>
        {children}
      </div>
    </main>
  )
}

export default Layout
