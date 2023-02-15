import { useState } from 'react'

export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='border px-2 rounded'>
      Ola bem vindo {count}
      <button
        onClick={e => setCount(count + 1)}
      >Clica ai</button>
    </div>
  )
}

export default Home