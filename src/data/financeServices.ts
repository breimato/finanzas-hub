export type FinanceServiceId = 'hub' | 'salario-neto' | 'hipoteca' | 'calculadora-intereses'

export interface FinanceService {
  id: FinanceServiceId
  title: string
  description: string
  href: string
  cta: string
}

export const FINANCE_HUB_PATH = '/finanzas/'

export const FINANCE_SERVICES: FinanceService[] = [
  {
    id: 'salario-neto',
    title: 'Salario neto',
    description:
      'Calcula tu nómina neta en España con IRPF, cotizaciones a la Seguridad Social y retenciones.',
    href: '/salario-neto/',
    cta: 'Abrir calculadora',
  },
  {
    id: 'hipoteca',
    title: 'Hipoteca',
    description:
      'Simula la cuota mensual, intereses y costes asociados a tu hipoteca.',
    href: '/hipoteca/',
    cta: 'Abrir calculadora',
  },
  {
    id: 'calculadora-intereses',
    title: 'Interés compuesto',
    description:
      'Proyecta el crecimiento de tus ahorros con aportaciones periódicas y tramos avanzados.',
    href: '/calculadora-intereses/',
    cta: 'Abrir calculadora',
  },
]
