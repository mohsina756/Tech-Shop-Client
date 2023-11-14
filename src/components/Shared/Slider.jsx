const Slider = () => {
  return (
    <div>
      {/* slider */}
      <div>
        <div className="carousel w-full bg-no-repeat">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/mFYr4Qv/slider-1.jpg"
              className="h-[270px] md:h-[480px] w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/mSHRTCP/slider3.jpg"
              className="h-[270px] md:h-[480px] w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/jJzFg9c/slider.jpg"
              className="h-[270px] md:h-[480px] w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/qYPz4TN/33139536-7995902.jpg"
              className="h-[270px] md:h-[480px] w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
