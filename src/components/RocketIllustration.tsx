export default function RocketIllustration() {
	return (
		<div className="relative w-full h-full min-h-[480px] lg:min-h-full overflow-hidden bg-[#13162b] flex items-center justify-center select-none">
			{/* Background Space Ambient Glow */}
			<div className="absolute inset-0 bg-radial from-[#242b54]/60 via-[#13162b]/90 to-[#0e1022]" />

			{/* Soft nebula / smoke cloud blobs */}
			<div className="absolute top-[20%] left-[-10%] w-72 h-72 rounded-full bg-[#20264d]/40 blur-3xl pointer-events-none" />
			<div className="absolute bottom-[25%] right-[-5%] w-80 h-80 rounded-full bg-[#1b2246]/50 blur-3xl pointer-events-none" />

			{/* SVG Space Scene */}
			<svg
				viewBox="0 0 500 620"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="relative z-10 w-full h-full object-contain pb-6"
				preserveAspectRatio="xMidYMid meet"
			>
				{/* Background Confetti / Geometric Elements */}
				{/* Top-Right Yellow Triangle */}
				<polygon
					points="480,40 505,115 435,90"
					stroke="#e5b84c"
					strokeWidth="3.5"
					strokeLinejoin="round"
					fill="none"
					className="animate-pulse"
					style={{ animationDuration: "4s" }}
				/>

				{/* Top-Center Small Yellow Triangle */}
				<polygon
					points="355,75 368,60 375,80"
					stroke="#e5b84c"
					strokeWidth="2.5"
					strokeLinejoin="round"
					fill="none"
				/>

				{/* Top-Left Cyan Triangle */}
				<polygon
					points="60,135 110,165 75,205"
					stroke="#3fd1c1"
					strokeWidth="3.5"
					strokeLinejoin="round"
					fill="none"
				/>

				{/* Small Cyan Triangle right side */}
				<polygon
					points="415,75 425,65 428,82"
					stroke="#3fd1c1"
					strokeWidth="2"
					strokeLinejoin="round"
					fill="none"
				/>

				{/* Middle-Right Large White/Pale Triangle */}
				<polygon
					points="460,230 485,305 420,290"
					stroke="#d1d7eb"
					strokeWidth="3.5"
					strokeLinejoin="round"
					fill="none"
				/>

				{/* Lower-Right Pink Triangle */}
				<polygon
					points="450,470 495,490 460,535"
					stroke="#eb578a"
					strokeWidth="3.5"
					strokeLinejoin="round"
					fill="none"
				/>

				{/* Left-Middle Dark Slate Triangle */}
				<polygon
					points="175,295 190,345 145,335"
					stroke="#39426f"
					strokeWidth="2.5"
					strokeLinejoin="round"
					fill="none"
				/>

				{/* Lower-Left Cyan Triangle */}
				<polygon
					points="120,445 130,430 138,450"
					stroke="#3fd1c1"
					strokeWidth="2"
					strokeLinejoin="round"
					fill="none"
				/>

				{/* Lower-Left Small Outline Triangle */}
				<polygon
					points="185,420 195,408 200,425"
					stroke="#475283"
					strokeWidth="2"
					strokeLinejoin="round"
					fill="none"
				/>

				{/* Confetti dashes & capsules */}
				{/* Top-Right Pink Dash */}
				<rect
					x="440"
					y="18"
					width="6"
					height="16"
					rx="3"
					transform="rotate(35 440 18)"
					fill="#e8618c"
				/>
				{/* Middle-Left Pink Dash */}
				<rect
					x="80"
					y="275"
					width="5"
					height="18"
					rx="2.5"
					transform="rotate(-40 80 275)"
					fill="#e8618c"
				/>
				{/* Center-Left Cyan Dash */}
				<rect
					x="70"
					y="435"
					width="5"
					height="16"
					rx="2.5"
					transform="rotate(45 70 435)"
					fill="#3fd1c1"
				/>
				{/* Right-Middle Cyan Capsule */}
				<rect
					x="425"
					y="380"
					width="4.5"
					height="14"
					rx="2"
					transform="rotate(-25 425 380)"
					fill="#3fd1c1"
				/>

				{/* Tiny Stars / Dots */}
				<circle cx="340" cy="140" r="2.5" fill="#ffffff" opacity="0.6" />
				<circle cx="150" cy="180" r="2" fill="#ffffff" opacity="0.4" />
				<circle cx="410" cy="170" r="2.5" fill="#ffd166" opacity="0.7" />
				<circle cx="160" cy="90" r="3" fill="#ffffff" opacity="0.5" />
				<circle cx="470" cy="380" r="2" fill="#ffffff" opacity="0.5" />

				{/* Deep Space Background Cloud Silhouettes behind Rocket */}
				<path
					d="M100 500 C140 430, 200 440, 240 480 C270 430, 350 430, 390 490 C430 460, 480 480, 520 540 L520 620 L80 620 Z"
					fill="#1a2040"
					opacity="0.8"
				/>
				<path
					d="M160 520 C200 460, 260 480, 310 510 C360 470, 420 490, 460 550 L460 620 L140 620 Z"
					fill="#232a52"
					opacity="0.6"
				/>

				{/* Rocket Flame Exhaust / Trail */}
				<defs>
					<linearGradient id="rocketTrail" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#ffd875" stopOpacity="0.85" />
						<stop offset="25%" stopColor="#ff7043" stopOpacity="0.6" />
						<stop offset="70%" stopColor="#353e6b" stopOpacity="0.25" />
						<stop offset="100%" stopColor="#1a2040" stopOpacity="0" />
					</linearGradient>
					<linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="0">
						<stop offset="0%" stopColor="#37416e" />
						<stop offset="45%" stopColor="#48558c" />
						<stop offset="85%" stopColor="#3c4779" />
						<stop offset="100%" stopColor="#2c355e" />
					</linearGradient>
					<linearGradient id="rocketWingLeft" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#2e3760" />
						<stop offset="100%" stopColor="#202747" />
					</linearGradient>
					<linearGradient id="rocketWingRight" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#353f6e" />
						<stop offset="100%" stopColor="#252d4f" />
					</linearGradient>
					<linearGradient id="windowGlow" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#d5f1ff" />
						<stop offset="50%" stopColor="#8ecdff" />
						<stop offset="100%" stopColor="#55aaff" />
					</linearGradient>
				</defs>

				{/* Rocket Exhaust Beam / Vapor Column */}
				<path
					d="M260 380 L255 580 C255 600, 290 600, 290 580 L285 380 Z"
					fill="url(#rocketTrail)"
					className="animate-pulse"
					style={{ animationDuration: "1.5s" }}
				/>

				{/* Rocket Thruster Flame (Double Layer) */}
				<g
					className="animate-pulse"
					style={{ transformOrigin: "272px 360px", animationDuration: "0.8s" }}
				>
					{/* Outer Orange Flame */}
					<path
						d="M256 360 C252 395, 260 425, 272 445 C284 425, 292 395, 288 360 Z"
						fill="#ff5c36"
					/>
					{/* Inner Bright Yellow Flame */}
					<path
						d="M262 360 C260 385, 266 405, 272 420 C278 405, 284 385, 282 360 Z"
						fill="#ffe066"
					/>
				</g>

				{/* ROCKET SHIP GROUP */}
				<g
					className="transition-transform duration-700 hover:scale-105"
					style={{ transformOrigin: "272px 280px" }}
				>
					{/* Thruster Nozzle */}
					<path d="M255 352 L289 352 L284 366 L260 366 Z" fill="#222846" />

					{/* Left Wing / Fin */}
					<path
						d="M236 295 C215 315, 195 365, 190 410 C215 410, 238 385, 244 350 Z"
						fill="url(#rocketWingLeft)"
					/>
					{/* Left Wing Shadow / Detail */}
					<path
						d="M210 395 C222 380, 235 365, 240 348 L244 350 C238 385, 215 410, 190 410 C194 402, 202 398, 210 395 Z"
						fill="#1a203a"
						opacity="0.5"
					/>

					{/* Right Wing / Fin */}
					<path
						d="M308 295 C329 315, 349 365, 354 410 C329 410, 306 385, 300 350 Z"
						fill="url(#rocketWingRight)"
					/>
					{/* Right Wing Shadow / Detail */}
					<path
						d="M334 395 C322 380, 309 365, 304 348 L300 350 C306 385, 329 410, 354 410 C350 402, 342 398, 334 395 Z"
						fill="#1a203a"
						opacity="0.4"
					/>

					{/* Center Fuselage / Rocket Body */}
					<path
						d="M272 135 
						   C295 185, 314 260, 314 330 
						   C314 355, 310 358, 230 358 
						   C226 358, 230 355, 230 330 
						   C230 260, 249 185, 272 135 Z"
						fill="url(#rocketBody)"
					/>

					{/* Center Fin / Dorsal Spine Highlight */}
					<path
						d="M270 140 C273 170, 274 310, 274 358 L270 358 C270 310, 269 170, 270 140 Z"
						fill="#2c345d"
						opacity="0.7"
					/>
					<path d="M271 270 L273 270 L273 345 L271 345 Z" fill="#5867a6" opacity="0.5" />

					{/* Circular Cockpit Window */}
					{/* Outer Dark Ring */}
					<circle cx="272" cy="240" r="24" fill="#242b4d" />
					{/* Inner Cyan Porthole */}
					<circle cx="272" cy="240" r="18" fill="url(#windowGlow)" />
					{/* Glass Reflection Highlight */}
					<path
						d="M262 230 C267 225, 275 225, 281 230 C277 232, 267 234, 262 230 Z"
						fill="#ffffff"
						opacity="0.8"
					/>
				</g>
			</svg>

			{/* Bottom Organic Wave Flush to Bottom Edge */}
			<div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none w-full leading-none">
				<svg
					viewBox="0 0 500 80"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-16 sm:h-20 block"
					preserveAspectRatio="none"
				>
					<path
						d="M0 45 
						   C80 15, 140 60, 220 40 
						   C290 20, 330 0, 400 30 
						   C450 50, 480 25, 500 35 
						   L500 80 L0 80 Z"
						fill="#ffffff"
						className="dark:fill-[#181926] transition-colors"
					/>
				</svg>
			</div>
		</div>
	);
}
