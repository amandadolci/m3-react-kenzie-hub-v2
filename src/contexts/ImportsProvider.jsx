import { createContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import jwtDecode from 'jwt-decode';
import toast, { Toaster } from 'react-hot-toast';
import { api } from '../services/api';
import { Navbar } from '../components/Navbar';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Loader } from '../components/Loading';
import Eye from '../assets/eye.svg';
import Logo from '../assets/Logo.svg';

export const ImportsContext = createContext({});

export function ImportsProvider({ children }) {
	const navigate = useNavigate();

	const registerSuccessToast = () => toast.success('Cadastro realizado com sucesso.');
	const registerErrorToast = message => toast.error(`Erro ao realizar cadastro: ${message}`);
	const loginErrorToast = message => toast.error(message);
	const createTechSuccessToast = () => toast.success('Tecnologia cadastrada com sucesso.');
	const createTechErrorToast = () =>
		toast.error('Não é possível cadastrar a mesma tecnologia, somente atualizá-la.');
	const updateTechSuccessToast = () => toast.success('Tecnologia editada com sucesso.');
	const updateTechErrorToast = message => toast.error(`Erro ao editar tecnologia: ${message}`);
	const deleteTechSuccessToast = () => toast.success('Tecnologia deletada com sucesso.');
	const deleteTechErrorToast = message => toast.error(`Erro ao deletar tecnologia: ${message}`);

	return (
		<ImportsContext.Provider
			value={{
				Navigate,
				Link,
				navigate,
				useForm,
				zodResolver,
				jwtDecode,
				Toaster,
				api,
				Navbar,
				Input,
				Select,
				Loader,
				Eye,
				Logo,
				registerSuccessToast,
				registerErrorToast,
				loginErrorToast,
				createTechSuccessToast,
				createTechErrorToast,
				updateTechSuccessToast,
				updateTechErrorToast,
				deleteTechSuccessToast,
				deleteTechErrorToast,
			}}>
			{children}
		</ImportsContext.Provider>
	);
}
