"use client";

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
					<a className="s-link" href="#" title="GitHub">GH</a>
					<a className="s-link" href="#" title="LinkedIn">LI</a>
					<a className="s-link" href="#" title="Twitter">TW</a>
					<a className="s-link" href="#" title="Email">✉</a>
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