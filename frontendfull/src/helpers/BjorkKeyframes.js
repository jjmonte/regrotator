import styled from '@emotion/styled';
//Please don't murder me jade
//Or do? i dunno, don't let me tell you how to live your life

const AlbumItem = styled.li`
  font-size: 2.5em;
  margin: 15px 0;
  font-weight: bolder;
  color: ${props => props.theme.bwSecondary};
  &.björk {
    text-shadow: 2px 2px 4px #000000;
    -webkit-animation: rainbow 5s infinite;
    -ms-animation: rainbow 5s infinite;
    animation: rainbow 5s infinite;
  }
  @-webkit-keyframes rainbow {
    0% {
      color: orange;
    }
    10% {
      color: purple;
    }
    20% {
      color: red;
    }
    30% {
      color: CadetBlue;
    }
    40% {
      color: yellow;
    }
    50% {
      color: coral;
    }
    60% {
      color: green;
    }
    70% {
      color: cyan;
    }
    80% {
      color: DeepPink;
    }
    90% {
      color: DodgerBlue;
    }
    100% {
      color: orange;
    }
  }
  @-ms-keyframes rainbow {
    0% {
      color: orange;
    }
    10% {
      color: purple;
    }
    20% {
      color: red;
    }
    30% {
      color: CadetBlue;
    }
    40% {
      color: yellow;
    }
    50% {
      color: coral;
    }
    60% {
      color: green;
    }
    70% {
      color: cyan;
    }
    80% {
      color: DeepPink;
    }
    90% {
      color: DodgerBlue;
    }
    100% {
      color: orange;
    }
  }
  @keyframes rainbow {
    0% {
      color: orange;
    }
    10% {
      color: purple;
    }
    20% {
      color: red;
    }
    30% {
      color: CadetBlue;
    }
    40% {
      color: yellow;
    }
    50% {
      color: coral;
    }
    60% {
      color: green;
    }
    70% {
      color: cyan;
    }
    80% {
      color: DeepPink;
    }
    90% {
      color: DodgerBlue;
    }
    100% {
      color: orange;
    }
  }
`;
export default AlbumItem;
