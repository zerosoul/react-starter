import React from 'react';
import StyledWrapper from './styled';
export default function Home() {
  return (
    <StyledWrapper>
      <a
        className="link"
        href="https://github.com/zerosoul/react-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read The Fucking Docs!
      </a>
    </StyledWrapper>
  );
}
