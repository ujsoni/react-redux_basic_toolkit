import { useDispatch, useSelector } from "react-redux";
import { authAction } from '../store/auth';
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => {
    console.log(state);
    return state.auth.isAuth;
  });

  const logout = (event) => {
    event.preventDefault();
    dispatch(authAction.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { login &&
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
