"use client";
import { useRef } from "react";

function ScrollArrow({ index, sectionRefs, total }) {
	const timerRef = useRef(null);

	const handleClick = () => {
		if (timerRef.current !== null) {
			// Second click within 280ms = double-click → scroll UP
			clearTimeout(timerRef.current);
			timerRef.current = null;
			const prev = index > 0 ? index - 1 : 0;
			sectionRefs.current[prev]?.scrollIntoView({ behavior: "smooth" });
		} else {
			timerRef.current = setTimeout(() => {
				timerRef.current = null;
				// Single click → scroll DOWN (or back to top if last section)
				const next = index < total - 1 ? index + 1 : 0;
				sectionRefs.current[next]?.scrollIntoView({ behavior: "smooth" });
			}, 280);
		}
	};

	const isLast = index === total - 1;

	return (
		<div className="scroll-arrow-wrap">
			<div className="scroll-tooltip">
				{isLast ? "Double-click to scroll up ↑ · Click to go to top ↑" : "Double-click to scroll up ↑"}
			</div>
			<button className="scroll-arrow-btn" onClick={handleClick} aria-label="Scroll">
				{isLast ? (
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
				) : (
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
				)}
			</button>
		</div>
	);
}

export default ScrollArrow;