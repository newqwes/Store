import styled, { css } from 'styled-components';
import { get } from 'lodash/fp';

export const ProfileMenuWrapper = styled.aside(
  ({ themeVariant, active }) => css`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${active ? '180px' : '0'};
    text-align: center;
    transition: 0.3s ease;
    box-shadow: 0 -10px 10px ${get(['theme', 'profile', 'aside', 'shadow', themeVariant])};

    ul {
      display: block;
      padding-top: 70px;

      a {
        font-weight: normal;
        line-height: 40px;
        cursor: pointer;
        margin-top: 20px;
        font-size: ${active ? '18px' : '0'};
        transition: 0.2s ease;

        &:hover {
          color: ${get(['theme', 'profile', 'aside', 'color', 'hover', themeVariant])};
        }
      }

      .active,
      .active:hover {
        color: ${get(['theme', 'profile', 'aside', 'color', 'active', themeVariant])};
      }
    }
  `,
);

export const HamburgerWrapper = styled.div(
  ({ themeVariant }) => css`
    position: absolute;
    right: -50px;
    top: 40px;
    cursor: pointer;
    transition: 0.3s ease;

    fill: ${get(['theme', 'profile', 'aside', 'hamburger', 'active', themeVariant])};

    &:hover {
      fill: ${get(['theme', 'profile', 'aside', 'hamburger', 'hover', themeVariant])};
    }
  `,
);
