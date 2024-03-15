import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
// import { router } from "./router"

type AppProps = {
  children: React.ReactNode
}
function App() {

  return (
    <>
      <main className={`h-screen w-full bg-gray-50 text-gray-900 dark:text-gray-50 dark:bg-gray-800 `}>
        {/* <RouterProvider router={router} /> */}
        <Navbar />
        <Outlet />
        {/* {children}
         */}
        {/* <div className="flex flex-col"> */}

        {/* </div> */}
      </main>

    </>
  )
}

export default App
