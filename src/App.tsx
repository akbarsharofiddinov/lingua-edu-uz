import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from "@/components";
import { ELibrary, Exams, Home, Meeting, Quests, Schedules, Scores, Subjects } from "@/pages"

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
        },
        {
          path: 'schedules',
          element: <Schedules />
        },
        {
          path: 'quests',
          element: <Quests />
        },
        {
          path: 'working_off',
          element: <Exams />
        },
        {
          path: 'exams',
          element: <Exams />
        },
        {
          path: 'scores',
          element: <Scores />
        },
        {
          path: 'meeting',
          element: <Meeting />
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