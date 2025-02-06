// AnimatedGitHubLink.jsx
// DHUSH  //
"use client";

export default function AnimatedGitHubLink() {
  return (
    <>
      <a 
        href="https://github.com/King-Dhush/CSS-FINAL-ASSIGNMENT" 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-link"
      >
        Click here to check out our code in GitHub!
      </a>
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
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
