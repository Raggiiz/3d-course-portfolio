import { Scene } from "./mac/Scene"

export const Home = () => {
  return (
    <div className="relative flex h-[220vh] w-screen bg-[#1c232e]">
        <div className="flex flex-col w-screen">
            <h1 className="font-space font-bold text-[7.5rem] self-center mt-[35vh] text-white">HELLO <span className="text-teal-600">3D</span> WORLD</h1>
            <div className="absolute h-[130vh] right-0 left-0 m-auto top-[10%] pointer-events-none">
                <div className="sticky right-0 left-0 m-auto top-[50vh] h-[60vh]">
                    <Scene />
                </div>
            </div>
        </div>
    </div>
  )
}
