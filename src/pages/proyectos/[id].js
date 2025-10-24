import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import projects from '../../utils/projects.json'
import styles from './project.module.css'
import SEO from '../../components/SEO'

const ProjectPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [project, setProject] = useState(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!id) return
    const pid = parseInt(id, 10)
    const found = projects.find((p) => p.id === pid)
    setProject(found || null)
    setIndex(0)
  }, [id])

  const pageTitle = project ? `Legno Haus | ${project?.title}` : 'Legno Haus'

  if (!id) return <div className={styles.projectPage}>Cargando...</div>
  if (!project) return <div className={styles.projectPage}>Proyecto no encontrado</div>

  const images = project.images || []

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)
  const goTo = (i) => setIndex(i)

  return (
    <>
      <SEO
        title={pageTitle}
        description={project?.og_description || 'Proyecto Legno Haus'}
        image={project?.images?.[0]}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://legno-haus.example'}/proyectos/${project.id}`}
      />
      <main className={styles.projectPage}>
        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.content}>
          {/* Left: carousel */}
          <div className={styles.carousel}>
            <div className={styles.carouselWrap}>
              <Image
                src={images[index]}
                alt={`${project.title} - ${index + 1}`}
                width={900}
                height={600}
                className={styles.carouselImage}
              />

              <button
                onClick={prev}
                aria-label="Anterior"
                className={`${styles.navButton} ${styles.prev}`}
              >
                ‹
              </button>

              <button
                onClick={next}
                aria-label="Siguiente"
                className={`${styles.navButton} ${styles.next}`}
              >
                ›
              </button>
            </div>

            {/* Thumbnails */}
            <div className={styles.thumbs}>
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`${styles.thumbBtn} ${i === index ? styles.thumbActive : ''}`}
                  aria-label={`Ir a imagen ${i + 1}`}
                >
                  <Image src={src} alt={`${project.title} thumb ${i + 1}`} width={160} height={100} className={styles.thumbImg} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: description */}
          <aside className={styles.aside}>
            <h2>Descripción</h2>
            <p className={styles.description}>{project.description}</p>
          </aside>
        </div>
      </main>
    </>
  )
}

export default ProjectPage
