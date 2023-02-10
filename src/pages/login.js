import LayoutLogin from "@/common/layout/LayoutLogin";
import React from "react";

function Login() {
  return <div>Login</div>;
}

export default Login;

Login.getLayout = function getLayout(page) {
  return <LayoutLogin>{page}</LayoutLogin>;
};
