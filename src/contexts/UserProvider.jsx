// Autologin - Proteção de Rotas
// Autologin foi implementado corretamente no contexto e o usuário que não está logado não consegue acessar a dashboard.
// Dica: usar outlet

// UserContext - ContextAPI
// Foi criado um contexto chamado de UserContext com todas as funcionalidades e estados referentes ao usuário.
// Foi realizada a refatoração na page Login para utilizar ContextAPI.
// Foi realizada a refatoração na page Register para utilizar ContextAPI.
import { createContext, useContext, useEffect, useState } from 'react';
import { ImportsContext } from './ImportsProvider';

export const UserContext = createContext({});

export function UserProvider({ children }) {
	const {
		jwtDecode,
		api,
		navigate,
		Navigate,
		registerSuccessToast,
		registerErrorToast,
		loginErrorToast,
	} = useContext(ImportsContext);

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadUser() {
			try {
				const token = localStorage.getItem('@KenzieHub:token');
				if (!token) {
					return <Navigate to='/' />;
				}
				const { sub } = jwtDecode(token);
				const { data } = await api.get(`users/${sub}`, {
					headers: {
						authorization: `Bearer ${token}`,
					},
				});
				setUser(data);
			} catch (error) {
				localStorage.removeItem('@KenzieHub:token');
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		loadUser();
	}, []);

	const techs = user?.techs || [];

	async function registerUser(registerBody) {
		try {
			await api.post('users', registerBody);
			registerSuccessToast();
			setTimeout(() => {
				navigate('/');
				const { email, password } = registerBody;
				login({ email: email, password: password });
			}, 2000);
		} catch (error) {
			registerErrorToast(error.response.data.message);
		}
	}

	async function login(loginBody) {
		try {
			const { data } = await api.post('sessions', loginBody);
			const { user: userResponse, token } = data;
			localStorage.setItem('@KenzieHub:token', token);
			// reset(defaultValues);
			setTimeout(() => {
				navigate('/dashboard');
			}, 2000);
			setUser(userResponse);
		} catch (error) {
			loginErrorToast(error.response.data.message);
		}
	}

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				loading,
				techs,
				login,
				registerUser,
			}}>
			{children}
		</UserContext.Provider>
	);
}
