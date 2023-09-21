import styled from 'styled-components';

export const StyledModal = styled.div`
	content: '';
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: var(--backdrop);
	display: flex;
	justify-content: center;
	align-items: center;
	.dialog {
		width: 18.5rem;
		margin: 0 0.75rem;
		/* height: fit-content; */
		min-height: 14.625rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.125rem;
		background-color: var(--grey-3);
		border-radius: var(--radius-4);
		.modalHeader {
			width: 100%;
			height: 2.5rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 0 1rem;
			background-color: var(--grey-2);
			border-radius: var(--radius-4) var(--radius-4) 0 0;
			.closeModalBtn {
				width: fit-content;
				padding: 0;
				background-color: transparent;
				color: var(--grey-1);
			}
		}

		form {
			display: flex;
			flex-direction: column;
			padding: 0 1.125rem;
			padding-bottom: 1.625rem;
			gap: 1.125rem;

			label {
				font-size: 0.75rem;
			}
			.editModalBtns {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: 1.125rem;

				.primaryButton,
				.secondaryButton {
					height: 2.375rem;
					width: fit-content;
					padding: 0 1.125rem;
					font-size: 0.8125rem;
				}
				.primaryButton {
					padding: 0 1.75rem;
				}
			}
		}
	}
`;
