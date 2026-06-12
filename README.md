# Hub de calculadoras financieras

Portal que enlaza las calculadoras de la suite financiera de [breimato.es](https://breimato.es):

- [Salario neto](https://breimato.es/salario-neto/)
- [Hipoteca](https://breimato.es/hipoteca/)
- [Interés compuesto](https://breimato.es/calculadora-intereses/)

Producción: **https://breimato.es/finanzas/**

## Stack

| Área | Tecnología |
|------|------------|
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Estilos | CSS con variables (Fraunces + IBM Plex Sans) |
| Deploy | FTP a SiteGround |

## Desarrollo

```bash
npm install
npm run dev
```

## Build y despliegue

```bash
# Copia .env.deploy.example → .env.deploy.local y rellena credenciales FTP
npm run build
npm run deploy:ftp
```

Variables de entorno de despliegue:

| Variable | Valor |
|----------|-------|
| `VITE_BASE_PATH` | `/finanzas/` |
| `FTP_REMOTE_DIR` | `breimato.es/public_html/finanzas` |

## Estructura

```
src/
├── components/hub/     # HubPage, ServiceCard
├── components/ui/    # ThemeToggle
├── data/             # Catálogo de microservicios
└── hooks/            # useTheme (clave compartida: finanzas-theme)
```
