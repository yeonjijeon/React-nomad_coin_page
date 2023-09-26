import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Coin from './routes/Coin'
import Coins from './routes/Coins'
import Price from './routes/Price'
import Chart from './routes/Chart'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/:coinId"
          element={<Coin />}
          children={
            <>
              <Route path={`price`} element={<Price />} />
              <Route path={`chart`} element={<Chart />} />
            </>
          }
        />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
