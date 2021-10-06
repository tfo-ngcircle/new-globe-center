export const Space = ({ id }) => {
  return (
    <div className="slide" data-anchor={id}>
      <img
        src={require("../../public/images/room.jpg")}
        alt="room"
        className="object-cover brightness-90"
      />
    </div>
  );
};
