const Slider = () => {
  return (
    <div>
      {/* slider */}
      <div>
        <div className="carousel w-full bg-no-repeat">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/ZhMdXy6/13402423-5221522.jpg"
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
              src="https://i.ibb.co/hX13yJQ/11852974-4859553.jpg"
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
              src="https://i.ibb.co/Gx1YFyS/13704444-5332037.jpg"
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
          
        </div>
      </div>
    </div>
  );
};

export default Slider;


