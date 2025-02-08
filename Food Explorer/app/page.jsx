"use client";

// Home page component for Food Explorer
// This component includes a custom animation for the GitHub link.
// The animation was proposed and created by King Dhush to enhance the visual appeal of the link.
// The homepage was made with the collaboration of all team members.

export default function Home() {
  return (
    <>
      <section>
        <h1 style={{ fontSize: '3.5rem' }}>Welcome to Food Explorer</h1>
        <p>
          Explore our interactive map of food places, 
          <br />find recipes with built-in unit calculators, 
          <br />and browse a gallery of world cuisines in our custom carousel.
        </p>
        <div className="github-link-box">
          <a 
            href="https://github.com/King-Dhush/CSS-FINAL-ASSIGNMENT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            Click here to check out our code in GitHub!
          </a>
        </div>
      </section>
      <style jsx>{`
        /* Custom animation for the GitHub link created by King Dhush */
        .github-link-box {
          position: absolute;
          bottom: 60px;
          left: 60px;
          width: 300px; 
          height: 60px; 
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f0; /* Light gray background for better contrast */
          border: 2px solid #0070f3;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          /* Animation: smoothly move up and down */
          animation: moveUpDown 2s ease-in-out infinite;
        }

        .github-link {
          color: #0070f3;
          text-decoration: none; 
          font-weight: bold;
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
