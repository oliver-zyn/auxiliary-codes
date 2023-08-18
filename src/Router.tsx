import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { OpenCard } from './pages/OpenCard'
import { DefaultLayout } from './layouts/DefaultLayout'
import { SelectMenu } from './pages/SelectMenu'
import { cardData } from './utils/cardData'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SelectMenu />} />
        <Route path="/home" ></Route>
        <Route path="/home/c" element={<Home cardData={cardData} />} />
        <Route path="/home/java" element={<Home cardData={cardData} />} />
        <Route path="/home/sql" element={<Home cardData={cardData} />} />
        <Route path="/card/:id" element={<OpenCard />} />
      </Route>
    </Routes>
  )
}
