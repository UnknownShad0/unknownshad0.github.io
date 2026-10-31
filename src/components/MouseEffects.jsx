import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const CURSOR_RGB = '17, 24, 39';
const MAX_PARTICLES = 70;
const MAX_TRAIL_POINTS = 24;
const POINTER_GLOW_RADIUS = 120;

export default function MouseEffects() {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');

    if (!finePointer.matches || shouldReduceMotion) return undefined;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const particles = [];
    const trail = [];
    const pointer = { x: 0, y: 0, visible: false };
    let animationFrame;
    let lastParticleTime = 0;
    let activeTiltElement = null;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const createParticle = (x, y) => {
      particles.push({
        x,
        y,
        velocityX: (Math.random() - 0.5) * 1.4,
        velocityY: (Math.random() - 0.5) * 1.4 - 0.25,
        radius: Math.random() * 2.5 + 1,
        life: 1,
        decay: Math.random() * 0.025 + 0.025,
      });

      if (particles.length > MAX_PARTICLES) particles.shift();
    };

    const resetTilt = (element) => {
      if (!element) return;

      element.style.transition = 'transform 350ms ease-out';
      element.style.transform = '';
    };

    const updateTilt = (event) => {
      const tiltElement =
        event.target instanceof Element ? event.target.closest('[data-mouse-tilt]') : null;

      if (activeTiltElement && activeTiltElement !== tiltElement) {
        resetTilt(activeTiltElement);
      }

      activeTiltElement = tiltElement;
      if (!activeTiltElement) return;

      const bounds = activeTiltElement.getBoundingClientRect();
      const horizontalPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
      const verticalPosition = (event.clientY - bounds.top) / bounds.height - 0.5;
      const rotateX = verticalPosition * -12;
      const rotateY = horizontalPosition * 12;

      activeTiltElement.style.transition = 'transform 80ms ease-out';
      activeTiltElement.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.visible = true;
      updateTilt(event);

      trail.push({ x: pointer.x, y: pointer.y, life: 1 });
      if (trail.length > MAX_TRAIL_POINTS) trail.shift();

      if (event.timeStamp - lastParticleTime > 18) {
        createParticle(pointer.x, pointer.y);
        createParticle(pointer.x, pointer.y);
        lastParticleTime = event.timeStamp;
      }
    };

    const hidePointer = () => {
      pointer.visible = false;
      resetTilt(activeTiltElement);
      activeTiltElement = null;
    };

    const drawTrail = () => {
      if (trail.length < 2) return;

      context.save();
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.shadowColor = `rgba(${CURSOR_RGB}, 0.8)`;
      context.shadowBlur = 18;

      for (let index = 1; index < trail.length; index += 1) {
        const previousPoint = trail[index - 1];
        const point = trail[index];
        const opacity = Math.min(previousPoint.life, point.life) * 0.5;

        context.beginPath();
        context.moveTo(previousPoint.x, previousPoint.y);
        context.lineTo(point.x, point.y);
        context.strokeStyle = `rgba(${CURSOR_RGB}, ${opacity})`;
        context.lineWidth = Math.max(1, point.life * 5);
        context.stroke();
      }

      context.restore();
    };

    const drawParticles = () => {
      context.save();
      context.globalCompositeOperation = 'lighter';

      particles.forEach((particle) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.life = Math.max(0, particle.life - particle.decay);

        if (particle.life <= 0) return;

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          Math.max(0.1, particle.radius * particle.life),
          0,
          Math.PI * 2
        );
        context.fillStyle = `rgba(${CURSOR_RGB}, ${particle.life * 0.8})`;
        context.shadowColor = `rgba(${CURSOR_RGB}, 0.9)`;
        context.shadowBlur = 14;
        context.fill();
      });

      context.restore();
    };

    const drawPointerGlow = () => {
      if (!pointer.visible) return;

      const gradient = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        POINTER_GLOW_RADIUS
      );
      gradient.addColorStop(0, `rgba(${CURSOR_RGB}, 0.16)`);
      gradient.addColorStop(0.35, `rgba(${CURSOR_RGB}, 0.09)`);
      gradient.addColorStop(0.7, `rgba(${CURSOR_RGB}, 0.035)`);
      gradient.addColorStop(1, `rgba(${CURSOR_RGB}, 0)`);

      context.beginPath();
      context.arc(pointer.x, pointer.y, POINTER_GLOW_RADIUS, 0, Math.PI * 2);
      context.fillStyle = gradient;
      context.fill();
    };

    const animate = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      trail.forEach((point) => {
        point.life = Math.max(0, point.life - 0.045);
      });

      while (trail.length && trail[0].life <= 0) trail.shift();
      for (let index = particles.length - 1; index >= 0; index -= 1) {
        if (particles[index].life <= 0) particles.splice(index, 1);
      }

      drawTrail();
      drawParticles();
      drawPointerGlow();
      animationFrame = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', hidePointer);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('pointerleave', hidePointer);
      if (activeTiltElement) {
        activeTiltElement.style.transition = '';
        activeTiltElement.style.transform = '';
      }
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60]"
    />
  );
}
