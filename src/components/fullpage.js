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
      responsiveSlides={true}
      render={({ _, fullpageApi }) => {
        return (
          <div className={`${className} fullpage-wrapper`}>
            {children &&
              children.map((child, index) => (
                <div
                  key={index}
                  className={`section ${
                    index != 0 ? "fp-auto-height-responsive" : undefined
                  }`}
                >
                  {child}
                </div>
              ))}
          </div>
        );
      }}
    />
  );
};
