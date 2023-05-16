import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/* eslint-disable-next-line */
export interface GlobeProps {}

export function Globe(props: ThreeElements['mesh']) {
  // const mesh = useRef<THREE.Mesh>(null!);
  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);
  // useFrame((state, delta) => (mesh.current.rotation.x += delta));
  // return (
  //   <mesh
  //     {...props}
  //     ref={mesh}
  //     scale={active ? 1.5 : 1}
  //     onClick={(event) => setActive(!active)}
  //     onPointerOver={(event) => setHover(true)}
  //     onPointerOut={(event) => setHover(false)}
  //   >
  //     <boxGeometry args={[1, 1, 1]} />
  //     <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  //   </mesh>
  //

  const gltf = useLoader(GLTFLoader, 'public/Earth_1_12756.glb');
  return <primitive object={gltf.scene} />;
}

export default Globe;
