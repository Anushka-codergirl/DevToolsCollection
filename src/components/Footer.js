const Hash = "#";
const Footer = ({ Name }) => (
  <footer className="text-muted py-5">
    <div className="container text-center">
      <p className="mb-1">
        <a href={Hash}>Back to top</a>
      </p>
      <p className="mb-0">
        Made with <i class="fas fa-heart"></i> by {""}
        <a
          target="_blank"
          href="https://github.com/Anushka-codergirl/"
          rel="noreferrer"
        >
          {Name}
        </a>
        <br /> &nbsp;Copyright &copy; {new Date().getFullYear()} | All Rights
        Reserved
      </p>
    </div>
  </footer>
);

export default Footer;
