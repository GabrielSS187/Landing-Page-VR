import earthImage from "../shared/assets/image-deep-earth.jpg";
import arcadeImage from "../shared/assets/image-night-arcade.jpg";
import soccerImage from "../shared/assets/image-soccer-team.jpg";
import gridImage from "../shared/assets/image-grid.jpg";
import fromAboveImage from "../shared/assets/image-from-above.jpg";
import borealisImage from "../shared/assets/image-pocket-borealis.jpg";
import curiosityImage from "../shared/assets/image-curiosity.jpg";
import fisheyeImage from "../shared/assets/image-fisheye.jpg";
import earthLargeImage from "../shared/assets/mobile/image-deep-earth.jpg";
import arcadeLargeImage from "../shared/assets/mobile/image-night-arcade.jpg";
import soccerLargeImage from "../shared/assets/mobile/image-soccer-team.jpg";
import gridLargeImage from "../shared/assets/mobile/image-grid.jpg";
import fromAboveLargeImage from "../shared/assets/mobile/image-from-above.jpg";
import borealisLargeImage from "../shared/assets/mobile/image-pocket-borealis.jpg";
import curiosityLargeImage from "../shared/assets/mobile/image-curiosity.jpg";
import fisheyeLargeImage from "../shared/assets/mobile/image-fisheye.jpg";

export type InfoType = {
  text: string;
  image: string;
  largeImage: string;
}; 

const infoArr: InfoType[] = [
  {
    text: "Deep Earth",
    image: earthImage,
    largeImage: earthLargeImage,
  },
  {
    text: "Night Arcade",
    image: arcadeImage,
    largeImage: arcadeLargeImage,
  },
  {
    text: "Soccer Team VR",
    image: soccerImage,
    largeImage: soccerLargeImage,
  },
  {
    text: "The Grid",
    image: gridImage,
    largeImage: gridLargeImage,
  },
  {
    text: "From up above VR",
    image: fromAboveImage,
    largeImage: fromAboveLargeImage,
  },
  {
    text: "Pocket Borealis",
    image: borealisImage,
    largeImage: borealisLargeImage,
  },
  {
    text: "The curiosity",
    image: curiosityImage,
    largeImage: curiosityLargeImage,
  },
  {
    text: "Make it fisheye",
    image: fisheyeImage,
    largeImage: fisheyeLargeImage,
  },
];

export default infoArr;
