
import Header from "./Header";
import Footer from "./Footer";


const AppLayout = ({children}) => {
  return (
    <>
    {/* Header */}
   <Header/>
    {children}
    {/* {Footer} */}
   <Footer/>
    </>
  )
}

export default AppLayout
