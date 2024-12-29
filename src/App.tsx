import { styled } from 'styled-components';
import './App.css';
import { FontGlobalStyle } from './components/styles/animation/Global.styled';
import { Card } from './components/styles/Card';
import { Img } from './components/styles/Img';
import { Section } from './components/styles/Section';
import { Box, Button1, Button2 } from './components/styles/StyledBtn';
import rectangle from './components/Img/Rectangle1.svg';

function App() {
  return (
    <div className='App'>
      <BoxCard>
      <Card>
        <Img src={rectangle}  />
        <FontGlobalStyle>
          Headline 
        </FontGlobalStyle >
        <Section>
        <div>Faucibus. Faucibus. Sit sit sapien sit</div>
        <div>tempusrisu ut. Sit molestie ornare in venen.</div>
        </Section>
        <Box>
        <Button1>
          See more
        </Button1>
        <Button2>
          Save
        </Button2>
        </Box>
      </Card>
      </BoxCard>
    </div>
  );
}

export default App;

const BoxCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Component = ()=>{
  return<div>adajdsalk</div>
}

const styleComponent = styled(BoxCard)``