import "../customStyle.scss";

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="loaders">
        <p className="headings">Loading</p>
        <div className="loadings">
          <div className="loads"></div>
          <div className="loads"></div>
          <div className="loads"></div>
          <div className="loads"></div>
        </div>
      </div>
    </div>

  );
};

export default Loader;
