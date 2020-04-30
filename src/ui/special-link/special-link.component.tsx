import React from 'react';
import Link from 'next/link';
import { StyledLink } from './special-link.styles';

interface SpecialLinkProps {
  color?: 'primary' | 'red';
  target?: 'self' | 'blank';
  internal?: boolean;
  label: string;
  href: string;
}

export const SpecialLink = ({
  color = 'primary',
  target = 'self',
  internal = false,
  label,
  href,
}: SpecialLinkProps) => {
  const link = (
    <>
      {target === 'self' && (
        <StyledLink className="special-link" color={color} href={href}>
          {label}
        </StyledLink>
      )}
      {target === 'blank' && (
        <StyledLink
          className="special-link"
          color={color}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </StyledLink>
      )}
    </>
  );

  return <>{internal ? <Link href={href}>{link}</Link> : <>{link}</>}</>;
};
