import styled from 'styled-components';

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 2px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 3 * 10px) / 4);
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
