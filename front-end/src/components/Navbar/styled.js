import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

export const NavbarItems = styled.ul(
  ({ themeVariant, horizontally }) => css`
    display: flex;
    flex-direction: ${horizontally ? 'row' : 'column'};
    justify-content: space-around;
    width: 100%;
    padding: 10px 0;
    background-color: ${get(['theme', 'navbar', 'background', themeVariant])};

    a {
      text-decoration: none;
      padding: 12px 16px;
      font-size: 16px;
      letter-spacing: 0.1rem;
      color: ${get(['theme', 'navbar', 'color', themeVariant])};
      transition: 0.2s ease;
      font-weight: bold;
      position: relative;

      &:hover {
        color: ${get(['theme', 'link', 'hover', themeVariant])};

        &::after {
          width: 100%;
        }
      }

      &:focus {
        color: ${get(['theme', 'link', 'focus', themeVariant])};

        &::after {
          width: 100%;
        }
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        left: 0;
        bottom: 2px;
        height: 4px;
        background-color: ${get(['theme', 'link', 'line', themeVariant])};
        transition: 0.2s ease;
      }
    }
  `,
);

export const NavbarWrapper = styled.nav(
  ({ themeVariant }) => css`
    position: sticky;
    z-index: 1;
    display: flex;
    top: 60px;
    justify-content: center;
    box-shadow: 0 4px 10px ${get(['theme', 'navbar', 'boxShadow', themeVariant])};
  `,
);
