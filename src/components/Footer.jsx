export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="page-footer">
        <p>&copy; {year} litjog.</p>
      </footer>
    </>
  );
}
