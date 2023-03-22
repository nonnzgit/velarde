import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const ScNavbar = styled(Navbar)`
  background: var(--gradient);
  background-image: var(--gradient);

  .CcHamMenu {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar-brand {
    margin: 0 1rem 0 0;
    display: flex;
  }

  .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ScNavlink = styled(Nav.Link)`
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.8rem;
  padding: 0.4rem 1rem !important;
  margin: auto 0;

  &:hover {
    color: white;
    text-decoration: underline !important;
    text-decoration-color: var(--secondary) !important;
    text-decoration-thickness: 4px !important;
    text-underline-offset: 1.71rem;
  }

  @media (hover) and (max-width: 992px) {
    &:hover {
      text-underline-offset: 0.3rem;
    }
  }
`;
