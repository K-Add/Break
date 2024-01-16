import { RouteObject, createHashRouter } from 'react-router-dom'
import { lazy } from 'react'

export const routerConfig: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        path: '/init',
        Component: lazy(() => import('@renderer/pages/Init'))
      }
    ]
  }
]
const router = createHashRouter(routerConfig)
export default router
