import React from 'react';
import Link from 'next/link';
import { LogoLink } from './logo.styles';
import { AppRoute } from '../../routing/app-routes';
import { ThemeType } from '../../../types';

interface LogoProps {
  theme?: ThemeType;
}

export const Logo = ({ theme = 'primary' }: LogoProps) => {
  return (
    <Link href={AppRoute.HOME}>
      <LogoLink className="logo-link" href={AppRoute.HOME} themeType={theme}>
        <img
          className="logo-img"
          src={`${process.env.ASSET_PREFIX}/${
            theme === 'primary' ? 'logo-small' : 'logo-small-black'
          }.svg`}
          alt="Logo"
        />
        <span className="logo-separator"></span>
        <h1 className="logo-text">value reader.</h1>
      </LogoLink>
    </Link>
  );
};
