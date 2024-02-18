import SideBar from '../../components/SideBar.jsx'
import TopBar from '../../components/TopBar.jsx'
import { Outlet } from 'react-router-dom'
const ImpostanzioniMain = () => {
  return (
    <>
      <TopBar />
      <SideBar />
      <Outlet />
    </>
  )
}
export default ImpostanzioniMain
