import Image from 'next/image';
import styles from '/styles/EventCard.module.css';

const EventCard = ({ event }) => {
  return (
    <div className={styles.card}>
      <Image src={event.image} height={300} width={600} alt={event.name} />
      <div className={styles.content}>
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <div className={styles.cta}>
          {event.url && (
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
