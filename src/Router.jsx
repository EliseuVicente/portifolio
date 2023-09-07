import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './styles/themes/defaultLayout'


export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    )
}