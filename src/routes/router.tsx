import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Price from './Price'
import Chart from './Chart'
import Coin from './Coin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:coinId',
    element: <Coin />,
    children: [
      {
        path: 'price',
        element: <Price />,
      },
      {
        path: 'chart',
        element: <Chart />,
      },
    ],
  },
])

export default router
