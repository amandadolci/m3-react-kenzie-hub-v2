import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';

export const PasswordContext = createContext({});

export function PasswordStateProvider() {
	const [visiblePassword, setVisiblePassword] = useState(false);
	const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

	return (
		<PasswordContext.Provider
			value={{
				visiblePassword,
				setVisiblePassword,
				visibleConfirmPassword,
				setVisibleConfirmPassword,
			}}>
			<Outlet />
		</PasswordContext.Provider>
	);
}
