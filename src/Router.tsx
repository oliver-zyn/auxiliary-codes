import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { OpenCard } from './pages/OpenCard'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<OpenCard />} />
      </Route>
    </Routes>
  )
}
