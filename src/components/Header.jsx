import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { setIsDarkMode } from '../slices/themeSlice';

export default function Header() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.theme);
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  useEffect(() => {
    dispatch(setIsDarkMode(theme === 'dark'));
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [dispatch, theme]);

  const activeLink = {
    fontWeight: 'bold',
  };

  return (
    <>
      <header className="page-header">
        <nav>
          <h1>
            <Link to={`/`} style={{ textDecoration: 'none' }}>
              {'🐐'}
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
            <li>
              <input
                name="themeCheckbox"
                id="themeCheckbox"
                type="checkbox"
                checked={isDarkMode}
                onChange={(e) => {
                  setTheme(e.target.checked ? 'dark' : 'light');
                }}
              />
              <label htmlFor="themeCheckbox">{isDarkMode ? '☀️' : '🌙'}</label>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
