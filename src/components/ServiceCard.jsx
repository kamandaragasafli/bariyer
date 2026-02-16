import './ServiceCard.css'

function ServiceCard({ icon, title, description, onClick }) {
  return (
    <div className="service-card" onClick={onClick}>
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  )
}

export default ServiceCard
