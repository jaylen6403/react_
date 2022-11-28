import React, { useEffect } from 'react';

export function useOnClickOutside(
  node: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  handler: () => unknown
) {
  useEffect(() => {
    const nodes = Array.isArray(node) ? node : [node];
    const handleClick = (e: MouseEvent) => {
      if (nodes.some((n) => n.current?.contains(e.target as Node))) return;

      handler();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handler, node]);
}
