import CertificateCard from '../components/CertificateCard';
import { getCertificates } from './api/certificates';
import styles from '../styles/CertificatesPage.module.css';

const CertificatesPage = ({ certificates }) => {
  return (
    <>
      <h3>Certificates I Earned So Far</h3>
      <div className={styles.container}>
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const certificates = getCertificates();

  return {
    props: { title: 'Certificates', certificates },
  };
}

export default CertificatesPage;
