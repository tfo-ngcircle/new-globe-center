import ReactFullpage from "@fullpage/react-fullpage";

export const Fullpage = ({
  paddingTop,
  className,
  anchors,
  onLeave = () => {},
  children,
}) => {
  return (
    <ReactFullpage
      navigation
      paddingTop={paddingTop + "px"}
      onLeave={onLeave}
      anchors={anchors}
      responsiveWidth={1024}
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
