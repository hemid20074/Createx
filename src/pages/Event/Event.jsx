import { useParams } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Accordion from '../../components/ui/Accordion';
import Button from '../../components/ui/Button';
import ProfileSection from '../../components/sections/ProfileSection';
import ForWhom from '../../components/sections/ForWhom';
import SubscribeSplit from '../../components/sections/SubscribeSplit';
import LeadForm from '../../components/sections/LeadForm';
import RelatedSlider from '../../components/sections/RelatedSlider';
import EventCard from '../../components/cards/EventCard';
import { PartnerLogos } from '../../components/sections/Certificate';
import NotFound from '../NotFound/NotFound';
import { eventDetails as d, events, getEvent } from '../../data/events';
import styles from './Event.module.css';

export default function Event() {
  const { slug } = useParams();
  const event = getEvent(slug);
  if (!event) return <NotFound />;

  const related = events.filter((e) => e.slug !== event.slug);

  return (
    <>
      <PageHeader variant="banner" eyebrow={event.type} title={event.title.replace(/\.$/, '')} />

      <section className={styles.about}>
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <h2 className="h1">We will talk about:</h2>
            <Accordion
              className={styles.accordion}
              items={d.topics.map(([label, title, text]) => ({ label, title, text }))}
            />
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.fact}>
              <p className={styles.factLabel}>Time</p>
              <p className={styles.factValue}>
                {event.month} {Number(event.day)}, {event.time}
              </p>
              <p className={styles.factText}>{d.timeText}</p>
            </div>
            <div className={styles.fact}>
              <p className={styles.factLabel}>Price</p>
              <p className={styles.factValue}>{d.price.value}</p>
              <p className={styles.factText}>{d.price.text}</p>
            </div>
            <a href="#" className={styles.fbLink}>
              Event on Facebook
            </a>
            <Button href="#request" size="regular" block>
              Join the event
            </Button>
          </aside>
        </div>
      </section>

      <ProfileSection
        eyebrow="Speaker"
        person={d.speaker}
        socials={['facebook', 'instagram', 'twitter', 'linkedin']}
        logos={<PartnerLogos className={styles.logos} />}
      />

      <ForWhom title="Who will benefit from the event:" items={d.forWhom} />

      <div className={styles.subscribe}>
        <SubscribeSplit
          variant="box"
          title="Don’t want to miss the best events? Subscribe to our newsletter!"
          art="illustrations/event-subscribe.svg"
        />
      </div>

      <div id="request">
        <LeadForm
          eyebrow="Don’t miss the event"
          title="Leave a request"
          submit="Join the event"
          note="* You will receive a link to the online lecture in an email after registration."
          art="illustrations/event-request.svg"
          formSide="left"
        />
      </div>

      <div className={styles.relatedWrap}>
        <RelatedSlider
          eyebrow="Check other online events"
          title="You may be interested in"
          perView={3}
          items={related}
          renderItem={(e) => <EventCard event={e} layout="grid" />}
          more={{ text: 'Do you want more?', label: 'Explore all events', to: '/events' }}
        />
      </div>
    </>
  );
}
