export const Footer = () => {
  return (
    <footer className="bg-base-200/60 px-6 py-4 shadow">
      <div className="footer layout">
        <aside className="grid-flow-col items-center">
          <p>
            ©2025{" "}
            <a className="link link-hover font-medium" href="#">
              Tenpo
            </a>
          </p>
        </aside>
        <nav className="text-base-content grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a className="link link-hover" href="#">
            License
          </a>
          <a className="link link-hover" href="#">
            Help
          </a>
          <a className="link link-hover" href="#">
            Contact
          </a>
          <a className="link link-hover" href="#">
            Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};
