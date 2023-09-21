import { useEffect, useContext } from 'react';
import { ImportsContext } from '../../contexts/ImportsProvider';
import { UserContext } from '../../contexts/UserProvider';
import { PasswordContext } from '../../contexts/PasswordStateProvider';
import { StyledRegisterForm } from './style';
import { Select } from '../../components/Select';
import { registerSchema } from './registerSchema';

export function RegisterForm() {
	const { useForm, zodResolver, Input, Eye } = useContext(ImportsContext);
	const { registerUser } = useContext(UserContext);
	const { visiblePassword, setVisiblePassword, visibleConfirmPassword, setVisibleConfirmPassword } =
		useContext(PasswordContext);

	const {
		register,
		handleSubmit,
		formState: { errors, defaultValues, dirtyFields, isSubmitting },
		reset,
	} = useForm({
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirm: '',
			bio: '',
			contact: '',
		},
		resolver: zodResolver(registerSchema),
	});

	useEffect(() => {
		// setLoading('Cadastrar');
		setVisiblePassword(false);
		setVisibleConfirmPassword(false);
	}, []);

	const emptyInputs = Object.values(dirtyFields).length < 7 ? true : false;

	return (
		<StyledRegisterForm>
			<div className='registerTitle'>
				<h1>Crie sua conta</h1>
				<p>Rápido e grátis, vamos nessa</p>
			</div>
			<form noValidate onSubmit={handleSubmit(registerUser)}>
				<Input
					id='name'
					label='Nome'
					type='text'
					placeholder='Digite seu nome aqui'
					error={errors.name?.message}
					{...register('name')}
				/>
				<Input
					id='email'
					label='E-mail'
					type='text'
					placeholder='Digite seu e-mail aqui'
					error={errors.email?.message}
					{...register('email')}
				/>
				<Input
					id='password'
					label='Senha'
					type={visiblePassword ? 'text' : 'password'}
					placeholder='Digite sua senha aqui'
					error={errors.password?.message}
					{...register('password')}
					Eye={Eye}
				/>
				<Input
					id='confirm'
					label='Confirmar senha'
					type={visibleConfirmPassword ? 'text' : 'password'}
					placeholder='Confirme sua senha'
					error={errors.confirm?.message}
					{...register('confirm')}
					Eye={Eye}
				/>
				<Input
					id='bio'
					label='Bio'
					type='text'
					placeholder='Fale sobre você'
					error={errors.bio?.message}
					{...register('bio')}
				/>
				<Input
					id='contact'
					label='Contato'
					type='text'
					placeholder='Opção de contato'
					error={errors.contact?.message}
					{...register('contact')}
				/>
				<Select
					id='course_module'
					label='Selecionar módulo'
					error={errors.course_module?.message}
					{...register('course_module')}
				/>
				<button className='primaryButton' disabled={emptyInputs || isSubmitting ? true : false}>
					{/* {loading} */}
					Cadastrar
				</button>
			</form>
		</StyledRegisterForm>
	);
}
