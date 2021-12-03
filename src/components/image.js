export const Img = ({ image, ...props }) => {
  return <img src={image.src} alt={image?.alt} {...props} />;
};
