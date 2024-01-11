import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loading min-h-screen fixed flex flex-col justify-center items-center left-0 right-0">
        <div class="loader">
          <div data-glitch="Loading..." class="glitch">
            Loading...
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
