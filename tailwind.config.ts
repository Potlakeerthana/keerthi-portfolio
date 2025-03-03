
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enchanted theme colors
				enchanted: {
					blush: '#F8D7DA',
					lavender: '#E6E6FA', 
					sage: '#D1E7DD',
					gold: '#FFD700',
					pink: {
						light: '#FFF0F3',
						DEFAULT: '#FFCCD5',
						dark: '#FF8FA3'
					},
					purple: {
						light: '#F3E7FF',
						DEFAULT: '#D8B4FE',
						dark: '#9061F9'
					},
					green: {
						light: '#ECFDF5',
						DEFAULT: '#A7F3D0',
						dark: '#059669'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' }
				},
				appear: {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				glow: {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.3)' }
				},
				rotate: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				wave: {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'50%': { transform: 'translateX(10px) translateY(-10px)' },
					'100%': { transform: 'translateX(0) translateY(0)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				scaleIn: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideRight: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				slideLeft: {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				float: 'float 6s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'float-rapid': 'float 4s ease-in-out infinite',
				pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				wiggle: 'wiggle 1s ease-in-out infinite',
				shimmer: 'shimmer 2s linear infinite',
				appear: 'appear 0.5s ease-out forwards',
				glow: 'glow 2s ease-in-out infinite',
				rotate: 'rotate 10s linear infinite',
				'rotate-slow': 'rotate 20s linear infinite',
				wave: 'wave 4s ease-in-out infinite',
				fadeIn: 'fadeIn 0.5s ease-out forwards',
				scaleIn: 'scaleIn 0.5s ease-out forwards',
				slideUp: 'slideUp 0.5s ease-out forwards',
				slideDown: 'slideDown 0.5s ease-out forwards',
				slideRight: 'slideRight 0.5s ease-out forwards',
				slideLeft: 'slideLeft 0.5s ease-out forwards'
			},
			backgroundImage: {
				'gradient-dawn': 'linear-gradient(to right, #ee9ca7, #ffdde1)',
				'gradient-dream': 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
				'gradient-forest': 'linear-gradient(184.1deg, rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2%)',
				'gradient-magic': 'linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)',
				'gradient-crystal': 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)',
				'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
			},
			boxShadow: {
				'glow-sm': '0 0 10px rgba(255, 255, 255, 0.6)',
				'glow-md': '0 0 20px rgba(255, 255, 255, 0.6)',
				'glow-lg': '0 0 30px rgba(255, 255, 255, 0.6)',
				'glow-pink': '0 0 15px rgba(255, 204, 213, 0.8)',
				'glow-purple': '0 0 15px rgba(216, 180, 254, 0.8)',
				'glow-green': '0 0 15px rgba(167, 243, 208, 0.8)',
				'glow-gold': '0 0 15px rgba(255, 215, 0, 0.6)',
			},
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'body': ['Quicksand', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
