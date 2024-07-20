import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

// Export all modules from 'gsap'
export * from 'gsap'

// Export only the 'DrawSVGPlugin' module from 'gsap/DrawSVGPlugin'
export * from 'gsap/DrawSVGPlugin'

// Import gsap and DrawSVGPlugin from 'gsap'

// Register DrawSVGPlugin with gsap
gsap.registerPlugin(DrawSVGPlugin)
