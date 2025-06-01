import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from "@/components";
import { ELibrary, Home, Subjects } from "@/pages"

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "e-library",
          element: <ELibrary />
        },
        {
          path: 'subjects',
          element: <Subjects />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App