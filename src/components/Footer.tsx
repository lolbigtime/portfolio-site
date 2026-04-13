export default function Footer() {
  return (
    <footer className="pt-16 pb-8 text-sm text-graphite/60">
      <p>
        Loosely designed in{" "}
        <a
          href="https://www.figma.com/"
          className="prismatic-link text-graphite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </a>{" "}
        and coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="prismatic-link text-graphite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          className="prismatic-link text-graphite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="prismatic-link text-graphite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </footer>
  );
}
