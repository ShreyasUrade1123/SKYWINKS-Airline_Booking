import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        // "Heavy/Premium" Configuration - Tuned for responsiveness
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: true,
            touchMultiplier: 1,
            autoRaf: true,
        });

        lenisRef.current = lenis;
        window.lenis = lenis;

        // GSAP Integration
        gsap.registerPlugin(ScrollTrigger);

        // Update ScrollTrigger on Lenis scroll
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame to GSAP's ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable GSAP's lag smoothing to prevent stuttering
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            window.lenis = null;
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    // Reset scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [location.pathname]);

    return <>{children}</>;
}