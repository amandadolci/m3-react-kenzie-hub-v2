import { useContext } from 'react';
import { ImportsContext } from '../../contexts/ImportsProvider';
import { TechsContext } from '../../contexts/TechsProvider';
import { StyledModal } from './style';
import { createSchema, editSchema } from './schema';

export function TechModal() {
	const { useForm, zodResolver, Input, Select } = useContext(ImportsContext);
	const { techObject, createTech, updateTech, deleteTech, closeModal } = useContext(TechsContext);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: techObject ? zodResolver(editSchema) : zodResolver(createSchema),
	});

	return (
		<StyledModal role='dialog'>
			<div className='dialog'>
				<div className='modalHeader'>
					<h3>{techObject ? 'Detalhes da tecnologia' : 'Cadastrar tecnologia'}</h3>
					<button className='closeModalBtn' onClick={() => closeModal()}>
						X
					</button>
				</div>
				<form onSubmit={techObject ? handleSubmit(updateTech) : handleSubmit(createTech)}>
					{techObject ? (
						<Input label='Tecnologia' placeholder={techObject.title} disabled />
					) : (
						<Input
							id='title'
							label='Tecnologia'
							type='text'
							placeholder='Nome da tecnologia'
							error={errors.title?.message}
							{...register('title')}
						/>
					)}
					<Select
						id='status'
						label='Selecionar status'
						value={techObject ? techObject.status : ''}
						error={errors.status?.message}
						{...register('status')}
					/>
					{techObject ? (
						<div className='editModalBtns'>
							<button
								type='submit'
								className='primaryButton'
								disabled={isSubmitting ? true : false}>
								Salvar alterações
							</button>
							<button
								type='button'
								className='secondaryButton'
								onClick={() => deleteTech(techObject?.id)}>
								Excluir
							</button>
						</div>
					) : (
						<button className='primaryButton' disabled={isSubmitting ? true : false}>
							Cadastrar tecnologia
						</button>
					)}
				</form>
			</div>
		</StyledModal>
	);
}
