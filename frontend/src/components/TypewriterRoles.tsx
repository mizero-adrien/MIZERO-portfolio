'use client';

import { useEffect, useState } from 'react';

type TypewriterRolesProps = {
  roles: string[];
};

export default function TypewriterRoles({ roles }: TypewriterRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!roles.length) {
      return;
    }

    const currentRole = roles[roleIndex % roles.length];
    const isComplete = text === currentRole;
    const isEmpty = text.length === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (!isComplete) {
            setText(currentRole.slice(0, text.length + 1));
          } else {
            setDeleting(true);
          }
          return;
        }

        if (!isEmpty) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((value) => (value + 1) % roles.length);
        }
      },
      isComplete ? 1200 : deleting ? 70 : 110
    );

    return () => clearTimeout(timeout);
  }, [roles, roleIndex, text, deleting]);

  return <span className="multiple-text">{text}</span>;
}
