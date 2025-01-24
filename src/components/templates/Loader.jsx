import React from "react";
import { ColorRing, DNA } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
     <DNA
  visible={true}
  height="800"
  width="800 "
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    </div>
  );
}

export default Loader;
