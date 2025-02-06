"use client";

export default function Home() {
  return (
    <>
      <section>
        <h1 style={{ fontSize: '3.5rem' }}>Welcome to Food Explorer</h1>
        <p>
          Explore our interactive map of food places, 
          <br />find recipes with built-in unit calculators, 
          <br />and browse a gallery of world cuisines in our custom carousel.
          <br />
          <a 
            href="https://github.com/King-Dhush/CSS-FINAL-ASSIGNMENT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            Click here to check out our code in GitHub!
          </a>
        </p>
      </section>
      <style jsx>{`
        .github-link {
          position: absolute;
          bottom: 60px;
          left: 60px;
          color: blue;
          text-decoration: underline;
          animation: moveUpDown 2s ease-in-out infinite;
        }
        @keyframes moveUpDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
