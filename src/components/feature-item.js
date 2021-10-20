export const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="space-y-2">
      {icon}
      <h6 className="hidden  md:block">{title}</h6>
      <p className="hidden md:block caption max-w-[200px]">{description}</p>
    </div>
  );
};
