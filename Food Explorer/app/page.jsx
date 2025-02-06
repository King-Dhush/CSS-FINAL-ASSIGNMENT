"use client";

// Home component for Food Explorer
// This component includes a custom animation for the GitHub link.
// The animation was created by King Dhush to enhance the visual appeal of the link.
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
        </p>
      </section>
      <style jsx>{`
        /* Custom animation for the GitHub link created by King Dhush */
        .github-link-box {
          position: absolute;
          bottom: 60px;
          left: 60px;
          width: 300px; /* Made the box longer */
          height: 60px; /* Adjusted height for better design */
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f0f0f0; /* Light gray background for better contrast */
          border: 2px solid #0070f3; /* Changed border color to match the link color */
          border-radius: 8px; /* Added border radius for a smoother look */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Added subtle shadow for depth */
          cursor: pointer;
          /* Animation: smoothly move up and down */
          animation: moveUpDown 2s ease-in-out infinite;
        }

        .github-link {
          color: #0070f3; /* Changed link color to a more appealing blue */
          text-decoration: none; /* Removed underline */
          font-weight: bold; /* Made the text bold */
        }

        /* Keyframes for the custom move up and down animation */
        @keyframes moveUpDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px); /* Moves the element up by 10px */
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
