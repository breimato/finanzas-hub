import { HubPage } from './components/hub/HubPage.tsx'
import { ThemeToggle } from './components/ui/ThemeToggle.tsx'

export default function App() {
  return (
    <>
      <a href="#hub-title" className="skip-link">
        Saltar al contenido principal
      </a>
      <header className="app-header">
        <ThemeToggle />
      </header>
      <main id="main-content" className="app-main">
        <HubPage />
      </main>
    </>
  )
}
