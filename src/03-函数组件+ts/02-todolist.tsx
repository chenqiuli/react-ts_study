import React, { useRef } from 'react';

export default function App() {
  const myRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      {/* Type 'MutableRefObject<undefined>' is not assignable to type 'LegacyRef<HTMLInputElement> | undefined'. */}
      <input ref={myRef} />
      <button
        onClick={() => {
          // console.log(myRef.current?.value);
          console.log((myRef.current as HTMLInputElement).value);
        }}
      >
        click
      </button>
    </div>
  );
}
