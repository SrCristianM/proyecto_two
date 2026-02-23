
import useReveal from '../../hooks/useReveal'
import { useState } from 'react'

const Historia = () => {
    const [refTop, visibleTop] = useReveal()
    const [more, setMore] = useState(false)

    return (
        <div className="container py-5">
            <div ref={refTop} className={`row mb-4 reveal ${visibleTop ? 'active' : ''}`}>
                <div className="col-lg-8">
                    <h2>Historia de Vite</h2>
                    <p className="text-muted">Vite nació para resolver las limitaciones de las herramientas tradicionales en tiempos de arranque y actualizar la experiencia de desarrollo con módulos ES nativos.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <ul className="timeline list-group">
                        <li className="list-group-item mb-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>Creación</strong>
                                    <div className="text-muted">Evan You presentó Vite como una alternativa más rápida a las herramientas tradicionales.</div>
                                </div>
                                <span className="badge bg-primary">2020</span>
                            </div>
                        </li>

                        <li className="list-group-item mb-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>Adopción</strong>
                                    <div className="text-muted">Rápida adopción en proyectos y creación de plantillas oficiales para múltiples frameworks.</div>
                                </div>
                                <span className="badge bg-secondary">2021</span>
                            </div>
                        </li>

                        <li className="list-group-item mb-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>Ecosistema</strong>
                                    <div className="text-muted">Crecimiento del ecosistema de plugins, soporte para herramientas modernas y mejoras continuas.</div>
                                </div>
                                <span className="badge bg-success">2022+</span>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-4">
                        <h5>Comunidad y recursos</h5>
                        <p className="text-muted">Vite tiene una comunidad activa en GitHub y múltiples recursos: documentación oficial, guías, templates y plugins. Participar en la comunidad ayuda a mejorar la herramienta y encontrar soluciones rápidas.</p>
                        <a className="btn btn-outline-primary" href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">Repositorio en GitHub</a>
                    </div>
                </div>
            </div>
      
            <div className="row mt-5">
                <div className="col-lg-8">
                    <h4>Casos de uso y adaptaciones</h4>
                    <p className="text-muted">Vite se utiliza tanto en proyectos pequeños como en aplicaciones empresariales. Sus puntos fuertes son la velocidad en desarrollo y la facilidad para integrar herramientas modernas.</p>
                    <ul>
                        <li>Proyectos SPA con React y Vue</li>
                        <li>Librerías y componentes que necesitan build optimizada</li>
                        <li>Proyectos que requieren un entorno de desarrollo rápido y feedback inmediato</li>
                    </ul>

                    <h5 className="mt-4">Contribuir</h5>
                    <p className="text-muted">Si quieres colaborar con Vite: revisa issues etiquetados como "good first issue", sigue las guías de contribution y participa en discusiones del repo.</p>

                    <div className="mt-3">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => setMore(!more)}>{more ? 'Mostrar menos' : 'Mostrar más recursos'}</button>
                        {more && (
                            <div className="mt-3 reveal active">
                                <h6>Recursos adicionales</h6>
                                <ul>
                                    <li><a href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">Guía oficial</a></li>
                                    <li><a href="https://github.com/vitejs/awesome-vite" target="_blank" rel="noreferrer">Awesome Vite</a></li>
                                    <li><a href="https://vitejs.dev/faq/" target="_blank" rel="noreferrer">FAQ</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Historia;