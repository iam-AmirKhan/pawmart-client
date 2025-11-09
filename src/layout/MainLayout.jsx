import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
     <div>
      <Navbar />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      
    </div>
  );
};

export default MainLayout;