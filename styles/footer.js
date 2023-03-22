import styled from 'styled-components';

export const ScFooter = styled.section`
  position: relative;
  background: #424242;
  padding: 5rem 1rem 3rem 1rem;
  color: white;

  .companies {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
      margin-bottom: 1rem;
      height: 50px;
    }
  }
  .linksCol {
    color: #d7ccc8;

    span {
      font-weight: 600;
      font-size: 1.1rem;
      text-decoration: underline;
      text-underline-offset: 5px;
      padding: 0 0 0.5rem 0;
      display: block;
    }

    ul {
      list-style: none;
      padding-left: 0rem;

      li {
        font-size: 0.9rem;
        padding: 0.3rem 0;

        .routerLink {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;
