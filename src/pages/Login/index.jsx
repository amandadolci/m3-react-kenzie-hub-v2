import { useContext } from 'react';
import { ImportsContext } from '../../contexts/ImportsProvider';
import { UserContext } from '../../contexts/UserProvider';
import { LoginForm } from '../../components/Login Form';

export function Login() {
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
			<Navbar />
			<main>
				<LoginForm />
			</main>
			<Toaster />
		</>
	);
}
