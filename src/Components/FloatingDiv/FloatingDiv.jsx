import "./FloatingDiv.css";

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div className="floatingdiv" style={{}}>
      <img src={image} alt="" />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
