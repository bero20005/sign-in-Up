import styled from 'styled-components'

const Email = () => {
  return (

    <EmailInputContainers>
      <img src="./images/email.png" alt="Email Icon" />
      <input type="email" placeholder='Email'/>
    </EmailInputContainers>

  )
}

export default Email


const EmailInputContainers = styled.div`
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