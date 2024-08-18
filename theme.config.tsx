import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: (
		<>
			<svg
				fill="none"
				width="36px"
				height="36px"
				viewBox="0 0 354 354"
				style={{
					marginRight: "10px",
				}}
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_d_139_3712)">
					<path
						d="M24 88.2048C24 50.5363 54.5363 20 92.2048 20L261.795 20C299.464 20 330 50.5363 330 88.2048V257.795C330 295.464 299.464 326 261.795 326H92.2048C54.5363 326 24 295.464 24 257.795L24 88.2048Z"
						fill="white"
					/>
					<path
						d="M26.5 88.2048C26.5 51.9171 55.9171 22.5 92.2048 22.5L261.795 22.5C298.083 22.5 327.5 51.9171 327.5 88.2048V257.795C327.5 294.083 298.083 323.5 261.795 323.5H92.2048C55.9171 323.5 26.5 294.083 26.5 257.795L26.5 88.2048Z"
						stroke="black"
						strokeWidth="5"
					/>
				</g>
				<g filter="url(#filter1_d_139_3712)">
					<path
						d="M24 88.2048C24 50.5363 54.5363 20 92.2048 20L261.795 20C299.464 20 330 50.5363 330 88.2048V257.795C330 295.464 299.464 326 261.795 326H92.2048C54.5363 326 24 295.464 24 257.795L24 88.2048Z"
						fill="white"
					/>
					<path
						d="M26.5 88.2048C26.5 51.9171 55.9171 22.5 92.2048 22.5L261.795 22.5C298.083 22.5 327.5 51.9171 327.5 88.2048V257.795C327.5 294.083 298.083 323.5 261.795 323.5H92.2048C55.9171 323.5 26.5 294.083 26.5 257.795L26.5 88.2048Z"
						stroke="black"
						strokeWidth="5"
					/>
				</g>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M195.138 177.574C193.365 172.499 196.132 167.028 200.417 163.843C208.483 157.847 213.72 148.176 213.72 137.266C213.72 119.07 199.156 104.32 181.189 104.32C163.223 104.32 148.659 119.07 148.659 137.266C148.659 147.246 153.041 156.19 159.963 162.232C163.679 165.475 165.921 170.552 164.285 175.236L145.598 228.719C143.388 235.044 148.02 241.68 154.645 241.68H203.962C210.586 241.68 215.218 235.044 213.008 228.719L195.138 177.574Z"
					fill="black"
				/>
				<defs>
					<filter
						id="filter0_d_139_3712"
						x="0"
						y="0"
						width="354"
						height="354"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="12" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_139_3712"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_139_3712"
							result="shape"
						/>
					</filter>
					<filter
						id="filter1_d_139_3712"
						x="0"
						y="0"
						width="354"
						height="354"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="12" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_139_3712"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_139_3712"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
			<span
				style={{
					fontSize: "1.5rem",
					fontWeight: "bold",
				}}
			>
				Qoarks Auth
			</span>
		</>
	),
	project: {
		link: "https://github.com/qoarks/qoarks_cli_releases/releases/tag/0.13.0",
	},
	editLink: {
		text: "Edit this page on GitHub →",
	},
	feedback: {
		content: "Question? Give us feedback →",
		labels: "feedback",
	},
	chat: {
		link: "https://github.com/qoarks/qoarks_docs/issues",
	},
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "%s – Qoarks Docs",
			};
		}
	},
	docsRepositoryBase: "https://github.com/qoarks/qoarks_docs",
	darkMode: true,
	primaryHue: 248,
	primarySaturation: 150,
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content="Qoarks documentation" />
			<meta property="og:description" content="Qoarks documentation" />
			<meta name="description" content="Qoarks documentation" />

			<link rel="icon" type="image/x-icon" href="/logo.svg"></link>
			<link rel="icon" href="/logo.svg" type="image/svg+xml" />
			<link
				rel="icon"
				href="/logo.svg"
				type="image/svg+xml"
				media="(prefers-color-scheme: dark)"
			/>
			<link
				rel="icon"
				href="/logo.svg"
				type="image/png"
				media="(prefers-color-scheme: dark)"
			/>
		</>
	),

	banner: {
		dismissible: true,
		key: "0.13-release",
		text: (
			<a href="/release">🎉 Qoarks auth beta is now available. Read more →</a>
		),
	},
	navigation: true,
	sidebar: {
		defaultMenuCollapseLevel: 1,
		toggleButton: true,

		titleComponent({ title, type }) {
			if (type === "separator") {
				return (
					<span
						style={{
							fontWeight: "bold",
						}}
					>
						{title}
					</span>
				);
			}

			return <>{title}</>;
		},
	},
	// faviconGlyph: "📚",
	footer: {
		text: (
			<div>
				<p>© {new Date().getFullYear()} Qoarks Project.</p>
			</div>
		),
	},
};

export default config;
