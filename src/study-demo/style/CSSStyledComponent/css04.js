import styled from 'styled-components'

export const Title = styled.div`
 font-size: 18px;
 color: ${props => props.type === 'success' ? 'green' :
 props.type === 'warning' ? 'orange' : '#444'};
`;

export const Wrapper = styled.div`
 font-weight: bolder;
`;
export const Button = styled.button`
  background: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  font-size: 12px;
  margin: 10px;
  padding:10px;
  border: 2px solid red;
`;

export const Input = styled.input.attrs({
  type: 'password',
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  color: palevioletred;
  border-radius: 3px;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;