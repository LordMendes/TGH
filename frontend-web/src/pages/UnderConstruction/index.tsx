import React from 'react';
import Lottie from 'react-lottie';

import King from '../../assets/Animation/Laughing King.json'
import CastleDragon from '../../assets/Animation/Castle Dragon.json'

import {ConstructionText,ConstructionContainer} from './styles';

const UnderConstruction = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: CastleDragon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
    <ConstructionContainer>
      <Lottie 
        options={defaultOptions}
        height={600}
        width={800}
        style={
          {'position': 'absolute'}
        }
      />
      <ConstructionText>
        <header>Tibia Guild Hall</header>
        <p>Your new tibia website</p>
        <p>under construction</p>
      </ConstructionText>
    </ConstructionContainer>
  )
}

export default UnderConstruction;