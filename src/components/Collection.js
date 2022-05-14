const Collection = ({ List }) => (
  <div className="album py-5 bg-light" id="DevCollection">
    <div className="container">
      <h2 className="pb-4">Useful Collection that make dev's life a bit easier!</h2>
      <div className="row justify-content-center g-3">
        {List &&
          List.length > 0 &&
          List.map((data, key) => (
            <div className="col-md-4" key={key}>
              <div className="card">
                <iframe
                  title="dev"
                  className="embed-responsive-item"
                  src={data.links}
                  scrolling="no"
                  frameborder="0"
                ></iframe>
                <div className="card-body">
                  <h4>{data.Desc}</h4>
                  <a
                    className="btn btn-success"
                    href={data.links}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-eye"></i>
                  </a>
                  &nbsp; &nbsp;
                  <small className="text-muted">Tags: {data.Tags}</small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default Collection;
