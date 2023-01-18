import "./index.css";
import { ShoeCard } from "../ShoeCard";
import jordan1mid from "../../assets/air-jordan-1-mid-dutch-green-1-400.svg";
import jordahighzoom from "../../assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.svg";
import jordanmidblac from "../../assets/air-jordan-1-mid-black-noble-red-w-1-1000.svg";
import jordanmidbright from "../../assets/air-jordan-1-mid-bright-citrus-1-1000 1.svg";
import jordanmiddutch from "../../assets/air-jordan-1-mid-light-smoke-grey-gs-1-1000.svg";
import jordanmidligth from "../../assets/air-jordan-1-mid-grey-camo-1-1000 1.svg";
import joprdanretrohigh from "../../assets/air-jordan-1-retro-high-court-purple-w-1-400.svg";
import jordanmidcarbon from "../../assets/air-jordan-1-mid-carbon-fiber-1-1000 1.svg";

export const ShoesContainer = () => {
  return (
    <div className='shoes-container'>
      <ShoeCard photo={jordan1mid} price={"1.999"} title="Air Jordan 1 Mid Dutch Green"/>
      <ShoeCard photo={jordahighzoom} price={"1.199"} title="Air Jordan 1 High Zoom CMFT Tropical Twist" />
      <ShoeCard photo={joprdanretrohigh} price={"2.300"} title="Air Jordan 1 High Og"/>
      <ShoeCard photo={jordanmiddutch} price={"1.148"} title="Air Jordan 1 Mid GS Light Smoke Grey"/>
      <ShoeCard photo={jordanmidblac} price={"1.749"} title=" Air Jordan 1 Mid Noble Red"/>
      <ShoeCard photo={jordanmidbright} price={"3.660"} title="Air Jordan 1 Mid SE Bright Citrus"/>
      <ShoeCard photo={jordanmidligth} price={"1.300"} title="Air Jordan 1 Mid Grey Camo"/>
      <ShoeCard photo={jordanmidcarbon} price={"3.330"} title="Air Jordan 1 Mid Carbon Fiber"/>
    </div>
  );
};
