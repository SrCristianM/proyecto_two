import { useState } from 'react'
import useReveal from '../../hooks/useReveal'

const Inicio = () => {
    const [refHero, visibleHero] = useReveal()
    const [showMore, setShowMore] = useState(false)
    const snippet = `npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev`

    const copySnippet = async () => {
        try {
            await navigator.clipboard.writeText(snippet)
            alert('Comandos copiados al portapapeles')
        } catch (e) {
            alert('Error al copiar')
        }
    }

    return (
        <div className="container py-5">
            <div ref={refHero} className={`row align-items-center mb-5 reveal ${visibleHero ? 'active' : ''}`}>
                <div className="col-lg-7">
                    <h1 className="display-4">Bienvenido a Vite</h1>
                    <p className="lead text-muted">Vite es una herramienta de construcción moderna diseñada para ofrecer un entorno de desarrollo extremadamente rápido y una experiencia de compilación optimizada para producción.</p>
                    <p className="mt-4">Usa Vite para acelerar tu flujo de trabajo con HMR instantáneo, builds optimizadas y una configuración mínima para proyectos modernos con React, Vue o Svelte.</p>
                    <div className="mt-4">
                        <a className="btn btn-primary me-2" href="https://vitejs.dev/" target="_blank" rel="noreferrer">Documentación</a>
                        <a className="btn btn-outline-secondary" href="#">Ejemplos</a>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Arrancar con Vite</h5>
                            <p className="card-text text-muted">Comandos básicos para iniciar un proyecto con React + Vite:</p>
                            <div className="d-flex align-items-start gap-2">
                                <pre className="bg-light p-3 rounded flex-fill">{snippet}</pre>
                                <div>
                                    <button className="btn btn-outline-primary" onClick={copySnippet}>Copiar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm reveal">
                        <div className="card-body">
                            <h5 className="card-title">Desarrollo rápido</h5>
                            <p className="card-text">Carga de módulos bajo demanda y HMR que mantiene el estado de la app mientras desarrollas.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm reveal">
                        <div className="card-body">
                            <h5 className="card-title">Builds optimizadas</h5>
                            <p className="card-text">Empaquetado con Rollup para producción, generación de chunks eficientes y tree-shaking.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm reveal">
                        <div className="card-body">
                            <h5 className="card-title">Plugins y extensibilidad</h5>
                            <p className="card-text">Ecosistema de plugins para añadir funcionalidades: análisis, optimización, integraciones con frameworks.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-8">
                    <h3>Recursos y tutoriales</h3>
                    <p className="text-muted">Guías prácticas, templates oficiales y artículos para aprender a integrar Vite con testing, TypeScript, y despliegue continuo.</p>
                    <ul>
                        <li>Integrar TypeScript y configuración de paths</li>
                        <li>Configurar tests con Vitest o Jest</li>
                        <li>Optimizar dependencias y lazy loading</li>
                        <li>Despliegue en Netlify, Vercel o servidores estáticos</li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h5>FAQ rápida</h5>
                    <p className="text-muted"><strong>¿Vite reemplaza bundlers?</strong> No siempre; para producción Vite usa Rollup pero optimiza el flujo de desarrollo.</p>
                </div>
            </div>
        </div>
    )
}

export default Inicio