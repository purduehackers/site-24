import * as THREE from 'three'
import { SphereGeometry } from 'three'; 
import React, { useRef, useState } from 'react'
import { Canvas, extend, useFrame, ThreeElements } from '@react-three/fiber'

extend({ SphereGeometry }); 

/*function TV(props) {
  return (
    <mesh {...props} recieveShadow>
      <boxGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}*/

export function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => (meshRef.current.rotation.x += delta));

    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
      </mesh>
    );
}

export function LightBulb(props: ThreeElements['mesh']) {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <sphereGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"}  />
    </mesh>
  );
}