import {
  CreationContainer,
  CreationText,
  Overlay
} from "./styles";

interface ICreationProps {
  image: string;
  largeImage: string;
  text: string;
};

export const Creation = ({ image, text, largeImage }: ICreationProps) => {
  return (
    <CreationContainer image={image} largeImage={largeImage}>
      <Overlay />
      <CreationText>{text}</CreationText>
    </CreationContainer>
  );
};