/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 fly.gltf --transform
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { degreesToRadians, random, randomHsl } from "../../helper";

export default function Fly(props) {
  const { nodes } = useGLTF("/models/fly-transformed.glb");

  // ************* RANDOMIZATION ************* //
  const randomPosition = [random(-15, 15), random(-15, 15), random(-15, 15)];
  const randomRotation = [
    degreesToRadians(random(-45, 45)),
    degreesToRadians(random(-45, 45)),
    degreesToRadians(random(-45, 45)),
  ];
  // Make a random hsl value for the body and wing color
  const mainColor = randomHsl();
  const wingColor = randomHsl();

  return (
    <group
      {...props}
      scale={0.1}
      dispose={null}
      position={randomPosition}
      rotation={randomRotation}
    >
      <mesh
        geometry={nodes["body-and-eye"].geometry}
        material-color={mainColor}
        position={[2.94, 0.05, 0.27]}
        rotation={[-0.37, -0.43, -0.75]}
        scale={0.28}
      />
      <mesh
        geometry={nodes.eye.geometry}
        material-color={mainColor}
        position={[2.8, 0.65, -0.86]}
        scale={0.4}
      />
      <mesh
        geometry={nodes.legs.geometry}
        material-color={mainColor}
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
        material-color={wingColor}
        position={[-1.7, 1.27, 1.21]}
        rotation={[0.25, -0.1, 3.05]}
        scale={-1}
      />
    </group>
  );
}
