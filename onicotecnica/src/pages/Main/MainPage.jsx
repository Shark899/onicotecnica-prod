import TopBar from '../../components/TopBar'
import { Outlet } from 'react-router-dom'
const MainPage = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  )
}
export default MainPage
