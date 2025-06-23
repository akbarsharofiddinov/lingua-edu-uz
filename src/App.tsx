import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from "@/components";
import { Auth, ELibrary, Exams, Home, Meeting, Premuim, Quests, Schedules, Scores, Subjects } from "@/pages"

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
          path: 'premium-course',
          element: <Premuim />
        },
        {
          path: 'scores',
          element: <Scores />
        },
        {
          path: 'meeting',
          element: <Meeting />
        },

      ]
    },
    {
      path: "login",
      element: <Auth />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App