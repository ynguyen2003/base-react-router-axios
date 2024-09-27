import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import TableUsers from '../components/TableUser';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path="/users" element={
                    <PrivateRoute path="/users">
                        <TableUsers />
                    </PrivateRoute>
                }></Route>
            </Routes>


        </>
    )
}
export default AppRoutes;