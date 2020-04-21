import React from 'react';
import Link from 'next/link';
import { LogoLink } from './logo.styles';
import { AppRoute } from '../../routing/app-routes';

export const Logo = () => {
  return (
    <Link href={AppRoute.HOME}>
      <LogoLink className="logo-link" href={AppRoute.HOME}>
        <img
          className="logo-img"
          src={`${process.env.ASSET_PREFIX}/logo-small.svg`}
          alt="Logo"
        />
        <span className="logo-separator"></span>
        <h1 className="logo-text">value reader.</h1>
      </LogoLink>
    </Link>
  );
};
