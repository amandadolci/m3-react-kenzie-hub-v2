import { forwardRef } from 'react';
import { StyledSelectContainer } from './style';

function SelectComponent({ id, label, error, register, value, ...rest }, ref) {
	if (id === 'status') {
		return (
			<StyledSelectContainer>
				<label htmlFor={id}>{label}</label>
				<select name={id} id={id} ref={ref} {...rest}>
					<option value={value ? value : ''} hidden>
						{value ? value : 'Selecione'}
					</option>
					<option value='Iniciante'>Iniciante</option>
					<option value='Intermediário'>Intermediário</option>
					<option value='Avançado'>Avançado</option>
				</select>
				{error ? <p>{error}</p> : null}
			</StyledSelectContainer>
		);
	} else {
		return (
			<StyledSelectContainer>
				<label htmlFor={id}>{label}</label>
				<select name={id} id={id} ref={ref} {...rest}>
					<option value='' hidden>
						Selecione
					</option>
					<option value='Primeiro módulo (Introdução ao Frontend)'>
						Primeiro módulo (Introdução ao Frontend)
					</option>
					<option value='Segundo módulo (Frontend Avançado)'>
						Segundo módulo (Frontend Avançado)
					</option>
					<option value='Terceiro módulo (Introdução ao Backend)'>
						Terceiro módulo (Introdução ao Backend)
					</option>
					<option value='Quarto módulo (Backend Avançado)'>Quarto módulo (Backend Avançado)</option>
				</select>
				{error ? <p>{error}</p> : null}
			</StyledSelectContainer>
		);
	}
}

export const Select = forwardRef(SelectComponent);
