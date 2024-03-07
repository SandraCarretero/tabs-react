import styled from 'styled-components';

const StyledContainer = styled.div`
	width: fit-content;
	border: 2px solid black;
	padding: 1rem;
`;
const StyledTabsContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
const StyledTab = styled.span`
	width: fit-content;
	white-space: nowrap;
	border: 2px solid black;
	padding: 0.5rem;
	color: ${({ $active }) => ($active ? 'white' : 'black')};
    background-color: ${({ $active }) => ($active ? 'steelblue' : 'transparent')};    
	cursor: pointer;
`;

export { StyledContainer, StyledTabsContainer, StyledTab };
