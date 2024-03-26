import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { clearAllPlaces } from '../slices/placesSlice';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();

  async function handleLogout() {
    try {
      await logoutApiCall().unwrap();
      dispatch(clearAllPlaces());
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return (
    <div className="absolute right-0 top-0 z-[999] flex  items-center justify-center gap-3 rounded-md px-4 py-2 md:right-3 md:top-3 md:bg-greyLight md:shadow-[0_0px_32px_-0px_rgba(0,0,0,0.30)]">
      <p className="text-lg font-bold">
        Hello, <span className="text-limeMain">{userInfo.name}</span> 👋
      </p>
      <button
        className="rounded bg-limeMain px-4 py-2 font-bold tracking-wider hover:bg-limeHover"
        onClick={handleLogout}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Logout;
