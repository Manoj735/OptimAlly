import styles from "./Homepage.module.css";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import chakra from "../../animation/chakra.json";
import heromedi1 from "../../animation/heromedi1.json";
import Front from "../../components/FrontPage/Front";
const Homepage = () => {
  return (
    <div>
      <div className={styles.homepage}>
        <Front />
      </div>
      {/* scroll */}

      <div className={styles.second}>
        <div className={styles.medi_animaiton}>
          <Lottie animationData={heromedi1} style={{ size: 900 }} />
        </div>
        <div className={styles.text1}>
          <h2>Meditation</h2>
          Meditation is the delicate art of doing nothing and letting go of all
          efforts to relax in your true nature, which is love, joy, and peace.
          The practice of meditation gives you deep rest. It is essential to
          reduce stress levels and maintain mental hygiene.
          <br />
          <Link to="/Meditation">
            <button className={styles.getthereBtn}>Meditate now!</button>
          </Link>
        </div>
      </div>

      <div className={styles.third}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={styles.chak_animaiton}>
          <Lottie animationData={chakra} style={{ size: 5000 }} />
        </div>
        <div className={styles.text2}>
          <h2>Chakras</h2>
          are thought to be spinning disks of energy that should stay “open” and
          aligned for optimal emotional and physical well-being.Yoga is one of
          the most basic ways to balance each chakra because it creates
          alignment in the physical body. Balancing and stabilizing your
          physical body through asana (yoga posture) practice also rebalances
          your subtle body.
          <br />
          <Link to="/Chakras">
            <button className={styles.getthereBtn}>Know more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
