import { useEffect, useContext } from 'react';
import { ImportsContext } from '../../contexts/ImportsProvider';
import { UserContext } from '../../contexts/UserProvider';
import { PasswordContext } from '../../contexts/PasswordStateProvider';
import { StyledLoginForm } from './style';
import { loginSchema } from './loginSchema';

export function LoginForm() {
	const { Link, useForm, zodResolver, Input, Eye } = useContext(ImportsContext);
	const { visiblePassword, setVisiblePassword } = useContext(PasswordContext);
	const { login } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors, defaultValues, dirtyFields, isSubmitting },
		reset,
	} = useForm({
		defaultValues: { email: '', password: '' },
		resolver: zodResolver(loginSchema),
	});
	// reset(defaultValues);

	useEffect(() => {
		// setLoading('Entrar');
		setVisiblePassword(false);
	}, []);

	const filledInputs = dirtyFields.email && dirtyFields.password;

	return (
		<StyledLoginForm>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(login)}>
				<Input
					id='email'
					label='Email'
					type='text'
					placeholder='Digite seu e-mail'
					error={errors.email?.message}
					{...register('email')}
				/>
				<Input
					id='password'
					label='Senha'
					type={visiblePassword ? 'text' : 'password'}
					placeholder='Digite sua senha'
					Eye={Eye}
					error={errors.password?.message}
					{...register('password')}
				/>
				<button className='primaryButton' disabled={isSubmitting || !filledInputs}>
					{/* {loading} */}
					Entrar
				</button>
			</form>
			<div className='registerContainer'>
				<small>Ainda não possui conta?</small>
				<Link to='/register' className='secondaryButton'>
					Cadastre-se
				</Link>
			</div>
		</StyledLoginForm>
	);
}
