import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { OpenCard } from './pages/OpenCard'
import { DefaultLayout } from './layouts/DefaultLayout'
import { SelectMenu } from './pages/SelectMenu'
import { cardDataC } from './utils/cardDataC'
import { cardDataJava } from './utils/CardDataJava'
import { cardDataSQL } from './utils/cardDataSQL'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SelectMenu />} />
        <Route path="/home" ></Route>
        <Route path="/home/c" element={<Home cardData={cardDataC} language="c" />} />
        <Route path="/home/java" element={<Home cardData={cardDataJava} language="java" />} />
        <Route path="/home/sql" element={<Home cardData={cardDataSQL} language="sql" />} />
        <Route path="/card/c/:id" element={<OpenCard language="c" />} />
        <Route path="/card/java/:id" element={<OpenCard language="java" />} />
        <Route path="/card/sql/:id" element={<OpenCard language="sql" />} />
      </Route>
    </Routes>
  )
}
