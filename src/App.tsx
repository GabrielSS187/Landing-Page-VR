import { useEffect, useState } from "react";

import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";
import { Creation } from "./shared/components/Creation";

import infoArr from "./info/info";
import { InfoType } from "./info/info";

import featureImage from "./shared/assets/image-interactive.jpg";

import { GlobalStyles } from "./styles/GlobalStyles";

import { 
  HeroSection,
  HeroText,
  HeroTextContainer,
  HeroWrapper
 } from "./styles/Heros";

 import { Overlay } from "./shared/components/Creation/styles";
 import { Wrapper } from "./styles/Wrapper";

 import { 
  FeaturesSection,
  FeaturesImg,
  FeaturesText,
} from "./styles/Features";

import { 
  CreationsSection,
  CreationsBodyGrid,
  CreationsHeader,
 } from "./styles/Creations";


function App() {
  const [creations, setCreations] = useState<InfoType[]>([]);

  useEffect(() => {
    // load creations
    setCreations(infoArr);
  }, [infoArr]);

  return (
    <div>
          <HeroSection>
            <Overlay></Overlay>
            <HeroWrapper>
              <Header />
              <HeroTextContainer>
                <HeroText>
                  <h3>Immersive experiences that deliver</h3>
                </HeroText>
              </HeroTextContainer>
            </HeroWrapper>
          </HeroSection>
          <Wrapper>
            <FeaturesSection>
              <FeaturesImg src={featureImage} />
              <FeaturesText>
                <h3>The leader in interactive vr</h3>
                <p>
                  Founded in 2011, Loopstudios has been producing world-class
                  virtual reality projects for some of the best companies around the
                  globe. Our award-winning have transformed businesses through
                  digital experiences that bind to their brand.
                </p>
              </FeaturesText>
            </FeaturesSection>
            <CreationsSection>
              <CreationsHeader>
                <h3>Our creations</h3>
                <button>See all</button>
              </CreationsHeader>
              <CreationsBodyGrid>
                {creations &&
                  creations.map((creation, key) => (
                    <Creation
                      key={key}
                      text={creation?.text}
                      image={creation?.image}
                      largeImage={creation?.largeImage}
                    />
                  ))}
              </CreationsBodyGrid>
            </CreationsSection>
          </Wrapper>
          <Footer />
          <GlobalStyles />
    </div>
  );
};

export default App;
