/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { useLoader, useThree } from "@react-three/fiber";
import {
  BackSide,
  LinearFilter,
  ShaderLib,
  ShaderMaterial,
  sRGBEncoding,
  TextureLoader,
  BoxBufferGeometry,
  Mesh,
} from "three";

function BackgroundGrass() {
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, "/sunflowers_2k.png");

  texture.magFilter = LinearFilter;
  texture.minFilter = LinearFilter;

  const shader = ShaderLib.equirect;
  const material = new ShaderMaterial({
    fragmentShader: shader.fragmentShader,
    vertexShader: shader.vertexShader,
    uniforms: shader.uniforms,
    depthWrite: false,
    side: BackSide,
  });
  material.uniforms.tEquirect.value = texture;
  const plane = new BoxBufferGeometry(100, 100, 100);
  const bgMesh = new Mesh(plane, material);
  scene.add(bgMesh);
}

export default BackgroundGrass;
