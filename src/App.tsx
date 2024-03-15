import { RouterProvider } from "react-router-dom"
import Navbar from "./components/navbar"
import { router } from "./router"

function App() {

  return (
    <>
      <main className={`h-screen w-full bg-gray-50 text-gray-900 dark:text-gray-50 dark:bg-gray-800 `}>
        <Navbar />
        {/* <div className="flex flex-col"> */}
        <RouterProvider router={router} />

        {/* </div> */}
      </main>

    </>
  )
}

export default App
