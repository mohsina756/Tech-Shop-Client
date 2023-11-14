import Marquee from "react-fast-marquee";

const Customer = () => {
  return (
    <div>
      <Marquee speed={100} pauseOnHover>
        <div className="text-center">
          <div className=" grid grid-cols-4 gap-5 md:gap-20  mb-10 p-10">
            {/* first customer */}
            <div className="  ">
              <div className=" avatar w-36 md:w-48 h-36 md:h-48">
                <img
                  className="  rounded-full"
                  src="https://i.ibb.co/4psncQy/1.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <p className="font-medium text-xl">Mr. Rifat</p>
                <div className="rating flex rating-sm mb-2 justify-center ">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="">Best Product in affordable price</p>
              </div>
            </div>
            {/* second customer */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/VCRbLBB/3.jpg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Ms. Sara</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>I am regular customer, i am satisfied</p>
              </div>
            </div>
            {/* third customer */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48 ">
                <img
                  className=" rounded-full"
                  src="https://i.ibb.co/dGgMCgY/2.jpg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Mr. Risam</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>They are good, but i think need more improvement.</p>
              </div>
            </div>
            {/* fourth experts */}
            <div className="">
              <div className="avatar w-36 md:w-48 h-36 md:h-48">
                <img
                  className="rounded-full"
                  src="https://i.ibb.co/WBNCng3/4.jpg"
                  alt=""
                />
              </div>
              <div className="text-center">
                <p className="font-medium text-xl">Ms. Angela</p>
                <div className="rating flex rating-sm mb-2 justify-center">
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    checked
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    disabled
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p>There delivery system and price are the best</p>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Customer;
