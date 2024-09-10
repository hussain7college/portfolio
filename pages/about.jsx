import BlurFade from '/components/magicui/blur-fade';

const AboutPage = () => {
  return (
    <div className='flex flex-row-reverse max-lg:flex-col'>
      <img
        src='/personal_photo.jpg'
        className='lg:flex-shrink-[1] self-center h-[40rem] object-top rounded-lg object-cover max-lg:w-[15rem] max-lg:h-[15rem] max-lg:rounded-full'
        alt='Personal Photo'
      />
      <div className='lg:flex-shrink-[2] lg:me-2 max-lg:mt-2'>
        <BlurFade inView>
          <h3 className='text-3xl mb-3 mt-3 lg:mt-0'>A Little Bit About Me</h3>
        </BlurFade>
        <p>Full Stack Developer and Team Leader with 5+ years of experience in software development and project management. Skilled in leading teams to deliver high-quality projects, enhancing codebases, Proficient in frontend (React.js) and backend (Node.js) development, and experienced in mentoring developers and UX/UI designers. Strong in Agile methodologies, delivering solutions that drive business success.</p>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
