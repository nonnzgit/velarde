import styled from 'styled-components';

export const ScCompanies = styled.section`
  padding: 5rem 0 1rem 0;
  background: white;

  span {
    color: var(--primary);
  }
  strong {
    color: var(--secondary);
  }

  .swiper-slide {
    img {
      transition: transform ease-in-out 0.2s;
      width: 100%;

      &:hover {
        transform: translateY(-4px);
        border-bottom: 4px solid var(--secondary);
      }
    }
  }
`;
