import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ContainerLayoutDefault } from './styles'

export function DefaultLayout() {
  return (
    <ContainerLayoutDefault>
      <Header />
      <main>
        <Outlet />
      </main>
    </ContainerLayoutDefault>
  )
}
