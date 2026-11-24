import {BRAND_LOGO_DARK, BRAND_LOGO_LIGHT} from '../data/siteData';
import {ResilientImage} from './ResilientImage';

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({className = 'h-7 w-7', priority = false}: BrandLogoProps) {
  return (
    <span className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      <ResilientImage
        src={BRAND_LOGO_LIGHT}
        alt="Logo de ADISENIAR"
        className="block h-full w-full object-contain dark:hidden"
        priority={priority}
      />
      <ResilientImage
        src={BRAND_LOGO_DARK}
        alt="Logo de ADISENIAR"
        className="hidden h-full w-full object-contain dark:block"
        priority={priority}
      />
    </span>
  );
}
