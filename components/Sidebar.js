"use client";

import ThemeToggle from "./ThemeToggle";

function Sidebar({ open, setOpen, active, scrollTo, sections }) {
	return (
		<>
			<nav className={`sidebar${open ? "" : " sidebar--closed"}`}>
				<div className="brand">Jagriti<em>.</em>DEV</div>
				<div className="nav">
					{sections.map((s, i) => (
						<button
							key={s.id}
							className={`nav-item${active === s.id ? " nav-item--active" : ""}`}
							onClick={() => scrollTo(i)}
						>
							{s.label}
						</button>
					))}
				</div>
				<div className="sidebar-footer">
					<ThemeToggle />
					<a className="s-link" href="#" title="GitHub">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
					</a>
					<a className="s-link" href="#" title="LinkedIn">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
					</a>
					<a className="s-link" href="#" title="Twitter">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
					</a>
					<a className="s-link" href="#" title="Email">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
					</a>
				</div>
			</nav>

			{/* Toggle button — arrow faces LEFT when open, RIGHT when closed */}
			<button
				className={`sidebar-toggle${open ? "" : " sidebar-toggle--closed"}`}
				onClick={() => setOpen(!open)}
				aria-label={open ? "Close sidebar" : "Open sidebar"}
			>
				{open ? (
					<svg width="10" height="16" viewBox="0 0 10 16" fill="none">
						<path d="M8 2L2 8L8 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				) : (
					<svg width="10" height="16" viewBox="0 0 10 16" fill="none">
						<path d="M2 2L8 8L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				)}
			</button>
		</>
	);
}

export default Sidebar;