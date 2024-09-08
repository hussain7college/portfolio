const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>Full Stack Developer and Team Leader with 5+ years of experience in software development and project management. Skilled in leading teams to deliver high-quality projects, enhancing codebases, Proficient in frontend (React.js) and backend (Node.js) development, and experienced in mentoring developers and UX/UI designers. Strong in Agile methodologies, delivering solutions that drive business success.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
