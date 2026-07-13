import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="lab-container site-footer__inner">
        <div>
          <strong>Farriel Arrianta</strong>
          <span>Software engineer / Malang, Indonesia</span>
        </div>
        <p>Designed as a digital workbench · {new Date().getFullYear()}</p>
        <a href="#home">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
