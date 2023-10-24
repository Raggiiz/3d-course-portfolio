import { Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Mac from "./Mac"

export const Scene = () => {
  return (
    <Stage environment={"city"} adjustCamera>
      <PerspectiveCamera makeDefault fov={10} position={[0.55, 0, 1.8]} />
      <OrbitControls
        target={[0, 0, 0]}
        maxPolarAngle={Math.PI * 0.5}
        enableZoom={false}
        enableRotate={false}
      />
      <Mac />
    </Stage>
  )
}
