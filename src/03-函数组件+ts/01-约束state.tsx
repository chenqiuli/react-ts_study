import { useState } from 'react';

export default function App() {
  const [name, setname] = useState<string>('aaa');
  return (
    <div>
      {name.substring(0, 1).toUpperCase() + name.substring(1)}
      <button
        onClick={() => {
          setname('bbb');
        }}
      >
        click
      </button>
    </div>
  );
}
