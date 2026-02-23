import { useEffect, useState } from 'react'

const ScrollTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!show) return null

  return (
    <button
      className="btn btn-primary shadow-lg scroll-top"
      onClick={goTop}
      aria-label="Subir al inicio"
    >
      ↑
    </button>
  )
}

export default ScrollTop
