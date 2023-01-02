import { DescriptionStyled } from "./Description.styled";

const Description = ({ message }: { message: string }) => {
  return <DescriptionStyled>{message}</DescriptionStyled>;
};

export default Description;
