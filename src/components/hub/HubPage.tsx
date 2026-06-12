import { FINANCE_SERVICES } from '../../data/financeServices.ts'
import { ServiceCard } from './ServiceCard.tsx'

export function HubPage() {
  return (
    <div className="hub-page">
      <header className="hub-hero">
        <p className="hub-hero__eyebrow">Suite financiera</p>
        <h1 id="hub-title">Calculadoras financieras</h1>
        <p className="hub-hero__lead">
          Herramientas gratuitas para planificar tu nómina, tu hipoteca y el crecimiento de tus
          ahorros. Cada calculadora funciona de forma independiente con resultados en tiempo real.
        </p>
      </header>

      <section className="hub-grid" aria-label="Calculadoras disponibles">
        {FINANCE_SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </div>
  )
}
