import ReactFullpage from "@fullpage/react-fullpage";

export const Fullpage = ({
  paddingTop,
  className,
  onLeave = () => {},
  children,
}) => {
  console.log(paddingTop);
  return (
    <ReactFullpage
      paddingTop={paddingTop + "px"}
      onLeave={onLeave}
      render={({ _, fullpageApi }) => {
        return (
          <div id={`${className} fullpage-wrapper`}>
            {children &&
              children.map((child, index) => (
                <div key={index} className="section">
                  {child}
                </div>
              ))}
          </div>
        );
      }}
    />
  );
};
