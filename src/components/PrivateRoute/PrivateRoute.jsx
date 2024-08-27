// import { Navigate} from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLogged } from '../../redux/auth/selectors';

// const PrivateRoute = ({ children }) => {
//   const { isLoggedIn } = useSelector(selectIsLogged)

//   return isLoggedIn ? children : <Navigate to='/login' state={location} />;
// };

// export default PrivateRoute;

import { Navigate} from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../../redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogged)

  return isLoggedIn ? children : <Navigate to='/login'/>;
};

export default PrivateRoute;