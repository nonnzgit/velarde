import {
  StyledButton,
  StyledPhoneIcon,
  StyledButtonWhite,
  StyledButtonNavigation,
} from '../../styles/buttons';
import {
  FaArrowRight,
  FaPhoneAlt,
  FaChevronUp,
  FaArrowLeft,
} from 'react-icons/fa';
import Link from 'next/link';

export const ButtonPhone = props => {
  return (
    <StyledButton type="button" className="rounded-pill btn-rounded">
      {props.innerText}
      <StyledPhoneIcon>
        <FaPhoneAlt />
      </StyledPhoneIcon>
    </StyledButton>
  );
};

export const ButtonArrow = props => {
  return (
    <StyledButton type="button" className="rounded-pill btn-rounded">
      {props.innerText}
      <StyledPhoneIcon className="center-content">
        <FaArrowRight />
      </StyledPhoneIcon>
    </StyledButton>
  );
};

export const ButtonArrowWhite = props => {
  return (
    <StyledButtonWhite type="button" className="rounded-pill btn-rounded">
      {props.innerText}
      <StyledPhoneIcon>
        <FaArrowRight />
      </StyledPhoneIcon>
    </StyledButtonWhite>
  );
};

export const ButtonToTop = () => {
  const topPage = () => document.body.scrollIntoView({ behavior: 'smooth' });

  return (
    <Link href="/seguros" onClick={topPage} passHref>
      <StyledButtonNavigation
        type="button"
        className="rounded-pill btn-rounded"
      >
        <FaChevronUp />
      </StyledButtonNavigation>
    </Link>
  );
};

export const ButtonBack = () => {
  return (
    <Link href="/seguros" passHref>
      <StyledButtonNavigation
        type="button"
        className="rounded-pill btn-rounded"
      >
        <FaArrowLeft />
      </StyledButtonNavigation>
    </Link>
  );
};
