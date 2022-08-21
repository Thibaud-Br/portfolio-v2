import styled from 'styled-components';

export const NavbarSection = styled.nav`
	width: 90%;
	height: 10vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavbarLogo = styled.a`
	font-weight: 700;
	font-size: 3rem;
	transition: 0.3s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.gold};
	}
`;

export const NavbarButton = styled.button`
	position: relative;
	background: none;
	border: none;
	color: ${({ theme }) => theme.gold};
	font-size: 3rem;
`;
