import { useContext, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import { AuthContext } from '../Provider/AuthProvider';
import logo1 from '../assets/9efea09272474b6f043f606ad6233be5.png';

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { LogOUt, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    LogOUt()
      .then(() => {
        setUser(null);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Mobile overlay */}
      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-30 lg:hidden"></div>}

      <aside
        className={`
          fixed lg:static z-40
          w-64 bg-gray-800 text-white p-5
          h-full lg:h-auto
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex items-center justify-between mb-6">
          <Link to="/">
            <div className="flex items-center gap-2 bg-(--navbar-bg) shadow-md rounded-full px-4 py-2 w-fit hover:shadow-lg ">
              <img src={logo1} alt="UBMS Logo" className="w-6 h-6 max-sm:w-4 max-sm:h-4 rounded-full object-cover" />
              <span className="font-semibold text-(--category) text-lg max-sm:text-sm">UBMS</span>
            </div>
          </Link>
          <button className="lg:hidden text-2xl" onClick={() => setOpen(false)}>
            <FiX />
          </button>
        </div>

        <div className="space-y-4">
          <NavLink to="/dashboard" end onClick={() => setOpen(false)} className={({ isActive }) => `block py-2 font-semibold px-4  ${isActive ? 'bg-(--active) text-(--category)  rounded-md' : 'bg-transparent'}`}>
            Dashboard
          </NavLink>

          <NavLink to="/dashboard/myPaybill" onClick={() => setOpen(false)} className={({ isActive }) => `block py-2 font-semibold px-4 ${isActive ? 'bg-(--active) text-(--category) rounded-md' : ''}`}>
            My Bill
          </NavLink>

          <NavLink to="/dashboard/profile" onClick={() => setOpen(false)} className={({ isActive }) => `block py-2 font-semibold px-4  ${isActive ? 'bg-(--active) text-(--category) rounded-md' : ''}`}>
            Profile
          </NavLink>

          <button onClick={handleLogout} className="block px-4 hover:text-gray-300">
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="lg:hidden bg-white shadow px-4 py-3 flex items-center">
          <button className="text-2xl" onClick={() => setOpen(true)}>
            <FiMenu />
          </button>
          <h1 className="ml-4 font-semibold text-(--category)">Dashboard</h1>
        </header>

        <main className="flex-1 p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
