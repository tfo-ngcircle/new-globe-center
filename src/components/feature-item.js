export const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="space-y-2">
      {icon}
      <h6>{title}</h6>
      <p className="caption max-w-[185px]">{description}</p>
    </div>
  );
};
