
import styled from 'styled-components'

const Text = () => {
  return (
    <TextInputContainers>
      <img src="./images/person.png" alt="Person Icon" />
      <input type="text" placeholder='Name'/>
    </TextInputContainers>
  )
}

const TextInputContainers = styled.div`
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

export default Text