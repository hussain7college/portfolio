import Image from 'next/image';
import EyeIcon from './icons/EyeIcon';
import HeartIcon from './icons/HeartIcon';
import CommentIcon from './icons/CommentIcon';
import styles from '../styles/CertificateCard.module.css';

const CertificateCard = ({ certificate }) => {
  return (
    <a
      // href={certificate.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <Image
        src={certificate.image}
        alt={certificate.name}
        width={300}
        height={150}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{certificate.name}</h3>
        <p>{certificate.description}</p>
      </div>

    </a>
  );
};

export default CertificateCard;
