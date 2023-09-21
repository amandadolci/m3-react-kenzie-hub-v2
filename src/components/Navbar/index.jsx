import { useContext } from 'react';
import { ImportsContext } from '../../contexts/ImportsProvider';
import { UserContext } from '../../contexts/UserProvider';
import { StyledNav } from './style';

export function Navbar({ button, dashboard }) {
	const { Link, Logo, navigate } = useContext(ImportsContext);
	const { setUser } = useContext(UserContext);

	function handleLogout() {
		localStorage.removeItem('@KenzieHub:token');
		setUser(null);
		setTimeout(() => {
			navigate('/');
		}, 500);
	}

	return (
		<StyledNav button={button} dashboard={dashboard}>
			<img src={Logo} alt='Kenzie Hub Logo' />
			{button === 'Sair' ? (
				<button onClick={() => handleLogout()} className='navButton'>
					{button}
				</button>
			) : button === 'Voltar' ? (
				<Link to='/' className='navButton'>
					{button}
				</Link>
			) : null}
		</StyledNav>
	);
}
