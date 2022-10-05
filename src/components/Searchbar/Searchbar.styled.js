import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[4]}px 0;
  background-color: ${p => p.theme.colors.primary};

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  width: 320px;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 28px;
  padding-right: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 3px;
`;

export const ButtonForm = styled.button`
  position: absolute;
  top: 23px;
  background-color: transparent;
  border: none;
  text-align: center;
  cursor: pointer;
`;
