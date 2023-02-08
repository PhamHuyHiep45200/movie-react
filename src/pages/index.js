import LayoutAdmin from "@/common/layout/LayoutAdmin";
import React from "react";

function PageMovie() {
  return <div>PageMovie</div>;
}

export default PageMovie;

PageMovie.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};
