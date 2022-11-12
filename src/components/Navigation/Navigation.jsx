import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? <NavLink to="/contacts">Contacts</NavLink> : null}
    </nav>
  );
};

export default Navigation;
