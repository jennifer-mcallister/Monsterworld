import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { MyMonsters } from './pages/MyMonsters';
import { MonsterView } from './pages/Monsterview';
import { CreateMonster } from './pages/CreateMonster';
import { Shop } from './pages/Shop';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/monsters",
    element: <MyMonsters></MyMonsters>
  },
  {
    path: "monsters/:id",
    element: <MonsterView></MonsterView>
  },
  {
    path: "/create",
    element: <CreateMonster></CreateMonster>
  },
  {  
    path: "/shop",
    element: <Shop></Shop>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
