import { type ReactNode, useEffect, useRef } from "react";

interface ScrollRevealProps {
	children: ReactNode;
	className?: string;
	delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = containerRef.current;
		if (!element) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			element.classList.add("is-visible");
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) return;
				element.classList.add("is-visible");
				observer.unobserve(element);
			},
			{ threshold: 0.12, rootMargin: "0px 0px -48px" },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={containerRef}
			className={`scroll-reveal ${className}`}
			style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
		>
			{children}
		</div>
	);
}
