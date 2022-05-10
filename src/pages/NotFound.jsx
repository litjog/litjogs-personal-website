import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('theme')) ?? 'dark';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  }, []);

  return (
    <>
      <div className="container">
        <div className="page-body">
          <h2>404 Not found</h2>
          <p>
            The requested URL{' '}
            <span style={{ wordBreak: 'break-all' }}>{pathname}</span> was not
            found on this server. <Link to={`/`}>Back to home page</Link>
          </p>
        </div>
      </div>
    </>
  );
}
