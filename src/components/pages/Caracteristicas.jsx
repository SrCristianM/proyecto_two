
import { useState } from 'react'
import useReveal from '../../hooks/useReveal'

const Caracteristicas = () => {
    const [refTop, visibleTop] = useReveal()
    const [open, setOpen] = useState(null)

    const features = [
        { id: 1, title: 'Desarrollo ultrarrápido', summary: 'HMR casi instantáneo y arranque rápido', details: 'Vite aprovecha ES modules y bundlers rápidos (esbuild) para analizar dependencias y servir sólo lo necesario durante el desarrollo.' },
        { id: 2, title: 'Build optimizada', summary: 'Rollup en producción', details: 'La fase de build usa Rollup para generar bundles eficientes, code-splitting y optimizaciones de tamaño.' },
        { id: 3, title: 'Plugins y ecosistema', summary: 'Plugins para imágenes, CSS y más', details: 'Amplio ecosistema que permite añadir transformaciones, optimización de imágenes, y soporte para frameworks y herramientas.' },
    ]

    const toggle = (id) => setOpen(open === id ? null : id)

    return (
        <div className="container py-5">
            <div ref={refTop} className={`row mb-4 reveal ${visibleTop ? 'active' : ''}`}>
                <div className="col-lg-8">
                    <h2>Características de Vite</h2>
                    <p className="text-muted">Vite moderniza el flujo de trabajo web con arranques rápidos, HMR eficiente y builds optimizadas. A continuación se muestran ventajas y ejemplos prácticos.</p>
                </div>
                <div className="col-lg-4 d-flex align-items-center">
                    <a className="btn btn-primary me-2" href="https://vitejs.dev/" target="_blank" rel="noreferrer">Documentación</a>
                    <a className="btn btn-outline-secondary" href="#">Guía rápida</a>
                </div>
            </div>

            <div className="row g-3 mb-4">
                {features.map(f => (
                    <div key={f.id} className="col-md-6">
                        <div className="card h-100 shadow-sm reveal">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h5 className="card-title">{f.title}</h5>
                                        <p className="card-text text-muted">{f.summary}</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-sm btn-outline-primary" onClick={() => toggle(f.id)} aria-expanded={open===f.id}>{open === f.id ? 'Ocultar' : 'Ver'}</button>
                                    </div>
                                </div>
                                <div className={`collapse-body mt-3 ${open === f.id ? 'open' : ''}`}>
                                    <p className="mb-0">{f.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row mb-4">
                <div className="col-lg-6">
                    <h6>Soporte técnico</h6>
                    <ul>
                        <li>ES Modules nativo</li>
                        <li>Integración con React / Vue / Svelte</li>
                        <li>Plugins para optimizar imágenes y dependencias</li>
                        <li>Compatibilidad con TypeScript y linting</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <h6>Ejemplo rápido</h6>
                    <p className="text-muted">Inicia el servidor de desarrollo:</p>
                    <pre className="bg-light p-3 rounded">npm run dev</pre>
                    <p className="mt-3">Ejemplo de import dinámico (carga bajo demanda):</p>
                    <pre className="bg-light p-3 rounded">const module = await import('./heavy-module.js')
module.doHeavyWork()</pre>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="alert alert-secondary">¿Quieres integrar Vite con TypeScript, tests o CI? Puedo añadir ejemplos y configuración.</div>
                </div>
            </div>
      
            <div className="row mt-4">
                <div className="col-lg-8">
                    <h4>Prácticas recomendadas</h4>
                    <ol>
                        <li>Evitar importaciones pesadas en el entry para favorecer lazy-loading.</li>
                        <li>Usar `optimizeDeps` para mejorar tiempos de arranque en dev.</li>
                        <li>Configurar `build.rollupOptions` para control fino de chunks en producción.</li>
                    </ol>
                </div>
                <div className="col-lg-4">
                    <h6>Enlaces útiles</h6>
                    <ul>
                        <li><a href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">Guía oficial</a></li>
                        <li><a href="https://vitejs.dev/faq/" target="_blank" rel="noreferrer">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default Caracteristicas;