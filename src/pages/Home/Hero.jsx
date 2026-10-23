import Button from '../../components/ui/Button';
import Decor from '../../components/ui/Decor';
import Img from '../../components/ui/Img';
import PlayButton from '../../components/ui/PlayButton';
import Stats from '../../components/ui/Stats';
import styles from './Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroDecor} aria-hidden="true">
        <Decor src="shapes/circles.svg" style={{ left: -112, bottom: -100, width: 284 }} opacity={0.2} />
        <Decor src="shapes/dots.svg" style={{ right: -30, top: '69%', width: 187 }} opacity={0.8} />
        <Decor src="shapes/chevrons.svg" style={{ right: 119, top: -22, width: 110 }} rotate={-45} />
        <Decor src="shapes/half-circle.svg" style={{ left: '38%', top: '70%', width: 61 }} />
        <Decor src="shapes/quotes.svg" style={{ left: '40.7%', top: '45%', width: 88 }} />
        <Decor src="shapes/arrows.svg" style={{ left: 82, top: 133, width: 96 }} rotate={180} />
      </div>

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <PlayButton label="Play showreel" className={styles.showreel} />
          <h1 className={`display-2 ${styles.heroTitle}`}>
            Enjoy studying with Createx Online Courses
          </h1>
          <div className={styles.heroButtons}>
            <Button to="/about" variant="outline" size="large">
              About us
            </Button>
            <Button to="/courses" size="large">
              Explore courses
            </Button>
          </div>
        </div>

        <div className={styles.heroArt}>
          <Img src="illustrations/hero.svg" alt="" width="602" height="551" />
        </div>

        <Stats className={styles.heroStats} />
      </div>
    </section>
  );
}
