'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

interface PetalConfig {
    id: number;
    x: number;
    size: number;
    animation: string;
    duration: number;
    delay: number;
    rotation: number;
}

export default function CherryBlossom() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [petals, setPetals] = useState<PetalConfig[]>([]);
    const [isVisible, setIsVisible] = useState(true);

    // Configuration
    const config = {
        petalCount: 40,
        minSize: 20,
        maxSize: 40,
        minDuration: 8,
        maxDuration: 15,
        minRotation: -45,
        maxRotation: 45,
        petalImage: 'https://res.cloudinary.com/doooncpse/image/upload/v1766993642/hoaanhdao_a6gmyk.png',
        branchImage: 'https://res.cloudinary.com/doooncpse/image/upload/v1766993640/canhhoa_nntp9g.png',
        animations: [
            'animate-fall-1',
            'animate-fall-2',
            'animate-fall-3',
            'animate-fall-4',
        ]
    };

    // Generate random number between min and max
    const random = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    };

    // Create a new petal configuration
    const createPetalConfig = useCallback((): PetalConfig => {
        return {
            id: Date.now() + Math.random(),
            x: random(0, 100),
            size: random(config.minSize, config.maxSize),
            animation: config.animations[Math.floor(random(0, config.animations.length))],
            duration: random(config.minDuration, config.maxDuration),
            delay: random(0, 5),
            rotation: random(config.minRotation, config.maxRotation),
        };
    }, [config]);

    // Initialize petals
    const initPetals = useCallback(() => {
        const newPetals: PetalConfig[] = [];
        for (let i = 0; i < config.petalCount; i++) {
            newPetals.push(createPetalConfig());
        }
        setPetals(newPetals);
    }, [config.petalCount, createPetalConfig]);

    // Add new petals periodically
    const addPetal = useCallback(() => {
        setPetals(prev => {
            if (prev.length < config.petalCount * 2) {
                return [...prev, createPetalConfig()];
            }
            return prev;
        });
    }, [config.petalCount, createPetalConfig]);

    // Remove old petals to prevent memory issues
    const cleanupPetals = useCallback(() => {
        setPetals(prev => {
            if (prev.length > config.petalCount * 3) {
                return prev.slice(1);
            }
            return prev;
        });
    }, [config.petalCount]);

    // Handle visibility change for performance optimization
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Initialize and set up intervals
    useEffect(() => {
        initPetals();

        const addInterval = setInterval(addPetal, 300);
        const cleanupInterval = setInterval(cleanupPetals, 1000);

        return () => {
            clearInterval(addInterval);
            clearInterval(cleanupInterval);
        };
    }, [initPetals, addPetal, cleanupPetals]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300">
            {/* Petal container */}
            <div
                ref={containerRef}
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
            >
                {petals.map((petal) => (
                    <div
                        key={petal.id}
                        className={`absolute ${petal.animation}`}
                        style={{
                            left: `${petal.x}%`,
                            width: `${petal.size}px`,
                            height: `${petal.size}px`,
                            animationDuration: `${petal.duration}s`,
                            animationDelay: `${petal.delay}s`,
                            animationPlayState: isVisible ? 'running' : 'paused',
                            transform: `rotate(${petal.rotation}deg)`,
                        }}
                    >
                        <Image
                            src={config.petalImage}
                            alt="Cherry blossom petal"
                            width={petal.size}
                            height={petal.size}
                            className="w-full h-full object-contain opacity-90"
                            unoptimized // For external images
                        />
                    </div>
                ))}
            </div>

            {/* Branch image in bottom right corner */}
            <div className="fixed bottom-0 right-0 z-20 pointer-events-none">
                <Image
                    src={config.branchImage}
                    alt="Cherry blossom branch"
                    width={350}
                    height={350}
                    className="w-auto h-auto max-w-[350px] max-h-[350px] object-contain opacity-90"
                    unoptimized // For external images
                    style={{
                        filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
                    }}
                />
            </div>

            {/* Embedded Tailwind animations */}
            <style jsx global>{`
        @keyframes fall-1 {
          0% {
            transform: translateY(-100px) translateX(0) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
            transform: translateY(50vh) translateX(30px) rotate(180deg) scale(0.9);
          }
          100% {
            transform: translateY(100vh) translateX(60px) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes fall-2 {
          0% {
            transform: translateY(-100px) translateX(0) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
            transform: translateY(50vh) translateX(-40px) rotate(-180deg) scale(0.95);
          }
          100% {
            transform: translateY(100vh) translateX(-80px) rotate(-360deg) scale(0.85);
            opacity: 0;
          }
        }

        @keyframes fall-3 {
          0% {
            transform: translateY(-100px) translateX(0) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
            transform: translateY(50vh) translateX(20px) rotate(90deg) scale(0.85);
          }
          100% {
            transform: translateY(100vh) translateX(40px) rotate(180deg) scale(0.7);
            opacity: 0;
          }
        }

        @keyframes fall-4 {
          0% {
            transform: translateY(-100px) translateX(0) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
            transform: translateY(50vh) translateX(-20px) rotate(-90deg) scale(0.9);
          }
          100% {
            transform: translateY(100vh) translateX(-40px) rotate(-180deg) scale(0.8);
            opacity: 0;
          }
        }

        .animate-fall-1 {
          animation: fall-1 ease-in-out infinite;
        }

        .animate-fall-2 {
          animation: fall-2 ease-in-out infinite;
        }

        .animate-fall-3 {
          animation: fall-3 ease-in-out infinite;
        }

        .animate-fall-4 {
          animation: fall-4 ease-in-out infinite;
        }

        /* Slight sway effect for all petals */
        .animate-fall-1, .animate-fall-2, .animate-fall-3, .animate-fall-4 {
          animation-timing-function: ease-in-out;
          will-change: transform, opacity;
        }

        /* Ensure images don't affect layout */
        img {
          pointer-events: none;
          user-select: none;
          -webkit-user-drag: none;
        }
      `}</style>
        </div>
    );
}