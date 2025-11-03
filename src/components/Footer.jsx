import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <b>ABOUt US</b>
        <p>Contact us</p>
        <p>Careers</p>
        <p>Eastside Stories</p>
        <p>Corporate Information</p>

        <div className={styles.span}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>

      <div>
        <b>HELP</b>
        <p>Payments</p>
        <p>Shipping</p>
        <p>Exchange and Returns</p>
        <p>FAQ</p>
      </div>

      <div>
        <b>CONSUMER POLICY</b>
        <p>Terms of Use</p>
        <p>Security</p>
        <p>Privacy</p>
        <p>Cancellation and Returns</p>
      </div>

      <div>
        <b>GROUP COMPANIES</b>
        <p>Wyntra</p>
        <p>Jamazon</p>
        <p>Klipkart</p>
        <p>Nojio</p>
      </div>
    </footer>
  );
}

export default Footer;
