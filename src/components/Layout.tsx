import React from 'react'
import { Header, HeaderTop, Sidebar } from "./"
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '@/store/hooks'

const Layout: React.FC = () => {

  const { sidebar } = useAppSelector(state => state.store)

  return (
    <>
      <HeaderTop />
      <div className="layout">
        <Sidebar />
        <div className="content" data-extend={!sidebar ? 'extend' : ''}>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout