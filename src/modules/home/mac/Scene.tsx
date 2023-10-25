import { Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Mac from "./Mac"
import { Canvas } from "@react-three/fiber"

export const Scene = () => {
  return (
    <Canvas resize={{ scroll: false }}>
      <Stage environment={"city"}  // Componente do React Three Drei que representa um palco 3D onde a cena será renderizada, Junto com o ambiente que dita a iluminação e ambientação da scene
      >  
        <PerspectiveCamera // Usa projeção de perspectiva, é a câmera mais semelhante à forma como nossos olhos percebem o mundo real.
          makeDefault fov={10} 
          position={[0.55, 0, 1.8]}  
        />
        <OrbitControls //  permite ao usuário interagir com a cena, como controlar a rotação e o zoom da câmera.
          target={[0, 0, 0]} // ponto de destino da câmera.
          enableZoom={false}
          enableRotate={false}
        />
        <Mac />
      </Stage>
    </Canvas>
  )
}
