import React from 'react';
import Link from 'next/link';
import { StyledLink } from './special-link.styles';

interface SpecialLinkProps {
  color?: 'primary' | 'red';
  target?: 'self' | 'blank';
  label: string;
  href: string;
}

export const SpecialLink = ({
  color = 'primary',
  target = 'self',
  label,
  href,
}: SpecialLinkProps) => {
  return (
    <Link href={href}>
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
    </Link>
  );
};
