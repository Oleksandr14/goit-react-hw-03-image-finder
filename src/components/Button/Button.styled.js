import styled from 'styled-components';

export const LoadMore = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 25px;
  font-size: 18px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.radii.none};
  cursor: pointer;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;
