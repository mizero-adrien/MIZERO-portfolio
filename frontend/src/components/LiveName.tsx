'use client';

import { useEffect, useState } from 'react';

const fullName = 'Adrien Mizero';
const firstName = 'Adrien';
const lastName = 'Mizero';

export default function LiveName() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const isComplete = text === lastName;
    const isEmpty = text.length === 0;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (!isComplete) {
            setText(lastName.slice(0, text.length + 1));
          } else {
            setIsDeleting(true);
          }
          return;
        }

        if (!isEmpty) {
          setText(lastName.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
        }
      },
      isComplete ? 1200 : isDeleting ? 70 : 120
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <span className="live-name" aria-label={fullName}>
      <span className="live-name-first">{firstName} </span>
      <span className="live-name-last">{text}</span>
      <span className="live-caret" aria-hidden="true">
        |
      </span>
    </span>
  );
}