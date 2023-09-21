import { useContext, useEffect } from 'react';
import { TechListComponent } from '../../components/TechList';
import { TechModal } from '../../components/TechModal';
import { ImportsContext } from '../../contexts/ImportsProvider';
import { UserContext } from '../../contexts/UserProvider';
import { TechsContext } from '../../contexts/TechsProvider';
import { StyledDashboardPage } from './style';

export function Dashboard() {
	const { Navbar, Navigate, Toaster, Loader } = useContext(ImportsContext);
	const { user, loading } = useContext(UserContext);
	const { techModal } = useContext(TechsContext);

	if (loading) {
		return <Loader />;
	}
	if (!user) {
		return <Navigate to='/' />;
	}

	const { name, course_module } = user;

	return (
		<>
			<Navbar button='Sair' dashboard={true} />
			<StyledDashboardPage>
				<header>
					<div>
						<h1>Olá, {name}</h1>
						<small>{course_module}</small>
					</div>
				</header>
				<TechListComponent />
			</StyledDashboardPage>
			<Toaster />
			{techModal ? <TechModal /> : null}
		</>
	);
}
