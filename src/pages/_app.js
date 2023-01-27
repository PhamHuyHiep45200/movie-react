import LayoutAdmin from "@/common/layout/LayoutAdmin";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutAdmin>
      <Component {...pageProps} />
    </LayoutAdmin>
  );
}

// export default function App({ Component, pageProps }) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout || ((page) => <LayoutAdmin />);

//   return getLayout(<Component {...pageProps} />);
// }
