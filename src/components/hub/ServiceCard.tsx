import type { FinanceService } from '../../data/financeServices.ts'

interface ServiceCardProps {
  service: FinanceService
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <a href={service.href} className="service-card">
      <h2 className="service-card__title">{service.title}</h2>
      <p className="service-card__description">{service.description}</p>
      <span className="service-card__cta">{service.cta}</span>
    </a>
  )
}
