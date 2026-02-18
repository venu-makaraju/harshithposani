import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Lazy-loads image when it enters viewport. Uses native loading="lazy" and
 * decoding="async" for performance. Reserve space via width/height to avoid CLS.
 */
export function LazyImage({ src, alt, width, height, className, style, ...props }) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { rootMargin: '100px', threshold: 0.01 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const aspectRatio = width && height ? (height / width) * 100 : undefined

  return (
    <div
      ref={imgRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...(aspectRatio ? { paddingBottom: `${aspectRatio}%`, height: 0 } : {}),
      }}
    >
      {inView && (
        <motion.img
          src={src}
          alt={alt ?? ''}
          className={className}
          loading="lazy"
          decoding="async"
          width={width}
          height={height}
          onLoad={() => setLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            ...style,
            ...(aspectRatio ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' } : {}),
          }}
          {...props}
        />
      )}
      {inView && !loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--bg-secondary)',
            borderRadius: 'inherit',
          }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
