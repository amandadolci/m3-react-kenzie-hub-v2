import { useContext } from 'react';
import { ImportsContext } from '../../contexts/ImportsProvider';
import { UserContext } from '../../contexts/UserProvider';
import { RegisterForm } from '../../components/Register Form';

export function Register() {
	const { Navigate, Toaster, Navbar, Loader } = useContext(ImportsContext);
	const { user, loading } = useContext(UserContext);

	if (loading) {
		return <Loader />;
	}
	if (user) {
		return <Navigate to='/dashboard' />;
	}

	return (
		<>
			<Navbar button='Voltar' />
			<RegisterForm />
			<Toaster />
		</>
	);
}
