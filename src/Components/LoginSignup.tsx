import { useState } from 'react'
import styled from 'styled-components'
import Text from './Text'
import Email from './Email'
import Password from './Password'
import "./LoginSignup.css"



const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up")

  return (
    <Container>
      <Header>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </Header>
      <Inputs>
        {action==="Login"?<div></div>:<Text />}
        <Email />
        <Password />

        {action==="Sign Up"?<div></div>:<ForgotPassword>
          Lost Password? 
          <span>Click Here!</span>
          </ForgotPassword>}

         <SubmitContainer>
        <StyledSubmit 
        className={action === "Login" ? "submit gray" : "submit"}
        onClick={()=>{setAction("Sign Up")}}
        >Sign Up</StyledSubmit>
        <br />
        <StyledSubmit className={action === "Sign Up" ? "submit gray" : "submit"}
        onClick={()=>{setAction("Login")}}
        >Login</StyledSubmit>
        </SubmitContainer>
      </Inputs>
    </Container>
  )
}

export default LoginSignup;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 200px;
  width: 600px;
  background: #fff;
  padding-bottom: 30px;

  @media (max-width: 600px) {
    width: 100%;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  width: 100%;
  margin-top: 30px;

  .text {
    color: #3c009d;
    font-size: 48px;
    font-weight: 700;
  }

  .underline {
    width: 61px;
    height: 6px;
    background: #3c009d;
    border-radius: 9px;
  }
`



const Inputs = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const ForgotPassword = styled.div`
  padding-left: 62px;
  margin-top: 27px;
  color: #797979;
  font-size: 18px ;

  span{
    color: #4c00b4;
    cursor: pointer;
  }
`

const SubmitContainer = styled.div`
    display: flex;
    gap: 30px;
    margin: 60px auto;

    @media (max-width: 600px) {
    width: 350px;
  }
`

const StyledSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 59px;
  color: #fff;
  background: #4c00b4;
  border-radius: 50px;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;




`