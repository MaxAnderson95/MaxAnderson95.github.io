export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle mt-24">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-5">
        <span className="text-text-muted text-[13px]">
          &copy; {year} Max Anderson
        </span>
      </div>
    </footer>
  );
}
