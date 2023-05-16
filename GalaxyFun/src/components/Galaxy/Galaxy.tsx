/* eslint-disable-next-line */
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Globe from '../Globe/Globe';

// export interface GalaxyProps {}

export function Galaxy() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Globe position={[-1.2, 0, 0]} />
      <Globe position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default Galaxy;
