import { GlobalStyle } from './styles/GlobalStyle';
import { ImportsProvider } from './contexts/ImportsProvider';
import { UserProvider } from './contexts/UserProvider';
import { MainRoutes } from './routes';

export function App() {
	return (
		<>
			<GlobalStyle />
			<ImportsProvider>
				<UserProvider>
					<MainRoutes />
				</UserProvider>
			</ImportsProvider>
		</>
	);
}
