import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useMediaQuery } from '../../hooks/useScrollSpy';

/**
 * CustomCursor - Mouse-following cursor with dot + ring effect.
 * Hidden on mobile/touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add hover detection to interactive elements
    const interactiveEls = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  const color = theme === 'dark' ? '#6366f1' : '#4f46e5';

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHovering ? '8px' : '6px',
          height: isHovering ? '8px' : '6px',
          backgroundColor: color,
          borderRadius: '50%',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHovering ? '50px' : '35px',
          height: isHovering ? '50px' : '35px',
          border: `2px solid ${color}`,
          borderRadius: '50%',
          opacity: 0.5,
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s',
        }}
      />
    </>
  );
}
