import styled from 'styled-components'

const Password = () => {
  return (
    <Passwords>
      <img src="./images/password.png" alt="Password Icon" />
      <input type="password" placeholder='Password'/>
    </Passwords>
  )
}

export default Password


const Passwords = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 480px;
  height: 80px;
  background: #eaeaea;
  border-radius: 6px;
  

  @media (max-width: 600px) {
    width: 350px;
  }
  
  & img{
    margin: 0px 30px;
  }

  input{
    height: 50px;
    width: 400px;
    background: transparent;
    border: none;
    outline: none;
    color: #797979;
    font-size: 19px;
  }
  
  `