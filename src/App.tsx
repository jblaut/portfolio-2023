import styled from 'styled-components';
import Header from './components/Minimalist/Header';
import { white, magenta, coral } from '../utils/colours';
import { mainFont, headingFont } from '../utils/fonts';

const Background = styled.div`
  background: linear-gradient(42.36deg, #007C81 0.31%, #081955 62.55%);
  padding:  60px 50rem 0;
  flex-grow: 1;
  color: ${white};
  font-family: ${mainFont};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledH1 = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: ${headingFont};
  margin: 0;
  color: ${coral};
  text-shadow: 0px 4px 4px ${magenta};
  font-size: 5rem;
`;

const StyledNameSpan = styled.span`
  &:first-child {
    letter-spacing: 0.14em;
  }

  &:last-child {
    letter-spacing: 0.24em;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 20px;
  gap: 25px;
`;

const Image = styled.img`
  width: 100%;
  position: relative;
  border-radius: 20px;
`;

const ImageContainer = styled.div`
  flex: 0 0 25%;
  position: relative;

  &::before {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    border: 5px solid ${magenta};
    border-radius: 20px;
    content: '';
  }

  translate: -15px 0;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  flex: 0 0 70%;
`;

const Description = styled.div`
  line-height: 22px;
  font-size: 1.2rem;
`;

const WorkExperience = styled.div`
  margin-top: 3rem;
  border: 2px solid ${coral};
  border-radius: 20px; 
  width: 100%;
  padding: 20px;
`;

const WorkExperienceHeader = styled.span`
  font-family: ${headingFont};
  letter-spacing: -0.07em;
  border-bottom: 5px solid ${magenta};
  display: inline-block;
  margin-bottom: 20px;
  font-size: 4rem;
  color: ${coral};
`;

const WorkExperienceDetails = styled.div`
  font-size: 1.3rem;
`;

const StyledList = styled.ul`
  list-style-type: "→";

  & li {
    padding-left: 10px;
  }
`;

const App = () => {
  return (
    <Background className="App">
      <Header title="portfolio" year={2023} />
      <Content>
        <Text>
          <StyledH1>
            <StyledNameSpan>Jamie</StyledNameSpan>
            <StyledNameSpan>Pendlebury</StyledNameSpan>
          </StyledH1>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Description>
        </Text>
        <ImageContainer>
          <Image src="../img/profile-picture.png" />
        </ImageContainer>
      </Content>

      <WorkExperience>
        <WorkExperienceHeader>
          Work Experience
        </WorkExperienceHeader>
        <WorkExperienceDetails>
          Buzzfeed News
          <StyledList>
            <li>June 2021 - December 2022 :: Software Engineer</li>
          </StyledList>
        </WorkExperienceDetails>
        <div>
          BBC News
          <StyledList>
            <li>February 2020 - May 2021 :: Software Engineer</li>
            <li>July 2017 - December 2022 :: Junior Software Engineer</li>
            <li>August 2015 - June 2017 :: Trainee Software Engineer</li>
          </StyledList>
        </div>
      </WorkExperience>
    </Background>
  );
};

export default App;
