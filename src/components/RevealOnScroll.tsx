import { useRef, useEffect } from 'react';

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('visible');
        } else {
          ref.current?.classList.remove('visible');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
    }, []);

  return (
    <div
      ref={ref}
      className="reveal-on-scroll"
    >
      {children}
    </div>
  )
}

export default RevealOnScroll