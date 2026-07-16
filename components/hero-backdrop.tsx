"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

function Cloud({
  count,
  inner,
  outer,
  size,
  color,
  opacity,
}: {
  count: number
  inner: number
  outer: number
  size: number
  color: string
  opacity: number
}) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = inner + Math.random() * (outer - inner)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count, inner, outer])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function Scene() {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    const g = group.current
    if (g) {
      g.rotation.y += delta * 0.03
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, state.pointer.y * -0.15, 0.04)
    }
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 1.4, 0.04)
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={group}>
      <Cloud count={1500} inner={3.5} outer={10} size={0.03} color="#34e1e8" opacity={0.85} />
      <Cloud count={280} inner={2} outer={9} size={0.06} color="#9d8bff" opacity={0.7} />
      <mesh scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#34e1e8" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  )
}

export default function HeroBackdrop() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Scene />
    </Canvas>
  )
}
