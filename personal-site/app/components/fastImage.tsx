import React from "react";
import bitjockey from "../public/images/bitjockey_both.png";
import coursicle from "../public/images/coursicle_mac.png";
import kanm from "../public/images/kanm_both.png";

interface Props {
    url: string
}

export const FastImage: React.FC<Props> = ({ url }) => {
    const Url = "../../public/images/bitjockey_both.png";
  return (
    <picture>
      <source
        srcSet={require(`../../public/images/bitjockey_both.png?webp`)}
        type="image/webp"
      />
      <source srcSet={require(`../../public/images/bitjockey_both.png`)} type="image/png" />
      <img src={require(`../../public/images/bitjockey_both.png`)} />
    </picture>
  );
};
export default FastImage;
