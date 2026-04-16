'use client';

import { useEffect, useState } from 'react';

export default function ViewsCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadViews = async () => {
      try {
        const response = await fetch('/api/views', { cache: 'no-store' });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { views?: number };
        if (isMounted && typeof data.views === 'number') {
          setViews(data.views);
        }
      } catch {
        // Keep silent fallback for UI continuity.
      }
    };

    loadViews();

    return () => {
      isMounted = false;
    };
  }, []);

  return <span className="views-counter">Views: {views ?? '--'}</span>;
}
