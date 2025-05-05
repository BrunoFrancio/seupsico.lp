import React, { useEffect, useRef } from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'light' | 'gradient';
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-indigo-50 to-white',
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`py-16 md:py-24 ${backgroundClasses[background]} ${className} fade-in-section`}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;