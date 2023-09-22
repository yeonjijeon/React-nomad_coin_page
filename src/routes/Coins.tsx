import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CoinsList = styled.ul``

export const Coin = styled.li`
  background-color: black;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`

export const Title = styled.h1`
  font-size: 20px;
  color: ${(props) => props.theme.accentColor};
`

export const Loader = styled.span`
  text-align: center;
  display: block;
`
const Img = styled.img`
  width: 35px;
  height: 5px;
  margin-right: 10px;
`
interface CoinInterface {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
}

const Coins = () => {
  const [coins, setConins] = useState<CoinInterface[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins')
      const json = await response.json()
      setConins(json.slice(0, 100))
      setLoading(false)
    })()
  }, [])

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  alt={coin.name}
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  )
}

export default Coins
