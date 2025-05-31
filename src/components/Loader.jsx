import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className="w-[50px] aspect-square rounded-full bg-[#514b82] [animation:spin_1s_linear_infinite] [transform-origin:50%_40%] [mask-image:radial-gradient(circle_closest-side_at_50%_40%,transparent_94%,black)]" />
      </div>
    </Html>
  );
};

export default Loader;
