import React from 'react';
import StarryBackground from '../StarryBackground/StarryBackground';
import Partners, { MarqueeDemo } from "../Partners"
import GradientBox from '../GradientBox';
import Media from './Media';

function MediaCoverage() {
  return (
    <div className="min-h-screen w-full rounded-[40px] relative z-10 -top-[40px] border-2 border-[#16423C] lg:px-[108px]">
      <StarryBackground extraClass={"z-10 top-0 left-0 right-0 bottom-0 rounded-[40px] bg-[radial-gradient(circle_at_bottom,#000_0%,#000_100%)]"} />

      <GradientBox>
        <h2 className="text-[3.2rem] font-bold mb-4 text-white text-center">Media Coverage</h2>
        <Media index={0} />
        <Media index={1} />
        <Media index={2} />
      </GradientBox>
      <h2 className="text-[3.8rem] mt-28 text-gray-100 font-bold mb-4">Partners</h2>
      <MarqueeDemo />
    </div>
  );
}

export default MediaCoverage;