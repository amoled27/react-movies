import logo from "./logo.svg";
import "./App.css";

function App() {
  const tristate = (control, value1, value2, value3) => {
    console.log(control, "control");
    switch (control.value.charAt(0)) {
      case value1:
        control.value = value2;
        break;
      case value2:
        control.value = value3;
        break;
      case value3:
        control.value = value1;
        break;
      default:
        // display the current value if it's unexpected
        alert(control.value);
    }
  };

  const tristateClick = (control) => {
    tristate(control.target, "\u2753", "\u2705", "\u274C");
  };

  const genres = ["Action", "Comedy", "Western", "Romance", "Fantasy", "Drama"];

  const rated = ["Unrated", "TV-G", "G - Rated", "TV-PG", "X - Rated"];

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="wrapper">
        <div className="d-md-flex align-items-md-center">
          <div className="h3">Fruits and vegetables</div>
          <div className="ml-auto d-flex align-items-center views">
            {" "}
            <span className="btn text-success">
              {" "}
              <span className="fas fa-th px-md-2 px-1"></span>
              <span>Grid view</span>{" "}
            </span>{" "}
            <span className="btn">
              {" "}
              <span className="fas fa-list-ul"></span>
              <span className="px-md-2 px-1">List view</span>{" "}
            </span>{" "}
            <span className="green-label px-md-2 px-1">428</span>{" "}
            <span className="text-muted">Products</span>{" "}
          </div>
        </div>
        <div className="d-lg-flex align-items-lg-center pt-2">
          <div className="form-inline d-flex align-items-center my-2 mr-lg-2 radio bg-light border">
            {" "}
            <label className="options">
              Most Popular <input type="radio" name="radio" />{" "}
              <span className="checkmark"></span>{" "}
            </label>{" "}
            <label className="options">
              Cheapest <input type="radio" name="radio" checked />{" "}
              <span className="checkmark"></span>{" "}
            </label>{" "}
          </div>
          <div className="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2">
            {" "}
            <label className="tick">
              Farm <input type="checkbox" checked="checked" />{" "}
              <span className="check"></span>{" "}
            </label>{" "}
            <span className="text-success px-2 count"> 328</span>{" "}
          </div>
          <div className="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2">
            {" "}
            <label className="tick">
              Bio <input type="checkbox" /> <span className="check"></span>{" "}
            </label>{" "}
            <span className="text-success px-2 count"> 72</span>{" "}
          </div>
          <div className="form-inline d-flex align-items-center my-2 checkbox bg-light border mx-lg-2">
            {" "}
            <label className="tick">
              Czech republic <input type="checkbox" />{" "}
              <span className="check"></span>{" "}
            </label>{" "}
            <span className="border px-1 mx-2 mr-3 font-weight-bold count">
              {" "}
              12
            </span>{" "}
            <select name="country" id="country" className="bg-light">
              <option value="" hidden>
                Country
              </option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Uk">UK</option>
            </select>{" "}
          </div>
        </div>
        <div className="d-sm-flex align-items-sm-center pt-2 clear">
          <div className="text-muted filter-label">Applied Filters:</div>
          <div className="green-label font-weight-bold p-0 px-1 mx-sm-1 mx-0 my-sm-0 my-2">
            Selected Filtre <span className=" px-1 close">&times;</span>{" "}
          </div>
          <div className="green-label font-weight-bold p-0 px-1 mx-sm-1 mx-0">
            Selected Filtre <span className=" px-1 close">&times;</span>{" "}
          </div>
        </div>
        <div className="filters">
          {" "}
          <button
            className="btn btn-success"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-filter"
            aria-expanded="true"
            aria-controls="mobile-filter"
          >
            Filter<span className="px-1 fas fa-filter"></span>
          </button>{" "}
        </div>
        <div id="mobile-filter">
          <div className="py-3">
            <h5 className="font-weight-bold">Categories</h5>
            <ul className="list-group">
              <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                {" "}
                vegetables{" "}
                <span className="badge badge-primary badge-pill">328</span>{" "}
              </li>
              <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                {" "}
                Fruits{" "}
                <span className="badge badge-primary badge-pill">112</span>{" "}
              </li>
              <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                {" "}
                Kitchen Accessories{" "}
                <span className="badge badge-primary badge-pill">32</span>{" "}
              </li>
              <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                {" "}
                Chefs Tips{" "}
                <span className="badge badge-primary badge-pill">48</span>{" "}
              </li>
            </ul>
          </div>
          <div className="py-3">
            <h5 className="font-weight-bold">Brands</h5>
            <form className="brand">
              <div className="form-inline d-flex align-items-center py-1">
                {" "}
                <label className="tick">
                  Royal Fields <input type="checkbox" />{" "}
                  <span className="check"></span>{" "}
                </label>{" "}
              </div>
              <div className="form-inline d-flex align-items-center py-1">
                {" "}
                <label className="tick">
                  Crasmas Fields <input type="checkbox" checked />{" "}
                  <span className="check"></span>{" "}
                </label>{" "}
              </div>
              <div className="form-inline d-flex align-items-center py-1">
                {" "}
                <label className="tick">
                  Vegetarisma Farm <input type="checkbox" checked />{" "}
                  <span className="check"></span>{" "}
                </label>{" "}
              </div>
              <div className="form-inline d-flex align-items-center py-1">
                {" "}
                <label className="tick">
                  Farmar Field Eve <input type="checkbox" />{" "}
                  <span className="check"></span>{" "}
                </label>{" "}
              </div>
              <div className="form-inline d-flex align-items-center py-1">
                {" "}
                <label className="tick">
                  True Farmar Steve <input type="checkbox" />{" "}
                  <span className="check"></span>{" "}
                </label>{" "}
              </div>
            </form>
          </div>
          <div className="py-3">
            <h5 className="font-weight-bold">Rating</h5>
            <form className="rating">
              <div className="form-inline d-flex align-items-center py-2">
                {" "}
                <label className="tick">
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <input type="checkbox" /> <span className="check"></span>{" "}
                </label>{" "}
              </div>
              <div className="form-inline d-flex align-items-center py-2">
                {" "}
                <label className="tick">
                  {" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <input type="checkbox" /> <span className="check"></span>{" "}
                </label>{" "}
              </div>
              <div className="form-inline d-flex align-items-center py-2">
                {" "}
                <label className="tick">
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <input type="checkbox" /> <span className="check"></span>{" "}
                </label>{" "}
              </div>
              <div className="form-inline d-flex align-items-center py-2">
                {" "}
                <label className="tick">
                  <span className="fas fa-star"></span>{" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <input type="checkbox" /> <span className="check"></span>{" "}
                </label>{" "}
              </div>
              <div className="form-inline d-flex align-items-center py-2">
                {" "}
                <label className="tick">
                  {" "}
                  <span className="fas fa-star"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <span className="far fa-star px-1 text-muted"></span>{" "}
                  <input type="checkbox" /> <span className="check"></span>{" "}
                </label>{" "}
              </div>
            </form>
          </div>
        </div>
        <div className="content py-md-0 py-3">
          <section id="sidebar">
            <div className="py-3">
              <h5 className="font-weight-bold">Categories</h5>
              <ul className="list-group">
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                  {" "}
                  vegetables{" "}
                  <span className="badge badge-primary badge-pill">
                    328
                  </span>{" "}
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                  {" "}
                  Fruits{" "}
                  <span className="badge badge-primary badge-pill">
                    112
                  </span>{" "}
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                  {" "}
                  Kitchen Accessories{" "}
                  <span className="badge badge-primary badge-pill">
                    32
                  </span>{" "}
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category">
                  {" "}
                  Chefs Tips{" "}
                  <span className="badge badge-primary badge-pill">
                    48
                  </span>{" "}
                </li>
              </ul>
            </div>
            <div className="py-3">
              <h5 className="font-weight-bold">Genres</h5>
              <form className="brand">
                {genres.map((genre) => {
                  return (
                    <div className="form-inline d-flex align-items-center py-1">
                      <label className="tick">
                        {genre} <input type="checkbox" />
                        <span className="check"></span>
                      </label>
                    </div>
                  );
                })}
              </form>
            </div>
            <div className="py-3">
              <h5 className="font-weight-bold">Rated</h5>
              <form className="rating">
                {rated.map((rate) => {
                  return (
                    <div className="form-inline d-flex align-items-center py-2">
                      <label className="tick">
                        {rate}
                        <input type="checkbox" />{" "}
                        <span className="check"></span>
                      </label>
                    </div>
                  );
                })}
              </form>
            </div>
          </section>
          <section id="products">
            <div className="container py-3">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                  <div className="card">
                    {" "}
                    <img
                      className="card-img-top"
                      src="https://www.freepnglogos.com/uploads/cucumber-png/cucumber-png-image-purepng-transparent-png-26.png"
                    />
                    <div className="card-body">
                      <h6 className="font-weight-bold pt-1">Product title</h6>
                      <div className="text-muted description">
                        Space for small product description
                      </div>
                      <div className="d-flex align-items-center product">
                        {" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="far fa-star"></span>{" "}
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex flex-column">
                          <div className="h6 font-weight-bold">36.99 USD</div>
                          <div className="text-muted rebate">48.56</div>
                        </div>
                        <div className="btn btn-primary">Buy now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 pt-md-0 pt-4">
                  <div className="card">
                    {" "}
                    <img
                      className="card-img-top"
                      src="https://www.freepnglogos.com/uploads/carrot-png/carrot-mint-with-turmeric-chia-equine-pure-delights-12.png"
                    />
                    <div className="card-body">
                      <h6 className="font-weight-bold pt-1">Product title</h6>
                      <div className="text-muted description">
                        Space for small product description
                      </div>
                      <div className="d-flex align-items-center product">
                        {" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="far fa-star"></span>{" "}
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex flex-column">
                          <div className="h6 font-weight-bold">36.99 USD</div>
                          <div className="text-muted rebate">48.56</div>
                        </div>
                        <div className="btn btn-primary">Buy now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 pt-lg-0 pt-4">
                  <div className="card">
                    {" "}
                    <img
                      className="card-img-top"
                      src="https://www.freepnglogos.com/uploads/tomato-png/tomato-bunch-fresh-tomatoes-png-image-pngpix-24.png"
                    />
                    <div className="card-body">
                      <h6 className="font-weight-bold pt-1">Product title</h6>
                      <div className="text-muted description">
                        Space for small product description
                      </div>
                      <div className="d-flex align-items-center product">
                        {" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="far fa-star"></span>{" "}
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex flex-column">
                          <div className="h6 font-weight-bold">36.99 USD</div>
                          <div className="text-muted rebate">48.56</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 pt-lg-4 pt-4">
                  <div className="card">
                    {" "}
                    <img
                      className="card-img-top"
                      src="https://www.freepnglogos.com/uploads/grapes-png/grapes-grape-red-transparent-png-stickpng-5.png"
                    />
                    <div className="card-body">
                      <h6 className="font-weight-bold pt-1">Product title</h6>
                      <div className="text-muted description">
                        Space for small product description
                      </div>
                      <div className="d-flex align-items-center product">
                        {" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="far fa-star"></span>{" "}
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex flex-column">
                          <div className="h6 font-weight-bold">36.99 USD</div>
                          <div className="text-muted rebate">48.56</div>
                        </div>
                        <div className="btn btn-primary">Buy now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 pt-lg-4 pt-4">
                  <div className="card">
                    {" "}
                    <img
                      className="card-img-top"
                      src="https://www.freepnglogos.com/uploads/cucumber-png/cucumber-png-image-purepng-transparent-png-26.png"
                    />
                    <div className="card-body">
                      <h6 className="font-weight-bold pt-1">Product title</h6>
                      <div className="text-muted description">
                        Space for small product description
                      </div>
                      <div className="d-flex align-items-center product">
                        {" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="far fa-star"></span>{" "}
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex flex-column">
                          <div className="h6 font-weight-bold">36.99 USD</div>
                          <div className="text-muted rebate">48.56</div>
                        </div>
                        <div className="btn btn-primary">Buy now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 pt-lg-4 pt-4">
                  <div className="card">
                    {" "}
                    <img
                      className="card-img-top"
                      src="https://www.freepnglogos.com/uploads/watermelon-png/watermelon-gea-products-2.png"
                    />
                    <div className="card-body">
                      <h6 className="font-weight-bold pt-1">Product title</h6>
                      <div className="text-muted description">
                        Space for small product description
                      </div>
                      <div className="d-flex align-items-center product">
                        {" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="fas fa-star"></span>{" "}
                        <span className="far fa-star"></span>{" "}
                      </div>
                      <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex flex-column">
                          <div className="h6 font-weight-bold">36.99 USD</div>
                          <div className="text-muted rebate">48.56</div>
                        </div>
                        <div className="btn btn-primary">Buy now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
