const Pic = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      {data.map((item) => {
        const { id, photographer, src } = item;
        return (
          <div key={id}>
            <div className="img-div">
              <img src={src.large} alt="img" />
            </div>

            <h3>{photographer}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Pic;
