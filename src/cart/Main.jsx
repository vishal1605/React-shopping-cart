import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

function Main() {
  return (
    <div className="row main-content my-2">
        <Sidebar />
        <Content />
    </div>
  )
}

export default Main