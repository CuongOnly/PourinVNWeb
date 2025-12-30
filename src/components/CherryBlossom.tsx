'use client';

import { useEffect, useRef, useState, useCallback, useMemo, useId } from 'react';
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
    const animationFrameRef = useRef<number | null>(null);
    const lastUpdateRef = useRef<number>(0);
    const componentId = useId();
    
    // Sử dụng useMemo để tạo configuration 1 lần
    const config = useMemo(() => ({
        petalCount: 25, // Giảm số lượng để tối ưu
        minSize: 20,
        maxSize: 40,
        minDuration: 8,
        maxDuration: 15,
        minRotation: -45,
        maxRotation: 45,
        maxTotalPetals: 50, // Giới hạn tổng số cánh hoa
        petalImage: 'https://res.cloudinary.com/doooncpse/image/upload/v1766993642/hoaanhdao_a6gmyk.png',
        branchImage: 'https://res.cloudinary.com/doooncpse/image/upload/v1766993640/canhhoa_nntp9g.png',
        animations: [
            'animate-fall-1',
            'animate-fall-2',
            'animate-fall-3',
            'animate-fall-4',
        ]
    }), []);

    const [petals, setPetals] = useState<PetalConfig[]>(() => {
        // Khởi tạo ban đầu trong useState để tránh useEffect
        const initialPetals: PetalConfig[] = [];
        const random = (min: number, max: number) => Math.random() * (max - min) + min;
        
        for (let i = 0; i < config.petalCount; i++) {
            initialPetals.push({
                id: Date.now() + Math.random(),
                x: random(0, 100),
                size: random(config.minSize, config.maxSize),
                animation: config.animations[Math.floor(random(0, config.animations.length))],
                duration: random(config.minDuration, config.maxDuration),
                delay: random(0, 5),
                rotation: random(config.minRotation, config.maxRotation),
            });
        }
        return initialPetals;
    });

    const [isVisible, setIsVisible] = useState(true);

    // Tối ưu: Sử dụng useMemo cho random function
    const random = useCallback((min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }, []);

    // Tạo petal configuration - tối ưu với useMemo
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
    }, [config, random]);

    // Tối ưu: Batch update cho petals
    const addMultiplePetals = useCallback(() => {
        setPetals(prev => {
            if (prev.length >= config.maxTotalPetals) {
                return prev;
            }
            
            const newPetals = [...prev];
            const petalsToAdd = Math.min(3, config.maxTotalPetals - prev.length);
            
            for (let i = 0; i < petalsToAdd; i++) {
                newPetals.push(createPetalConfig());
            }
            
            return newPetals;
        });
    }, [config.maxTotalPetals, createPetalConfig]);

    // Tối ưu: Cleanup với requestAnimationFrame
    const cleanupPetals = useCallback(() => {
        const now = Date.now();
        
        // Chỉ cleanup mỗi 2 giây để giảm re-render
        if (now - lastUpdateRef.current < 2000) {
            return;
        }
        
        lastUpdateRef.current = now;
        
        setPetals(prev => {
            if (prev.length <= config.petalCount) {
                return prev;
            }
            
            // Giữ lại các petal còn mới (dựa trên ID/thời gian)
            return prev.slice(-config.petalCount);
        });
    }, [config.petalCount]);

    // Tối ưu: Sử dụng Intersection Observer thay cho visibilitychange
    useEffect(() => {
        if (!containerRef.current) return;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );
        
        observer.observe(containerRef.current);
        
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Tối ưu: Sử dụng requestAnimationFrame thay cho setInterval
    useEffect(() => {
        let lastAddTime = 0;
        let lastCleanupTime = 0;
        
        const updatePetals = (timestamp: number) => {
            if (!isVisible) {
                animationFrameRef.current = requestAnimationFrame(updatePetals);
                return;
            }
            
            // Thêm petal mới mỗi 300ms
            if (timestamp - lastAddTime > 300) {
                lastAddTime = timestamp;
                addMultiplePetals();
            }
            
            // Cleanup mỗi 2 giây
            if (timestamp - lastCleanupTime > 2000) {
                lastCleanupTime = timestamp;
                cleanupPetals();
            }
            
            animationFrameRef.current = requestAnimationFrame(updatePetals);
        };
        
        animationFrameRef.current = requestAnimationFrame(updatePetals);
        
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isVisible, addMultiplePetals, cleanupPetals]);

    // Tối ưu: Memoize petal images để tránh re-render không cần thiết
    const petalImages = useMemo(() => {
        return petals.map((petal) => (
            <div
                key={`${componentId}-${petal.id}`}
                className={`absolute ${petal.animation}`}
                style={{
                    left: `${petal.x}%`,
                    width: `${petal.size}px`,
                    height: `${petal.size}px`,
                    animationDuration: `${petal.duration}s`,
                    animationDelay: `${petal.delay}s`,
                    animationPlayState: isVisible ? 'running' : 'paused',
                    transform: `rotate(${petal.rotation}deg)`,
                    willChange: 'transform, opacity',
                }}
            >
                <Image
                    src={config.petalImage}
                    alt=""
                    width={petal.size}
                    height={petal.size}
                    className="w-full h-full object-contain opacity-90 select-none"
                    loading="lazy"
                    unoptimized
                    draggable="false"
                />
            </div>
        ));
    }, [petals, isVisible, config.petalImage, componentId]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300">
            {/* Petal container */}
            <div
                ref={containerRef}
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
                aria-hidden="true"
            >
                {petalImages}
            </div>

            {/* Branch image - sử dụng static image với kích thước cố định */}
            <div className="fixed bottom-0 right-0 z-20 pointer-events-none">
                <Image
                    src={config.branchImage}
                    alt=""
                    width={350}
                    height={350}
                    className="w-auto h-auto max-w-[280px] max-h-[280px] md:max-w-[350px] md:max-h-[350px] object-contain opacity-90 select-none"
                    priority
                    unoptimized
                    draggable="false"
                    style={{
                        filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
                    }}
                />
            </div>

            {/* Embedded animations - tối ưu với CSS variables */}
            <style jsx global>{`
                :root {
                    --petal-animation-timing: ease-in-out;
                }
                
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
                    animation: fall-1 var(--petal-animation-timing) infinite;
                }

                .animate-fall-2 {
                    animation: fall-2 var(--petal-animation-timing) infinite;
                }

                .animate-fall-3 {
                    animation: fall-3 var(--petal-animation-timing) infinite;
                }

                .animate-fall-4 {
                    animation: fall-4 var(--petal-animation-timing) infinite;
                }

                /* Performance optimizations */
                .animate-fall-1,
                .animate-fall-2,
                .animate-fall-3,
                .animate-fall-4 {
                    animation-timing-function: var(--petal-animation-timing);
                    will-change: transform, opacity;
                    backface-visibility: hidden;
                    transform: translateZ(0);
                }

                /* Prevent image interactions */
                [data-cherry-blossom] img {
                    pointer-events: none !important;
                    user-select: none !important;
                    -webkit-user-drag: none !important;
                    -webkit-touch-callout: none !important;
                }
            `}</style>
        </div>
    );
}