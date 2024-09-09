import styles from "../css/about.module.css";

export default function About() {
  return (
    <>
      <div>
        <div>
          <div className={`${styles.section} card bg-primary-subtle`} align="center">
            <h1>
              <strong>About Me</strong>
            </h1>
            <p>
              Web developer with a psychology background specializing in
              creating intuitive and adaptable user interfaces. Earned a
              certificate in Full Stack Web Development from the University of
              Central Florida Coding Bootcamp. Attentive to detail and clarity
              are at the core of my designs and development. My strengths in
              teamwork and intuitive problem-solving are at the core of my
              ability to create effective and user-centered digital products.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <div className="card bg-primary-subtle" align="center">
            <h1>
              <strong>Psychology Background</strong>
            </h1>
            <p>
              The "Journey of Life" can be seen as a path we all walk,
              filled with different experiences and challenges. Just like
              moving through various landscapes—a desert, an ocean, or a
              dense jungle—each part of life brings its own difficulties and
              rewards.
            </p>
            <p>
              At times, we might feel lost or uncertain, like wandering
              through a desert. Other times, we might feel overwhelmed, like
              being caught in stormy seas. We face obstacles, make mistakes,
              and sometimes get stuck in difficult situations. But each
              experience, whether easy or tough, helps us learn and grow.
            </p>
            <p>
              Ultimately, life is about finding our way, learning from our
              experiences, and continuing to move forward with hope, no
              matter what challenges come our way.
            </p>
            <img src="/assets/journey.png" alt="The journey of life" />
          </div>
        </div>
        <div className={styles.section}>
          <div className="card bg-primary-subtle" align="center">
            <h1>
              <strong>Jose</strong>
            </h1>
            <img
              src="https://avatars.githubusercontent.com/u/133266199?v=4"
              alt="me"
            />
            <p>
              I am driven by a passion for personal growth and continuous
              learning, embracing challenges with adaptability and
              intuition. My approach is centered on understanding complex
              problems and finding creative solutions, always looking to
              refine my skills and expand my perspective. I value
              curiosity and strive to bring a thoughtful, innovative
              mindset to every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
