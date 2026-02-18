import './Contact.css'

const emails = ['info@bariyerpm.az', 'rauf.r@bariyerpm.az', 'elmin.a@bariyerpm.az']

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Əlaqə</h2>
          <p>Bizimlə əlaqə saxlayın</p>
        </div>
        <div className="contact-content">
          <div className="contact-emails">
            <h3>E-poçt</h3>
            <ul>
              {emails.map((email, i) => (
                <li key={i}>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-info">
            <h3>Telefon</h3>
            <a href="tel:0552400295" className="contact-phone">0552400295</a>
          </div>
          <div className="contact-social">
            <h3>Facebook</h3>
            <a
              href="https://www.facebook.com/share/1QuUhaBfHT/"
              className="contact-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook-da bizi izləyin
            </a>
          </div>
          <div className="contact-cta">
            <a
              href="https://wa.me/994502000549"
              className="contact-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ilə yaz
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
