import styled from 'styled-components';

export const StyledTechList = styled.section`
	width: 18.5rem;
	height: fit-content;
	gap: 1.3125rem;

	.techListHeader,
	li {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		h2 {
			font-weight: 600;
		}
	}

	.navButton {
		font-size: 1.25rem;
		padding: 0.6875rem;
	}

	ul,
	span {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.375rem 0.5313rem;
		background-color: var(--grey-3);
		border-radius: var(--radius-4);
		display: flex;
		flex-direction: column;
		align-items: center;

		li {
			cursor: pointer;
			height: 3rem;
			padding: 0.75rem;
			background-color: var(--grey-4);
			border-radius: var(--radius-4);
			p {
				font-size: 0.75rem;
				color: var(--grey-1);
			}
			:hover {
				background-color: var(--grey-2);
				p {
					color: var(--grey-0);
				}
			}
		}
	}

	@media (min-width: 768.1px) {
		width: 23.125rem;
		ul {
			padding: 1.4375rem;
		}
	}
`;
