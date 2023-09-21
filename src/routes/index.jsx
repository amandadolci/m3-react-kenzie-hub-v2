import { Routes, Route, Navigate } from 'react-router-dom';
import { PasswordStateProvider } from '../contexts/PasswordStateProvider';
import { TechsProvider } from '../contexts/TechsProvider';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Dashboard } from '../pages/Dashboard';
import { PageNotFound } from '../pages/PageNotFound';

export function MainRoutes() {
	return (
		<Routes>
			<Route element={<PasswordStateProvider />}>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Route>
			<Route element={<TechsProvider />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route>
			<Route path='/' element={<Navigate to='/login' />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
}
