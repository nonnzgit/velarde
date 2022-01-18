import styled from 'styled-components';

export const ScContacto = styled.div`
  background: #fff;
  padding: 5rem 0 2rem 0;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .logoconj {
    width: 27rem;
    border-radius: 10px;

    @media (max-width: 541px) {
      width: 100%;
    }
  }

  .cardContainer {
    border-radius: 10px;
    overflow: hidden;
  }

  .firstCard {
    background: var(--gradient);
    color: white;

    .list {
      list-style: none;
      display: block;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      margin-left: -1rem;
      margin-bottom: 0.7rem;
      font-size: 1.3rem;

      .checkIcon {
        color: var(--secondary);
        margin: 0 1rem 0 0;
        font-size: 24px;
      }
    }
  }

  .secondCard {
    background: white;
    color: black;

    .secondCardInfo {
      display: flex;
      flex-direction: column;
      font-family: 'Poppins', sans-serif;

      a:hover .iconSecondCard {
        background: var(--gradient);
        border: 1.5px solid #90caf9;
      }
    }

    .iconSecondCard {
      width: 80%;
      height: 35px;
      border: 1.5px solid #e6ee9c;
      margin: 0.5rem 0;
      background: var(--secondary);
    }
  }
`;
