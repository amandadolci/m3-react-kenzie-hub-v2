import { forwardRef, useContext } from 'react';
import { PasswordContext } from '../../contexts/PasswordStateProvider';
import { StyledInputContainer } from './style';

function InputComponent({ id, label, error, Eye, ...rest }, ref) {
	const { visiblePassword, setVisiblePassword, visibleConfirmPassword, setVisibleConfirmPassword } =
		useContext(PasswordContext);

	return (
		<StyledInputContainer>
			<label htmlFor={id}>{label}</label>
			{Eye ? (
				<div className='passwordInput'>
					<input id={id} ref={ref} {...rest} />
					<img
						src={Eye}
						alt='Visualizar senha'
						onClick={() => {
							id === 'confirm'
								? setVisibleConfirmPassword(!visibleConfirmPassword)
								: setVisiblePassword(!visiblePassword);
						}}
					/>
				</div>
			) : (
				<input className='regularInput' id={id} ref={ref} {...rest} />
			)}
			{error ? <p>{error}</p> : null}
		</StyledInputContainer>
	);
}

export const Input = forwardRef(InputComponent);
