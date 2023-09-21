import { useContext } from 'react';
import { TechsContext } from '../../contexts/TechsProvider';
import { StyledTechList } from './style';

export function TechListComponent() {
	const { techList, openModal } = useContext(TechsContext);

	return (
		<StyledTechList>
			<div className='techListHeader'>
				<h2>Tecnologias</h2>
				<button className='navButton' onClick={() => openModal()}>
					+
				</button>
			</div>
			{techList.length > 0 ? (
				<ul>
					{techList.map(({ id, title, status }) => (
						<li key={id} onClick={() => openModal({ id: id, title: title, status: status })}>
							<h3>{title}</h3>
							<p>{status}</p>
						</li>
					))}
				</ul>
			) : (
				<span>
					<h3>Nenhuma tecnologia cadastrada ainda.</h3>
				</span>
			)}
		</StyledTechList>
	);
}
