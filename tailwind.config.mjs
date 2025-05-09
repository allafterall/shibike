const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"xl": "1280px",
				"2xl": "1280px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["Raleway Variable", "Raleway", "Public Sans Variable", "Public Sans", ...defaultTheme.fontFamily.sans],
				serif: ["Roboto Serif Variable", "Roboto Serif", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				// Shiba Inu Palette
				'shiba-cream': '#FFF9E6',        // For main backgrounds (light, warm off-white)
				'shiba-red': '#D95B43',          // For primary actions, accents (burnt orange/red)
				'shiba-brown-dark': '#5C3A21',   // For main text, dark UI elements (rich, dark brown)
				'shiba-brown-light': '#A67B5B',  // For secondary text, borders (lighter, warm brown)

				// Update existing semantic colors to use the Shiba palette
				primary: {
					DEFAULT: "#D95B43", // Using shiba-red
				},
				background: {
					DEFAULT: "#FFF9E6", // Using shiba-cream
				},
				text: {
					DEFAULT: "#5C3A21", // Using shiba-brown-dark
					muted: "#A67B5B",   // Using shiba-brown-light
					primary: "#D95B43", // Using shiba-red for text on primary elements if needed
				},
				// Your existing accent colors - you might want to theme these too eventually
				"custom-accent": { // Renamed to avoid conflict with HSL accent below
					purple: "#9b80f4",
					pink: "#ffc8bd",
				},
				// These colors below are defined using CSS variables, which is great for theming.
				// You'd update those CSS variables in your global CSS file to match the Shiba theme.
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			lineHeight: {
				loose: "1.4",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
