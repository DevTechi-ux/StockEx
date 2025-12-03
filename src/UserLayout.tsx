import { Outlet } from 'react-router-dom';

// You can add a user-specific sidebar, header, or footer here
// For now, it will just provide the structure for nested routes.

const UserLayout = () => {
  return (
    <div className="user-layout">
      {/* You can include a UserHeader or UserSidebar here */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;