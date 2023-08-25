import { useEffect } from 'react'
import { Outlet } from 'umi'

const Layout = () => (
  <div>
    <header style={{ backgroundColor: 'red', marginBottom: 20 }}>
      header
    </header>

    <Outlet />
    <footer style={{ backgroundColor: 'blue', marginTop: 20 }}>footer</footer>
  </div>
)

const Home = () => {
  useEffect(() => {
    document.body.innerHTML += `<h2>${window.location.href}</h2>`
  }, [])

  return (
    <div
      style={{
        backgroundColor: 'green',
      }}>
      Home
    </div>
  )
}

export default {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
  ],
};
