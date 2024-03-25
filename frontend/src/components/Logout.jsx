import React from 'react';
import { useTestMutation } from '../slices/usersApiSlice';

const Logout = () => {
  const [test] = useTestMutation();

  async function handleLogout() {
    const text = await test();
    console.log(text);
  }

  return (
    <div className="absolute right-3 top-3 z-[999] flex  items-center justify-center gap-3 rounded-md bg-greyLight px-4 py-2 shadow-[0_0px_32px_-0px_rgba(0,0,0,0.30)]">
      <p className="text-lg font-medium">
        Hello, <span className="font-bold text-limeMain">user</span> 👋
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
