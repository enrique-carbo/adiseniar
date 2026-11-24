import {useState} from 'react';
import {Layers} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  priority = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-[#F4F5F7] p-6 text-center text-[#4B5563] dark:bg-[#161F30] dark:text-[#9CA3AF] ${className}`}
        role="img"
        aria-label={alt}
      >
        <Layers className="h-7 w-7 text-[#0B1F4B]/60 dark:text-[#60A5FA]/70" aria-hidden="true" />
        <span className="max-w-xs text-xs font-medium text-[#374151] dark:text-[#D1D5DB]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
