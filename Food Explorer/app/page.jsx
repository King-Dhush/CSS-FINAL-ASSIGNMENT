// app/page.jsx
import AnimatedGitHubLink from './AnimatedGitHubLink';

export default function Home() {
  return (
    <section>
      <h1 style={{ fontSize: '3.5rem' }}>Welcome to Food Explorer</h1>
      <p>
        Explore our interactive map of food places, 
        <br />find recipes with built-in unit calculators, 
        <br />and browse a gallery of world cuisines in our custom carousel.
      </p>
      <AnimatedGitHubLink />
    </section>
  );
}

