import { Navbar } from '../../components/Navbar';
import { Loader } from '../../components/Loading';

export function PageNotFound() {
	return (
		<>
			<Navbar button='Voltar' />
			<main className='pageNotFound'>
				<h1>Página não encontrada!</h1>
			</main>
		</>
	);
}
