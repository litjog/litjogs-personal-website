import { Link } from 'react-router-dom';

export default function Home() {
  const birthYear = 1999;
  const year = new Date().getFullYear();
  const age = year - birthYear;

  return (
    <>
      <main className="page-body">
        <h2>Hello world!</h2>
        <p>
          Hi there! My name is litjog I am a web developer who is studying in
          college. I am {age} years old. My passion is programming especially in
          web development. I am familiar with JavaScript, TypeScript and PHP.
          Recently I also learned about React JS and Node.js. If you are
          interested in contacting me go to the{' '}
          <Link to="/contact">contact page!</Link>
        </p>
      </main>
    </>
  );
}
