import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`;
export const Row = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 5px;
`;
export const PickyFieldContainer = styled.span`
  text-align: center;
  font-style: italic;
  flex-grow: 1;
  ${props =>
    props.size &&
    `
    max-width: ${props.size};
`}
`;
export const Tooltip = styled.p`
  color: red;
  font-size: 1em;
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  color: ${props => props.theme.bwSecondary};
  margin: 50px 15%;
  width: 50%;
`;
export const StepHeader = styled.h2`
  margin-top: 20px;
  border-bottom: 1px solid ${props => props.theme.bwSecondary};
  svg {
    color: green;
    margin-left: 10px;
  }
`;
export const PanelWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  width: 90%;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.highlightColor};
  margin-top: 10px;
`;
export const DoneHeader = styled.h2`
  color: ${props => props.theme.primaryAccent};
  border-bottom: 1px solid ${props => props.theme.highlightColor};
  background-color: transparent;
  padding: 5px;
  text-align: center;
  margin: 0;
  svg {
    color: green;
    margin-right: 10px;
  }
`;
export const InfoWrapper = styled.div`
  padding: 20px;
  font-size: 1.5em;
  background-color: transparent;
  p {
    margin-bottom: 5px;
  }
`;
