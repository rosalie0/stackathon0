/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 fly.gltf --transform
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Fly(props) {
  const { nodes } = useGLTF("/models/fly-transformed.glb");
  console.log(nodes);

  const color = "red";
  const wingColor = "white";
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["body-and-eye"].geometry}
        material-color={color}
        position={[2.94, 0.05, 0.27]}
        rotation={[-0.37, -0.43, -0.75]}
        scale={0.28}
      />
      <mesh
        geometry={nodes.eye.geometry}
        material={nodes.eye.material}
        position={[2.8, 0.65, -0.86]}
        scale={0.4}
      />
      <mesh
        geometry={nodes.legs.geometry}
        material={nodes.legs.material}
        position={[1.03, 0.01, 1.2]}
        rotation={[0, 0.72, 0]}
        scale={0.19}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material-color={wingColor}
        position={[-1.79, 1.31, -1.09]}
        rotation={[-0.18, 0.11, -0.05]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-1.7, 1.27, 1.21]}
        rotation={[0.25, -0.1, 3.05]}
        scale={-1}
      />
    </group>
  );
}

useGLTF.preload("/models/fly-transformed.glb");