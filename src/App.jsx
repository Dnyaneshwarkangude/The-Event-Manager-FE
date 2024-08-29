import { Routes, Route } from 'react-router-dom'
import HomeNavbar from './components/Pages/HomeNavbar'
import Footer from './components/Pages/Footer' 
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Services from './components/Pages/Services'
import Gallery from './components/Pages/Gallery'
import Testimonial from './components/Pages/Testimonial'
import Contact from './components/Pages/Contact'




const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <HomeNavbar />
    <main className="pt-16 flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

const UserLayout = ({ children }) => (
  <div>{children}</div>
);

const AdminLayout = ({ children }) =>(
  <>
  {/* <AdminNav/>
  <main>{children}</main>
  <Footer/> */}
  </>
);


const App = () => { 

  return ( 
    <Routes>
      {/* Public Routes */} 
      <Route path='/' element={<MainLayout><Home/></MainLayout>} />
      <Route path='/about' element={<MainLayout><About/></MainLayout>} />
      <Route path='/services' element={<MainLayout><Services/></MainLayout>}/>
      <Route path='/gallery' element={<MainLayout><Gallery/></MainLayout>} />
      <Route path='/testimonial' element={<MainLayout><Testimonial/></MainLayout>} />
      <Route path='/contact' element={<MainLayout><Contact/></MainLayout>} />
      

    </Routes> 
  );
}

export default App;
