import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { toggleDarkMode, setIsDarkMode } from '../slices/themeSlice';

export default function Header() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') ?? 'dark';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    dispatch(setIsDarkMode(savedTheme === 'dark'));
  }, [dispatch]);

  const activeLink = {
    fontWeight: 'bold',
  };

  return (
    <>
      <header className="page-header">
        <nav>
          <h1>
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              🐐
            </Link>
          </h1>
          <ul>
            <li>
              <NavLink
                to={`/`}
                style={(style) => (style.isActive ? activeLink : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/about`}
                style={(style) => (style.isActive ? activeLink : undefined)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/contact`}
                style={(style) => (style.isActive ? activeLink : undefined)}
              >
                Contact
              </NavLink>
            </li>
            <li
              style={{ cursor: 'pointer' }}
              onClick={() => {
                document.body.classList.toggle('dark-mode', !isDarkMode);
                localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
                dispatch(toggleDarkMode());
              }}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
