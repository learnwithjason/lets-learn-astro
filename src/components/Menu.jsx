import * as React from 'react';

export function Menu({ ideas }) {
  return (
    <ul>
      {ideas.map((idea) => (
        <li key={`sandwich-${idea}`}>{idea}</li>
      ))}
    </ul>
  );
}
