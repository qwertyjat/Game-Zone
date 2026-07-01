/* --- Core Variable Ecosystem & Structural Resets --- */
:root {
    --bg-primary: #0a0a0c;
    --bg-secondary: #121216;
    --bg-glass: rgba(18, 18, 22, 0.65);
    --border-glass: rgba(255, 255, 255, 0.06);
    --neon-blue: #00f0ff;
    --neon-purple: #9d4edd;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b8;
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Inter', sans-serif;
    --transition-smooth: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-body);
    overflow-x: hidden;
    line-height: 1.6;
}

/* --- Layout & Typography Standards --- */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}
.max-width-md { max-width: 800px; }

.section { position: relative; }
.section-padding { padding: 100px 0; }
.alt-bg { background-color: var(--bg-secondary); }

h1, h2, h3, h4 {
    font-family: var(--font-heading);
    font-weight: 700;
    letter-spacing: 0.5px;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-weight: 900;
}
.section-title.left-align { text-align: left; }
.section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    text-align: center;
    max-width: 600px;
    margin: 0 auto 60px auto;
}

/* --- Utility Color Text Modifiers --- */
.neon-text { color: var(--neon-blue); text-shadow: 0 0 10px rgba(0,240,255,0.5); }
.neon-blue { color: var(--neon-blue); }
.neon-purple { color: var(--neon-purple); text-shadow: 0 0 10px rgba(157,78,221,0.5); }

/* --- Complex Layout Grids --- */
.grid {
    display: grid;
    gap: 32px;
}
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.grid-4 { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }

/* --- Premium Buttons Framework --- */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 28px;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
    transition: var(--transition-smooth);
    border: none;
}
.btn-primary {
    background: linear-gradient(135deg, var(--neon-purple), #7b2cbf);
    color: var(--text-primary);
    box-shadow: 0 4px 20px rgba(157, 78, 221, 0.4);
}
.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(157, 78, 221, 0.7);
}
.btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--text-primary);
}
.btn-secondary:hover {
    background: var(--text-primary);
    color: var(--bg-primary);
    transform: translateY(-3px);
}
.btn-secondary-neon {
    background: transparent;
    color: var(--neon-blue);
    border: 2px solid var(--neon-blue);
    box-shadow: inset 0 0 8px rgba(0,240,255,0.1);
}
.btn-secondary-neon:hover {
    background: var(--neon-blue);
    color: var(--bg-primary);
    box-shadow: 0 0 20px rgba(0,240,255,0.5);
    transform: translateY(-3px);
}
.btn-nav-glow {
    padding: 8px 20px;
    font-size: 0.85rem;
    background: transparent;
    border: 1px solid var(--neon-blue);
    color: var(--neon-blue);
    box-shadow: 0 0 10px rgba(0,240,255,0.2);
}
.btn-nav-glow:hover {
    background: var(--neon-blue);
    color: var(--bg-primary);
    box-shadow: 0 0 20px rgba(0,240,255,0.6);
}
.full-width { width: 100%; }
.center-text { text-align: center; }

/* --- Preloader Overlay System --- */
.preloader {
    position: fixed;
    top:0; left:0; width:100vw; height:100vh;
    background: var(--bg-primary);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease;
}
.loader { text-align: center; }
.loader-text {
    font-family: var(--font-heading);
    letter-spacing: 4px;
    font-size: 1.2rem;
    color: var(--neon-blue);
    display: block;
    margin-bottom: 10px;
    animation: pulse 1.5s infinite alternate;
}
.loader-bar {
    width: 140px; height: 3px;
    background: rgba(255,255,255,0.1);
    position: relative; overflow: hidden;
    border-radius: 2px;
}
.loader-bar::after {
    content: ''; position: absolute;
    top:0; left: -50%; width: 50%; height: 100%;
    background: var(--neon-purple);
    animation: loadingSlide 1.2s infinite linear;
}

@keyframes pulse { from { opacity: 0.4; } to { opacity: 1; } }
@keyframes loadingSlide { from { left: -50%; } to { left: 100%; } }

/* --- Floating Utilities Framework --- */
.scroll-top {
    position: fixed; bottom: 30px; left: 30px;
    width: 50px; height: 50px; border-radius: 50%;
    background: var(--bg-glass); border: 1px solid var(--neon-blue);
    color: var(--neon-blue); z-index: 999;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; opacity: 0; visibility: hidden;
    transition: var(--transition-smooth);
}
.scroll-top.show { opacity: 1; visibility: visible; }
.scroll-top:hover { box-shadow: 0 0 15px var(--neon-blue); transform: translateY(-3px); }

.floating-whatsapp {
    position: fixed; bottom: 30px; right: 30px;
    width: 60px; height: 60px; border-radius: 50%;
    background: #25d366; color: white; z-index: 999;
    display: flex; align-items: center; justify-content: center;
    font-size: 30px; text-decoration: none;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    transition: var(--transition-smooth);
}
.floating-whatsapp:hover { transform: scale(1.1) rotate(10deg); box-shadow: 0 6px 20px rgba(37, 211, 102, 0.7); }

/* --- Sticky Modern Navigation Bar --- */
.navbar {
    position: fixed; top: 0; left: 0; width: 100%; z-index: 900;
    background: rgba(10, 10, 12, 0.8);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-glass);
    transition: var(--transition-smooth);
}
.navbar.scrolled { padding: 10px 0; background: rgba(10, 10, 12, 0.95); }
.nav-container {
    display: flex; justify-content: space-between; align-items: center;
    height: 80px; max-width: 1200px; margin: 0 auto; padding: 0 24px;
}
.logo {
    text-decoration: none; color: var(--text-primary);
    font-size: 1.5rem; font-family: var(--font-heading); font-weight: 900;
}
.nav-menu { display: flex; align-items: center; list-style: none; gap: 28px; }
.nav-links {
    text-decoration: none; color: var(--text-secondary);
    font-family: var(--font-heading); font-weight: 500; font-size: 0.95rem;
    transition: var(--transition-smooth); position: relative;
    padding: 8px 0;
}
.nav-links:hover, .nav-links.active { color: var(--text-primary); }
.nav-links::after {
    content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px;
    background: var(--neon-blue); transition: var(--transition-smooth);
}
.nav-links:hover::after, .nav-links.active::after { width: 100%; }
.menu-toggle { display: none; cursor: pointer; }
.menu-toggle .bar {
    display: block; width: 25px; height: 3px; margin: 5px auto;
    background-color: var(--text-primary); transition: all 0.3s ease;
}

/* --- Immersive Hero Section Ecosystem --- */
.hero-section {
    height: 100vh; min-height: 700px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; position: relative; padding-top: 80px;
    background: radial-gradient(circle at center, #1b1235 0%, var(--bg-primary) 70%);
}
.hero-overlay {
    position: absolute; top:0; left:0; width:100%; height:100%;
    background: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200') center/cover no-repeat;
    opacity: 0.08; mix-blend-mode: overlay; pointer-events: none;
}
.hero-content { z-index: 10; max-width: 800px; padding: 0 20px; margin-bottom: 40px;}
.hero-title { font-size: 4.5rem; font-weight: 900; text-transform: uppercase; line-height: 1.1; margin-bottom: 16px; }
.hero-subtitle { font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 40px; font-weight: 400; letter-spacing: 1px;}
.hero-buttons { display: flex; gap: 20px; justify-content: center; }

/* --- Optimized Animated Stats Counters --- */
.counters-container {
    display: flex; gap: 60px; justify-content: center; z-index: 10;
    background: var(--bg-glass); border: 1px solid var(--border-glass);
    padding: 20px 60px; border-radius: 16px; backdrop-filter: blur(10px);
}
.counter-box { text-align: center; font-family: var(--font-heading); }
.counter-box span { font-size: 2.2rem; font-weight: 800; color: var(--neon-blue); }
.counter-box p { font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; margin-top: 4px;}

/* --- Glassmorphic UI Card System --- */
.glass-card {
    background: var(--bg-glass);
    border: 1px solid var(--border-glass);
    border-radius: 16px;
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    transition: var(--transition-smooth);
}

/* --- Interactive Games Section Grid --- */
.game-card {
    overflow: hidden; display: flex; flex-direction: column; height: 100%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
.game-img-wrapper {
    position: relative; width: 100%; height: 180px; background: #18181c;
    display: flex; align-items: center; justify-content: center; overflow: hidden;
}
.game-img-wrapper i { font-size: 4rem; color: rgba(255,255,255,0.05); transition: var(--transition-smooth); }
.game-card:hover .game-img-wrapper i { transform: scale(1.1); color: rgba(0,240,255,0.1); }
.game-platform {
    position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.75);
    padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;
    color: var(--neon-blue); border: 1px solid rgba(0,240,255,0.3);
}
.game-details { padding: 24px; display: flex; flex-direction: column; flex-grow: 1; }
.game-details h3 { font-size: 1.25rem; margin-bottom: 8px; }
.game-details p { font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 20px; flex-grow: 1; }
.game-card:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 240, 255, 0.4);
    box-shadow: 0 12px 30px rgba(0, 240, 255, 0.15);
}

/* --- Luxury Tier Pricing Matrix --- */
.pricing-card {
    padding: 40px 30px; text-align: center; display: flex; flex-direction: column;
}
.pricing-icon { font-size: 2.5rem; color: var(--neon-blue); margin-bottom: 16px; }
.pricing-card h3 { font-size: 1.5rem; margin-bottom: 20px; }
.price { font-size: 3rem; font-weight: 800; font-family: var(--font-heading); margin-bottom: 24px; line-height: 1; }
.per-hour { font-size: 1rem; color: var(--text-secondary); font-weight: 400; }
.pricing-features { list-style: none; margin-bottom: 36px; text-align: left; display: inline-block; margin-left: auto; margin-right: auto;}
.pricing-features li { margin-bottom: 12px; font-size: 0.95rem; color: var(--text-secondary); }
.pricing-features i { color: var(--neon-blue); margin-right: 10px; }
.card-btn { margin-top: auto; }

.premium-border { border: 1px solid var(--neon-purple); box-shadow: 0 0 25px rgba(157,78,221,0.15); }
.pricing-card:hover { transform: scale(1.03); }
.premium-border:hover { box-shadow: 0 0 35px rgba(157,78,221,0.35); border-color: var(--neon-purple); }

/* --- High-End Cinematic Interactive Gallery --- */
.gallery-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;
}
.gallery-item {
    position: relative; height: 240px; border-radius: 12px; overflow: hidden;
    cursor: pointer; border: 1px solid var(--border-glass);
}
.gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition-smooth); }
.gallery-overlay {
    position: absolute; top:0; left:0; width:100%; height:100%;
    background: linear-gradient(to top, rgba(10,10,12,0.9), transparent);
    display: flex; align-items: flex-end; padding: 20px; opacity: 0; transition: var(--transition-smooth);
}
.gallery-overlay span { font-family: var(--font-heading); font-weight: 600; font-size: 1.1rem; transform: translateY(10px); transition: var(--transition-smooth); }
.gallery-item:hover img { transform: scale(1.1); filter: brightness(0.8); }
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-item:hover .gallery-overlay span { transform: translateY(0); }

/* --- Fully Fluid Animated Form Engine --- */
.booking-wrapper { display: grid; grid-template-columns: 1fr 1.2fr; gap: 40px; padding: 50px; align-items: center;}
.booking-info h2 { font-size: 2.5rem; margin-bottom: 20px; }
.booking-perks { list-style: none; margin-top: 30px; }
.booking-perks li { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; font-weight: 500; }
.booking-perks i { font-size: 1.2rem; }

.booking-form { display: flex; flex-direction: column; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
label { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-secondary); font-weight: 600;}
input, select, textarea {
    background: rgba(255,255,255,0.04); border: 1px solid var(--border-glass);
    padding: 14px 18px; border-radius: 8px; color: var(--text-primary);
    font-family: var(--font-body); font-size: 0.95rem; transition: var(--transition-smooth);
}
input:focus, select:focus, textarea:focus {
    outline: none; border-color: var(--neon-blue); background: rgba(255,255,255,0.07);
    box-shadow: 0 0 12px rgba(0,240,255,0.2);
}
select option { background: var(--bg-secondary); color: var(--text-primary); }

/* --- FAQ Structured Accordion Ecosystem --- */
.accordion { display: flex; flex-direction: column; gap: 16px; width: 100%; margin: 0 auto;}
.accordion-item { background: var(--bg-glass); border: 1px solid var(--border-glass); border-radius: 8px; overflow: hidden; }
.accordion-header {
    width: 100%; padding: 20px 24px; background: transparent; border: none;
    color: var(--text-primary); font-family: var(--font-heading); font-weight: 600;
    font-size: 1.05rem; text-align: left; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center; transition: var(--transition-smooth);
}
.accordion-header:hover { background: rgba(255,255,255,0.02); }
.accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; background: rgba(0,0,0,0.15); }
.accordion-content p { padding: 20px 24px; color: var(--text-secondary); font-size: 0.95rem; }
.accordion-item.active .accordion-content { max-height: 200px; }
.accordion-item.active .accordion-header i { transform: rotate(45deg); color: var(--neon-purple); }

/* --- Structural Contact Dashboard Grid --- */
.contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 40px; margin-top: 20px;}
.contact-info-cards { display: flex; flex-direction: column; gap: 16px; }
.info-card { padding: 24px; display: flex; align-items: center; gap: 20px; }
.card-icon { font-size: 1.8rem; }
.info-card h3 { font-size: 1.1rem; margin-bottom: 2px; }
.info-card p { color: var(--text-secondary); font-size: 0.95rem; }
.map-container { border-radius: 16px; overflow: hidden; height: 100%; min-height: 320px; border: 1px solid var(--border-glass); filter: grayscale(1) invert(0.92) contrast(1.08); }

/* --- Testimonials Components System --- */
.testimonials-slider { max-width: 700px; margin: 0 auto; text-align: center; }
.testimonial-container { position: relative; min-height: 140px; }
.testimonial-card { position: absolute; top:0; left:0; width:100%; opacity: 0; visibility: hidden; transition: opacity 0.5s ease; }
.testimonial-card.active { position: relative; opacity: 1; visibility: visible; }
.testimonial-text { font-size: 1.25rem; font-style: italic; color: var(--text-primary); margin-bottom: 16px; line-height: 1.8;}
.gamer-tag { color: var(--neon-purple); font-family: var(--font-heading); font-size: 1rem; }
.slider-dots { display: flex; justify-content: center; gap: 10px; margin-top: 24px; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.2); cursor: pointer; transition: var(--transition-smooth); }
.dot.active { background: var(--neon-purple); transform: scale(1.2); }

/* --- Footer Infrastructure Ecosystem --- */
.footer { background: #060608; border-top: 1px solid var(--border-glass); padding: 80px 0 30px 0; }
.footer-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 40px; margin-bottom: 60px; }
.footer-brand h3 { font-size: 1.5rem; margin-bottom: 16px; }
.footer-brand p { color: var(--text-secondary); font-size: 0.95rem; max-width: 320px; }
.footer-links h4, .footer-socials h4 { font-size: 1.1rem; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px;}
.footer-links ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.footer-links a { text-decoration: none; color: var(--text-secondary); transition: var(--transition-smooth); font-size: 0.95rem;}
.footer-links a:hover { color: var(--neon-blue); padding-left: 4px; }
.social-icons { display: flex; gap: 16px; }
.social-icons a {
    width: 40px; height: 40px; border-radius: 8px; background: rgba(255,255,255,0.03);
    border: 1px solid var(--border-glass); color: var(--text-primary);
    display: flex; align-items: center; justify-content: center; text-decoration: none;
    transition: var(--transition-smooth);
}
.social-icons a:hover { border-color: var(--neon-purple); color: var(--neon-purple); transform: translateY(-3px); }
.footer-bottom { border-top: 1px solid var(--border-glass); padding-top: 30px; display: flex; justify-content: space-between; color: var(--text-secondary); font-size: 0.88rem; }

/* --- Robust Modern Responsive Framework Breakpoints --- */
@media (max-width: 992px) {
    .hero-title { font-size: 3.5rem; }
    .booking-wrapper, .contact-grid { grid-template-columns: 1fr; gap: 40px; }
    .booking-wrapper { padding: 32px; }
    .footer-top { grid-template-columns: 1fr; gap: 32px; }
}

@media (max-width: 768px) {
    .section-padding { padding: 60px 0; }
    .hero-title { font-size: 2.8rem; }
    .hero-subtitle { font-size: 1.1rem; }
    .counters-container { flex-direction: column; gap: 24px; padding: 24px; }
    
    .menu-toggle { display: block; z-index: 999; }
    .menu-toggle.is-active .bar:nth-child(2) { opacity: 0; }
    .menu-toggle.is-active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .menu-toggle.is-active .bar:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
    
    .nav-menu {
        position: fixed; top: -100%; left: 0; flex-direction: column;
        background: rgba(10, 10, 12, 0.98); backdrop-filter: blur(20px);
        width: 100%; height: 100vh; padding-top: 100px;
        transition: all 0.5s ease-out; gap: 24px;
    }
    .nav-menu.active { top: 0; }
    .form-row { grid-template-columns: 1fr; }
    .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
}
