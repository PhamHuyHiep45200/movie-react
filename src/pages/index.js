import { getAllUser } from "@/services/user";
import React, { useEffect } from "react";

function PageMovie() {
  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    const response = await getAllUser();
    console.log(response);
  };
  return <div>PageMovie</div>;
}

export default PageMovie;

// PageMovie.getLayout = function getLayout(page) {
//   return <LayoutAdmin>{page}</LayoutAdmin>;
// };
