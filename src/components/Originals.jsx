import styled from "styled-components";
import { Link } from "react-router-dom";
const Originals = () => {
  return (
    <Container>
      <Title>Originals</Title>
      <Content>
        <Wrap>
          <Link to="/detail">
            <img src="/images/o1.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src="/images/o2.webp" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src="/images/o3.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/detail">
            <img src="/images/o4.webp" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  padding: 0 0 26px;
`;
const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  padding-top: 56.66%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    inset: 0;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
export default Originals;
