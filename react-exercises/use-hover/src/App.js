import React, { useCallback, useRef, useState } from 'react';
import './App.css';

function useHover() {
  const [value, setValue] = useState(false);

  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  // kind of callback ref in class components
  const ref = useRef();


  // https://gist.github.com/gragland/a32d08580b7e0604ff02cb069826ca2f
  const hoverRef = useCallback((node) => {
    // remove event listener if reference already exists
    if (ref.current) {
      ref.current.removeEventListener("mouseover", handleMouseOver);
      ref.current.removeEventListener("mouseout", handleMouseOut);
    }

    // add new reference to the node
    ref.current = node;

    // add events listener if new reference exists
    if (ref.current) {
      ref.current.addEventListener("mouseover", handleMouseOver);
      ref.current.addEventListener("mouseout", handleMouseOut);
    }
  }, [handleMouseOver, handleMouseOut])

  return [hoverRef, value];

}


function App() {
  const [hoverRef, isHovered] = useHover();
  return <div ref={hoverRef}>{isHovered ? "Hovered !" : "Hover me !"}</div>;
}

export default App;
