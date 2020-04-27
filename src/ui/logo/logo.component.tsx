import React from 'react';
import Link from 'next/link';
import { LogoLink } from './logo.styles';
import { AppRoute } from '../../routing/app-routes';
import { ThemeType } from '../../../types';
import { useDeviceDetect } from '../../hooks/use-device-detect/use-device-detect.hook';

interface LogoProps {
  theme?: ThemeType;
}

export const Logo = ({ theme = 'primary' }: LogoProps) => {
  const { isMobile } = useDeviceDetect();

  return (
    <Link href={`${process.env.ASSET_PREFIX}${AppRoute.HOME}`}>
      <LogoLink
        className="logo-link"
        href={`${process.env.ASSET_PREFIX}${AppRoute.HOME}`}
        themeType={theme}
      >
        <img
          className="logo-img"
          src={`${process.env.ASSET_PREFIX}/${
            theme === 'primary' ? 'logo-small' : 'logo-small-black'
          }.svg`}
          alt="Logo"
        />
        <span className="logo-separator"></span>
        <h1 className="logo-text">
          {isMobile ? 'vde' : 'value driven engineering'}
        </h1>
      </LogoLink>
    </Link>
  );
};
