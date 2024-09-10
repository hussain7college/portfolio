import styles from '/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'hussain7abbas.com',
    href: 'https://hussain7abbas.com',
  },
  {
    social: 'email',
    link: 'hussain.jazing.21@gmail.com',
    href: 'mailto:hussain.jazing.21@gmail.com',
  },
  {
    social: 'github',
    link: 'Hussain7Abbas',
    href: 'https://github.com/Hussain7Abbas',
  },
  {
    social: 'linkedin',
    link: 'Hussain Abbas',
    href: 'https://www.linkedin.com/in/hussain-abbas-689117160/',
  },
  {
    social: 'instagram',
    link: 'hussain7abbas',
    href: 'https://www.instagram.com/hussain7abbas',
  },
  {
    social: 'telegram',
    link: 'hussain7abbas',
    href: 'https://t.me/hussain7abbas',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
