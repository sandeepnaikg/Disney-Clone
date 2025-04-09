import styled from "styled-components";
const Login = () => {
  return (
    <>
      <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 17/02/26, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
          </CTA>

          <BgImg />
        </Content>
      </Container>
    </>
  );
};
const Container = styled.section`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  position: relative;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImg = styled.div`
  background-image: url("/images/login-background.jpg");
  width: 100%;
  background-position: top;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 650px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 16px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
  max-width: 650px;
  display: block;
  margin: 0 auto;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  margin-top: 20px;
`;

export default Login;
