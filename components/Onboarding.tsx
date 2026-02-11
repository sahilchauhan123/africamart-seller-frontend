import React, { useState, useEffect } from 'react';
const HERO_IMAGES = [
  'https://img.freepik.com/free-photo/african-business-male-people-shaking-hands_1303-18516.jpg?semt=ais_hybrid&w=740&q=80',
  'https://media.istockphoto.com/id/1364023819/vector/africa-map-with-polygonal-glowing-shapes.jpg?s=612x612&w=0&k=20&c=xo_R85TYnK4LJyw4Ot1N3KMhzL3HgSov31KtEel2OB0=',
  'https://media.istockphoto.com/id/1150882713/photo/workers-checking-the-quality-of-freshly-prepared-snacks-at-a-factory-in-africa.jpg?s=612x612&w=0&k=20&c=aPbFouejciurSTFn7tQ_5WF-vJhtTT1dhsYUIRbYB54='
];
import Drawer from './common/Drawer';
import { View } from '../types';
import {
  Menu,
  LayoutGrid,
  BarChart3,
  UserSearch,
  CheckCircle,
  Store,
  LayoutDashboard,
  TrendingUp,
  Eye,
  Globe,
  ArrowRight,
  Activity,
  Package,
  MessageSquare,
  CreditCard,
  Truck,
  ShieldCheck,
  Megaphone,
  Headphones,
  Lock,
  UserCheck,
  Wallet,
  Network,
  Layers,
  Star,
  ChevronRight,
  ChevronLeft,
  MoveRight,
  CheckCircle2,
  PieChart,
  Target,
  Rocket,
  Languages,
  FileText,
  Activity as ActivityIcon,
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  monitoring: Activity,
  inventory_2: Package,
  chat_bubble_outline: MessageSquare,
  payments: CreditCard,
  local_shipping: Truck,
  verified: ShieldCheck,
  insights: BarChart3,
  campaign: Megaphone,
  support_agent: Headphones,
  security: Lock,
  public: Globe,
  verified_user: ShieldCheck,
  account_balance_wallet: Wallet,
  hub: Network,
  trending_up: TrendingUp,
  layers: Layers,
  star: Star,
  star_outline: Star,
  language: Languages,
  chevron_right: ChevronRight,
  arrow_forward: ArrowRight,
  arrow_right_alt: MoveRight,
  trending_flat: MoveRight,
  storefront: Store,
  description: FileText,
  catalog: LayoutGrid,
  promote: Rocket,
  reviews: Star,
  notifications: Megaphone,
};

const WHY_SECTION_CONTENT = [
  {
    title: "Why AfricaMart exist?",
    paragraph: "We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa's economy through digital and cross boarder connectivity.",
    image: "https://ctgafrica.com/wp-content/uploads/2023/07/diversity-people-international-conference-partnership-scaled-1.jpg"
  },
  {
    title: "Empowering Local Trade",
    paragraph: "Our mission is to break down geographical barriers, allowing local manufacturers and wholesalers to reach continental markets with ease and unparalleled efficiency.",
    image: "https://truckandfreight.co.za/wp-content/uploads/2020/05/Trucks-open-roads.jpg"
  },
  {
    title: "Digital Growth Ecosystem",
    paragraph: "We are committed to building a robust digital infrastructure that fosters transparency, trust and sustainable growth for every business, regardless of size.",
    image: "https://t3.ftcdn.net/jpg/04/83/54/94/360_F_483549452_rTmdAtAIf1128c4H7Rj4L2Bt3ZLLgxZi.jpg"
  }
];

interface Props {
  onNext: () => void;
  onNavigate: (view: View) => void;
}

const LOCAL_TRADE_CONTENT = [
  {
    title: "Empowering Local Trade",
    text: "Breaking down geographical barriers, allowing local manufacturers and wholesalers to reach continental markets.",
    image: "https://clubofmozambique.com/wp-content/uploads/2025/10/Trucks-1.jpg",
    mobileImage: "https://www.worldbank.org/content/dam/photos/780x439/2022/feb-1/Trade-report-africa.jpg"
  },
  {
    title: "Simplifying Market Access",
    text: "We help to improve the visibility of African Businesses and connect them with ready buyers, while buyers gain easy access to reliable suppliers. All through a smoother, more transparent process.",
    image: "https://media.istockphoto.com/id/1150882713/photo/workers-checking-the-quality-of-freshly-prepared-snacks-at-a-factory-in-africa.jpg?s=612x612&w=0&k=20&c=aPbFouejciurSTFn7tQ_5WF-vJhtTT1dhsYUIRbYB54="
  },
  {
    title: "Redefining African Markets",
    text: "Rethinking traditional market structures to make trade more open, efficient and inclusive across Africa.",
    image: "https://blogs.worldbank.org/content/dam/sites/blogs/img/detail/mgr/building-a-connected-africa-blog-1140x500.jpg"
  }
];

const SLIDER_IMAGES = [
  {
    url: 'https://edfimc.eu/wp-content/uploads/2024/08/copyright-EAF.jpeg',
    title: 'Connect with Buyers',
    subtitle: 'Grow your business across Africa'
  },
  {
    url: 'https://img.freepik.com/free-photo/african-business-male-people-shaking-hands_1303-18516.jpg?semt=ais_hybrid&w=740&q=80',
    title: 'Digital Innovation',
    subtitle: 'Reshaping Africa\'s economy'
  },
  {
    url: 'https://media.istockphoto.com/id/1364023819/vector/africa-map-with-polygonal-glowing-shapes.jpg?s=612x612&w=0&k=20&c=xo_R85TYnK4LJyw4Ot1N3KMhzL3HgSov31KtEel2OB0=',
    title: 'Quality Products',
    subtitle: 'Showcase your best to the world'
  }
];

const DASHBOARD_SLIDES = [
  {
    image: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768861863/Screenshot_2026-01-20_035440_iqjstq.png",
    mobileImage: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768866341/x1_hj2hhl.png",
    badges: [
      { icon: 'monitoring', title: 'Real-time Analytics', desc: 'Track your performance', pos: '-top-10 -left-6 lg:-left-12' },
      { icon: 'inventory_2', title: 'Business Overview', desc: 'Leads, Product Views & Inquiries', pos: 'top-1/2 -right-6 lg:-right-16 -translate-y-1/2' },
      { icon: 'chat_bubble_outline', title: 'Seamless Communication', desc: 'Direct buyer messaging', pos: '-bottom-10 -left-6 lg:left-20' }
    ]
  },
  {
    image: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768897684/Screenshot_2026-01-20_041523_ux42m7.png",
    mobileImage: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768867227/x6_tahhpa.png",
    badges: [
      { icon: 'notifications', title: 'Alert', desc: 'Instant Notifications', pos: 'top-4 left-1/2 -translate-x-1/2' },
      { icon: 'chat_bubble_outline', title: 'Email & SMS Notifications', desc: 'Important events', pos: 'bottom-20 -left-10 lg:-left-16' },
      { icon: 'language', title: 'Communication', desc: 'Regular Customer Updates', pos: '-bottom-12 right-10 lg:right-24' }
    ]
  },
  {
    image: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768897852/Screenshot_2026-01-20_140022_hyixhi.png",
    mobileImage: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768867138/x5_z1wti2.png",
    badges: [
      { icon: 'description', title: 'Product Description', desc: 'Improve product visibility', pos: 'top-10 -left-6 lg:-left-12' },
      { icon: 'catalog', title: 'Product Catalog', desc: 'Manage your products', pos: '-top-12 right-12 lg:right-20' },
      { icon: 'promote', title: 'Promote Products', desc: 'Boost your sales', pos: '-bottom-10 left-1/2 -translate-x-1/2' }
    ]
  },
  {
    image: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768897967/Screenshot_2026-01-20_140225_c83ztb.png",
    mobileImage: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768867725/x7_rmjw2w.png",
    badges: [
      { icon: 'security', title: 'Data Protection', desc: 'Your business is safe', pos: '-top-12 -left-8 lg:-left-16' },
      { icon: 'public', title: 'Documentations', desc: 'Compliance & Security', pos: 'top-1/4 -right-8 lg:-right-14' },
      { icon: 'verified_user', title: 'Approval Process', desc: 'Prove Verified Seller', pos: '-bottom-10 left-1/2 -translate-x-1/2' }
    ]
  },
  {
    image: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768898212/Screenshot_2026-01-20_140625_epit2t.png",
    mobileImage: "https://res.cloudinary.com/diqqmnnkv/image/upload/v1768867138/x4_t99svv.png",
    badges: [
      { icon: 'reviews', title: 'Reviews', desc: 'Well structured profile equals more reviews', pos: '-bottom-12 -right-4 lg:right-10' },
      { icon: 'hub', title: 'B2B Networking', desc: 'Connect with partners', pos: 'top-1/2 -left-12 lg:-left-20' },
      { icon: 'trending_up', title: 'Profile Visibility', desc: 'Increase your visibility', pos: '-top-12 right-12 lg:right-20' }
    ]
  }
];

const Onboarding: React.FC<Props> = ({ onNext, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [activeWhySlide, setActiveWhySlide] = useState(0);
  const [activeDashboardSlide, setActiveDashboardSlide] = useState(0);
  const [activeLocalTradeSlide, setActiveLocalTradeSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const benefitsScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollBenefits = (direction: 'left' | 'right') => {
    if (benefitsScrollRef.current) {
      const scrollAmount = benefitsScrollRef.current.clientWidth;
      benefitsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const mobileTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000);

    const heroTimer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => {
      clearInterval(mobileTimer);
      clearInterval(heroTimer);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 antialiased h-full overflow-y-auto no-scrollbar">
      {/* Mobile Layout (Existing) */}
      <div className="lg:hidden flex flex-col">
        {/* Slide Menu Overlay */}
        <Drawer
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          isOnboarding={true}
          onNavigate={onNavigate}
          currentView={View.ONBOARDING}
        />

        {/* Existing Navigation Bar */}
        <nav className="flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm h-16">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition"
          >
            <Menu className="text-gray-800" size={32} />
          </button>
          <button
            onClick={onNext}
            className="bg-primary text-white font-medium px-6 py-2 rounded-full text-sm shadow-md hover:opacity-90 transition"
          >
            Sign up
          </button>
        </nav>

        {/* New Mobile Sections */}
        <main className="pt-16">
          {/* Hero Slider at the Top */}
          <div className="px-5 pt-14 pb-4">
            <div className="relative rounded-3xl overflow-hidden h-80">
              {SLIDER_IMAGES.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Hero Content Section */}
          <section className="px-5 pb-10 pt-4">
            <h1 className="text-4xl font-extrabold leading-[1.1] mb-4 text-slate-900">
              Create an account to sell on <span className="text-primary">AfricaMart</span>
            </h1>
            <p className="text-slate-500 text-base mb-6 leading-relaxed">
              Join us to connect Africa and grow your business.
            </p>
            <button
              onClick={onNext}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl mb-8 active:scale-95 transition-transform"
            >
              Start Selling Now
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://media.istockphoto.com/id/1156428559/photo/female-workers-at-a-factory-production-line.jpg?s=612x612&w=0&k=20&c=OH_ZxwYLf9c8PRkSO6q9uvlY82oevvyTF2Mm5GFKCBE=" alt="Services" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=100&auto=format&fit=crop" alt="Business" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://edfimc.eu/wp-content/uploads/2024/08/copyright-EAF.jpeg" alt="Logistics" />
              </div>
              <p className="text-xs font-medium text-slate-500">Joined by 1,000+ businesses</p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="px-5 py-16 bg-slate-50">
            <div className="text-center mb-8">
              <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">Mission Driven</span>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Why We Do What We Do?</h2>
              <p className="font-serif italic text-lg text-slate-600 leading-relaxed px-4">
                "We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa's economy through digital and cross-border connectivity."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 px-4 border-2 border-primary text-primary font-bold rounded-xl text-sm active:scale-95 transition-transform">Our Story</button>
              <button
                onClick={onNext}
                className="py-3 px-4 bg-primary text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* Local Trade Section */}
          <section
            className="px-5 py-16"
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;
              const touchEndX = e.changedTouches[0].clientX;
              const diff = touchStartX - touchEndX;

              if (Math.abs(diff) > 50) { // minimum swipe distance
                if (diff > 0) {
                  // Swipe left -> Next slide
                  setActiveLocalTradeSlide((prev) => (prev + 1) % LOCAL_TRADE_CONTENT.length);
                } else {
                  // Swipe right -> Prev slide
                  setActiveLocalTradeSlide((prev) => (prev - 1 + LOCAL_TRADE_CONTENT.length) % LOCAL_TRADE_CONTENT.length);
                }
              }
              setTouchStartX(null);
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex justify-between w-24">
                {LOCAL_TRADE_CONTENT.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveLocalTradeSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === activeLocalTradeSlide ? 'w-6 bg-primary' : 'w-2 bg-slate-200'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="transition-all duration-500 transform">
              <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-4 text-slate-900 leading-none min-h-[4rem] animate-in fade-in slide-in-from-right-4 duration-500">
                {LOCAL_TRADE_CONTENT[activeLocalTradeSlide].title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word} {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed text-sm animate-in fade-in slide-in-from-right-8 duration-700">
                {LOCAL_TRADE_CONTENT[activeLocalTradeSlide].text}
              </p>
              <div className="mb-8 rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-56 relative group">
                {LOCAL_TRADE_CONTENT.map((slide, idx) => (
                  <img
                    key={idx}
                    alt={slide.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${idx === activeLocalTradeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
                    src={slide.mobileImage || slide.image}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="px-5 py-16 bg-blue-50">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold mb-3 text-slate-900">Sell with AfricaMart</h2>
              <p className="text-slate-500 text-sm">Elevate your business progress with tools built for sustainable growth.</p>
            </div>
            <div className="space-y-6">
              {[
                { icon: 'star', title: 'Business Visibility', text: 'Position your brand as a leader. Benefit from our high-traffic platform and advanced SEO techniques that ensure your products are always discoverable.' },
                { icon: 'language', title: 'Continental Reach', text: 'Instantly connect with a vast network of B2B and B2C buyers. Transcend borders and tap into the burgeoning Pan-African market landscape.' },
                { icon: 'verified_user', title: 'Verified Seller Status', text: 'Build instant trust with buyers through our verification process. Get the TrustSEAL badge and stand out as a reliable continental trade partner.' },
                { icon: 'layers', title: 'Easy Setup & Toolkit', text: 'Professional listing, pricing, and promotion tools. Launch your continental storefront with intuitive systems.' }
              ].map((benefit, i) => (
                <div key={i} className="group bg-white p-7 rounded-[2.25rem] shadow-sm border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-br-full transform -translate-x-6 -translate-y-6 transition-transform duration-500"></div>
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 bg-primary rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center p-3">
                      {React.createElement(ICON_MAP[benefit.icon] || Globe, { className: "w-8 h-8 text-white" })}
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold mb-3 text-slate-900 leading-tight">{benefit.title}</h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                    {benefit.text}
                  </p>
                  <button
                    onClick={() => {
                      if (benefit.title === 'Business Visibility') {
                        onNavigate(View.BUSINESS_VISIBILITY);
                      } else if (benefit.title === 'Continental Reach') {
                        onNavigate(View.CONTINENTAL_REACH);
                      } else if (benefit.title === 'Easy Setup & Toolkit') {
                        onNavigate(View.EASY_SETUP_TOOLKIT);
                      }
                    }}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide group/link"
                  >
                    Learn More <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Dashboard Section */}
          <section className="px-5 py-16 overflow-hidden bg-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold mb-3 text-slate-900 tracking-tight">Dashboard Overview</h2>
              <p className="text-slate-500 text-sm">Experience a seamless workflow with our state-of-the-art seller dashboard. </p>
            </div>

            <div
              className="relative py-10 flex flex-col items-center"
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStartX === null) return;
                const touchEndX = e.changedTouches[0].clientX;
                const diff = touchStartX - touchEndX;

                if (Math.abs(diff) > 50) { // minimum swipe distance
                  if (diff > 0) {
                    // Swipe left -> Next slide
                    setActiveDashboardSlide((prev) => (prev + 1) % DASHBOARD_SLIDES.length);
                  } else {
                    // Swipe right -> Prev slide
                    setActiveDashboardSlide((prev) => (prev - 1 + DASHBOARD_SLIDES.length) % DASHBOARD_SLIDES.length);
                  }
                }
                setTouchStartX(null);
              }}
            >
              {/* Interaction Dots */}
              <div className="flex justify-center gap-6 mb-8">
                {DASHBOARD_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDashboardSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${idx === activeDashboardSlide ? 'w-8 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-slate-200'}`}
                    aria-label={`Dashboard slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Smartphone Wrapper with External Badges */}
              <div className="relative group/phone">
                {/* Floating Badges Positioned Around the Frame */}
                {activeDashboardSlide !== 1 && DASHBOARD_SLIDES[activeDashboardSlide].badges.map((badge, bIdx) => {
                  // Coordinate mapping for each slide to differentiate positions
                  const positions = [
                    ['top-20 -left-10', 'top-1/2 -right-10 -translate-y-1/2', '-bottom-6 left-1/2 -translate-x-1/2'], // Slide 1
                    ['top-10 -right-8', 'bottom-20 -left-12', 'top-3/4 -right-12'], // Slide 2
                    ['-top-6 left-1/2 -translate-x-1/2', 'top-1/3 -left-14', 'bottom-12 -right-10'], // Slide 3
                    ['top-1/4 -right-14', 'top-2/3 -left-12', '-bottom-10 left-1/4'], // Slide 4
                    ['top-1/2 -left-14 -translate-y-1/2', 'top-8 -right-10', 'bottom-16 -right-12'], // Slide 5
                  ];

                  const mobilePos = positions[activeDashboardSlide % 5][bIdx % 3];

                  // Specific logic for slide content overrides in mobile dashboard
                  const displayBadge = (activeDashboardSlide === 2) ? [
                    { icon: 'chat_bubble_outline', title: 'New Business Inquiry', desc: 'Direct request from buyer' },
                    { icon: 'verified', title: 'Verified Lead Request', desc: 'High intent opportunity' },
                    { icon: 'monitoring', title: 'Lead Track', desc: 'Monitor engagement level' }
                  ][bIdx] : (activeDashboardSlide === 3) ? [
                    { icon: 'chat_bubble_outline', title: 'Instant Chat', desc: 'Direct buyer connection' },
                    { icon: 'hub', title: 'Smart Replies', desc: 'Speed up responses' },
                    { icon: 'verified_user', title: 'Secure Messaging', desc: 'Safe trade discussions' }
                  ][bIdx] : (activeDashboardSlide === 4) ? [
                    { icon: 'notifications', title: 'Instant Alerts', desc: 'Real-time push notifications' },
                    { icon: 'verified', title: 'Smart Notifications', desc: 'Important business updates' },
                    { icon: 'monitoring', title: 'Activity Alerts', desc: 'Track live interactions' }
                  ][bIdx] : badge;

                  return (
                    <div
                      key={activeDashboardSlide + '-' + bIdx}
                      className={`absolute z-30 bg-white shadow-2xl p-3 rounded-2xl border border-slate-50 flex items-center gap-3 scale-90 transition-all duration-700 animate-in fade-in slide-in-from-bottom-5 ${mobilePos}`}
                    >
                      <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                        {React.createElement(ICON_MAP[displayBadge.icon] || Activity, { className: "w-5 h-5 text-primary" })}
                      </div>
                      <div className="whitespace-nowrap">
                        <p className="text-[11px] font-extrabold text-slate-900 tracking-tight">{displayBadge.title}</p>
                        <p className="text-[9px] font-medium text-slate-500">{displayBadge.desc}</p>
                      </div>
                    </div>
                  );
                })}

                {/* Android Smartphone Frame */}
                <div className="relative z-10 w-[260px] h-[520px] rounded-[2.5rem] border-[8px] border-slate-900 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-500">
                  {/* Punch-hole Camera */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-slate-900 rounded-full z-30 border border-slate-800/50 shadow-inner"></div>

                  {/* Side Buttons (Right Side) */}
                  <div className="absolute top-24 -right-2 w-1 h-12 bg-slate-900 rounded-l-md z-10"></div>
                  <div className="absolute top-40 -right-2 w-1 h-8 bg-slate-900 rounded-l-md z-10"></div>

                  {/* Screen Content */}
                  <div className="relative h-full w-full bg-slate-50">
                    {DASHBOARD_SLIDES.map((slide, idx) => (
                      <img
                        key={idx}
                        alt={`Dashboard mobile ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform ${idx === activeDashboardSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                          }`}
                        src={slide.mobileImage || slide.image}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Glossy Background Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-48 bg-primary/5 blur-3xl rounded-full -z-10"></div>
            </div>
          </section>

          {/* Procedures Section */}
          <section className="px-5 py-16 border-t border-slate-100 bg-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-3 text-slate-900">Seller's Procedures</h2>
              <p className="text-slate-500 text-sm">Complete guide to AfricaMart Seller Authentication Process</p>
            </div>
            <div className="space-y-10 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-200"></div>
              {[
                { step: 1, title: 'Orientation', heading: 'Sign up on AfricaMart', text: 'Verify your mobile number and email through OTP to secure your account and initiate the onboarding process.' },
                { step: 2, title: 'Documentation', heading: 'Submit Business Proof', text: 'Provide your PAN, GST, or other official Business Proof for essential identity and tax verification.' },
                { step: 3, title: 'Validation', heading: 'Verification Review', text: 'We check your documents, business name, address and contact validity within a standard 24-48 hour window.' },
                { step: 4, title: 'Approval', heading: 'TrustSEAL Badge', text: 'A third party agency verifies your authenticity, providing a TrustSEAL badge for premium platform visibility.', active: true }
              ].map((proc, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className={`flex-none w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center font-bold ${proc.active ? 'bg-primary text-white' : 'bg-white text-primary'} text-sm z-10 shadow-sm`}>
                    {proc.step}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{proc.title}</span>
                    <h4 className="text-lg font-bold mb-1 text-slate-900">{proc.heading}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{proc.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={onNext}
              className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-2xl shadow-primary/30 mt-16 active:scale-95 transition-transform uppercase tracking-wider text-sm"
            >
              Create Seller Account
            </button>
          </section>

          {/* Mobile Brand Footer */}
          <footer className="bg-[#001B4B] text-white pt-16 pb-12 px-8 mt-12 rounded-t-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-md mx-auto relative z-10">
              {/* Brand Section */}
              <div className="flex flex-col items-center mb-12 text-center">
                <div className="flex items-center gap-2 mb-4">
                  <Store className="w-9 h-9 text-blue-400" />
                  <div className="flex flex-col leading-none">
                    <span className="text-2xl font-black tracking-tighter uppercase">Africa</span>
                    <span className="text-2xl font-light tracking-widest uppercase text-white/70">Mart</span>
                  </div>
                </div>
                <p className="text-sm text-blue-200/60 max-w-xs leading-relaxed font-medium">
                  Empowering African businesses with digital tools for global trade and local excellence.
                </p>
              </div>

              {/* Links Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-16 px-4">
                <div className="space-y-5">
                  <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">B2B Growth</h4>
                  <ul className="space-y-4 text-[13px] font-bold text-white/80">
                    <li><a href="#" className="hover:text-white transition-colors">Sell on AfricaMart</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">RFQ Marketplace</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Bulk Trading</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Seller Success</a></li>
                  </ul>
                </div>
                <div className="space-y-5">
                  <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Startup Info</h4>
                  <ul className="space-y-4 text-[13px] font-bold text-white/80">
                    <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Tech Stack</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Verification</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Scale Program</a></li>
                  </ul>
                </div>
              </div>

              {/* Social & Contact */}
              <div className="flex flex-col items-center border-t border-white/10 pt-12">
                <div className="flex gap-7 mb-10 text-white/40">
                  <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Youtube size={22} /></a>
                  <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Facebook size={22} /></a>
                  <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Instagram size={22} /></a>
                  <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Twitter size={22} /></a>
                  <a href="#" className="hover:text-blue-400 transition-all hover:scale-110"><Linkedin size={22} /></a>
                </div>

                <div className="text-[10px] font-black tracking-widest uppercase text-white/30 flex flex-wrap justify-center gap-x-5 gap-y-3 mb-8">
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                  <a href="#" className="hover:text-white">Terms of Use</a>
                  <a href="#" className="hover:text-white">Return Policy</a>
                </div>

                <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">
                  © 2026 AfricaMart Inc. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Desktop Layout (Premium) */}
      <div className="hidden lg:block bg-white text-slate-900 transition-colors duration-300">
        {/* Desktop Header */}
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center">
              <a className="text-2xl font-extrabold text-primary flex items-center gap-1" href="#">
                <Store className="w-8 h-8 text-primary" />
                AfricaMart
              </a>
            </div>
            <nav className="flex items-center gap-10">
              <button className="text-sm font-bold text-primary uppercase">THE PLATFORM</button>
              <button
                onClick={() => onNavigate(View.ABOUT_US)}
                className="text-sm font-bold text-slate-600 hover:text-primary transition-colors uppercase"
              >
                ABOUT US
              </button>
            </nav>
            <div className="flex items-center gap-6">
              <button onClick={() => onNavigate(View.LOGIN)} className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">Login</button>
              <button
                onClick={onNext}
                className="bg-primary hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all"
              >
                Sign up
              </button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-white dark:bg-slate-900 overflow-hidden py-16 md:py-20 lg:pt-32">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="flex flex-col items-start text-left order-2 lg:order-1">
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
                    Create an account to sell on <span className="text-primary">AfricaMart</span>
                  </h1>
                  <p className="text-xl text-slate-500 mb-10 font-medium max-w-lg">
                    Join us to connect Africa and grow your business.
                  </p>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <button
                      onClick={onNext}
                      className="bg-primary hover:bg-blue-700 text-white font-bold py-5 px-12 rounded-xl transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-500/20 text-lg"
                    >
                      Start Selling Now
                    </button>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex -space-x-3">
                        <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://media.istockphoto.com/id/1156428559/photo/female-workers-at-a-factory-production-line.jpg?s=612x612&w=0&k=20&c=OH_ZxwYLf9c8PRkSO6q9uvlY82oevvyTF2Mm5GFKCBE=" alt="Services" />
                        <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=100&auto=format&fit=crop" alt="Business" />
                        <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://edfimc.eu/wp-content/uploads/2024/08/copyright-EAF.jpeg" alt="Logistics" />
                      </div>
                      <p className="text-sm font-semibold text-slate-600">
                        Joined by 1,000+ businesses
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="rounded-3xl overflow-hidden w-full max-w-lg relative h-[320px] lg:h-[400px]">
                    {HERO_IMAGES.map((img, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <img
                          alt="Two business professionals collaborating with a laptop"
                          className="w-full h-full object-cover"
                          src={img}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section id="mission" className="relative py-16 md:py-20 bg-section-grey border-y border-slate-100 overflow-hidden">
            <div className="absolute inset-0 bg-pattern-africa opacity-[0.03] pointer-events-none"></div>
            <div className="relative max-w-5xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Mission Driven
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                Why We Do What We Do?
              </h2>
              <div className="flex flex-col items-center">
                <div className="relative mb-8">
                  <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-serif  max-w-3xl mx-auto px-6 relative z-10">
                    We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa's economy through digital and cross boarder connectivity.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <button className="group relative inline-flex items-center justify-center border-2 border-primary text-primary hover:text-white font-bold h-14 px-10 rounded-xl transition-all duration-300 overflow-hidden text-base min-w-[200px]">
                    <span className="absolute inset-0 w-full h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    <span className="relative z-10">Our Story</span>
                  </button>
                  <button className="group relative inline-flex items-center justify-center border-2 border-primary text-primary hover:text-white font-bold h-14 px-10 rounded-xl transition-all duration-300 overflow-hidden text-base min-w-[200px]">
                    <span className="absolute inset-0 w-full h-full bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Partner with Us
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Local Trade Section */}
          <section className="py-12 md:py-12 px-4 bg-section-grey dark:bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                <div className="w-full lg:w-[45%] flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-12">
                    {LOCAL_TRADE_CONTENT.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveLocalTradeSlide(idx)}
                        className={`text-lg font-bold tracking-widest transition-all duration-300 ${activeLocalTradeSlide === idx ? 'text-primary scale-110' : 'text-slate-300 hover:text-slate-400'}`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                    <div className="w-24 h-[2px] bg-slate-200 relative overflow-hidden ml-2">
                      <div
                        className="absolute inset-y-0 left-0 bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${((activeLocalTradeSlide + 1) / LOCAL_TRADE_CONTENT.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-12">
                    {LOCAL_TRADE_CONTENT.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveLocalTradeSlide(idx)}
                        className={`group cursor-pointer transition-all duration-500 ${activeLocalTradeSlide === idx ? 'translate-x-4' : 'opacity-40 hover:opacity-100'}`}
                      >
                        <h2 className={`text-4xl font-extrabold mb-4 transition-colors duration-300 ${activeLocalTradeSlide === idx ? 'text-slate-900' : 'text-slate-400'} uppercase tracking-tight`}>
                          {item.title.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                              {word} {i === 0 && <br className="hidden xl:block" />}
                            </React.Fragment>
                          ))}
                        </h2>
                        <div className={`overflow-hidden transition-all duration-500 ${activeLocalTradeSlide === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <p className="text-lg text-slate-600 leading-relaxed max-w-md mb-8">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-[55%]">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-white/50 h-[500px]">
                      {LOCAL_TRADE_CONTENT.map((slide, idx) => (
                        <img
                          key={idx}
                          alt={slide.title}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${idx === activeLocalTradeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
                          src={slide.image}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="relative py-12 md:py-16 overflow-hidden bg-section-grey" id="benefits">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none topo-bg scale-150 transform"></div>
            <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="relative max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">Sell with AfricaMart</h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                  Elevate your business progress with tools built for sustainable growth.
                </p>
              </div>
              <div className="relative group/slider">
                {/* Navigation Buttons */}
                <button
                  onClick={() => scrollBenefits('left')}
                  className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all opacity-0 group-hover/slider:opacity-100 hidden lg:flex"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scrollBenefits('right')}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all opacity-0 group-hover/slider:opacity-100 hidden lg:flex"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div
                  ref={benefitsScrollRef}
                  className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 scroll-smooth"
                >
                  {/* Card 1 - Business Visibility (Swapped) */}
                  <div className="flex-shrink-0 w-full lg:w-[calc(33.333%-21.33px)] snap-start">
                    <div className="group glass-card p-7 rounded-[2.25rem] transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full min-h-[320px] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full transform -translate-x-8 -translate-y-8 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                      <div className="relative z-10 mb-5">
                        <div className="w-14 h-14 bg-primary rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center p-3">
                          <Star className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-[22px] font-extrabold mb-3 text-slate-900 leading-tight">Business Visibility</h3>
                      <p className="text-slate-600 leading-relaxed text-[16px] mb-5 flex-grow">
                        Position your brand as a leader. Benefit from our high-traffic platform and advanced SEO techniques that ensure your products are always discoverable.
                      </p>
                      <button
                        onClick={() => onNavigate(View.BUSINESS_VISIBILITY)}
                        className="inline-flex items-center gap-2 text-primary font-bold tracking-wide group/link"
                      >
                        Learn More
                        <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" />
                      </button>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex-shrink-0 w-full lg:w-[calc(33.333%-21.33px)] snap-start">
                    <div className="group glass-card p-7 rounded-[2.25rem] transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full min-h-[320px] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full transform -translate-x-8 -translate-y-8 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                      <div className="relative z-10 mb-5">
                        <div className="w-14 h-14 bg-primary rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center p-3">
                          <Languages className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-[22px] font-extrabold mb-3 text-slate-900 leading-tight">Continental Reach</h3>
                      <p className="text-slate-600 leading-relaxed text-[16px] mb-5 flex-grow">
                        Instantly connect with a vast network of B2B and B2C buyers. Transcend borders and tap into the burgeoning Pan-African market landscape.
                      </p>
                      <button
                        onClick={() => onNavigate(View.CONTINENTAL_REACH)}
                        className="inline-flex items-center gap-2 text-primary font-bold tracking-wide group/link"
                      >
                        Learn More
                        <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" />
                      </button>
                    </div>
                  </div>

                  {/* Card 3 - Verified Seller Status (Swapped) */}
                  <div className="flex-shrink-0 w-full lg:w-[calc(33.333%-21.33px)] snap-start">
                    <div className="group glass-card p-7 rounded-[2.25rem] transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full min-h-[320px] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full transform -translate-x-8 -translate-y-8 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                      <div className="relative z-10 mb-5">
                        <div className="w-14 h-14 bg-primary rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center p-3">
                          <ShieldCheck className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-[22px] font-extrabold mb-3 text-slate-900 leading-tight">Verified Seller Status</h3>
                      <p className="text-slate-600 leading-relaxed text-[16px] mb-5 flex-grow">
                        Build instant trust with buyers through our verification process. Get the TrustSEAL badge and stand out as a reliable continental trade partner.
                      </p>
                      <a className="inline-flex items-center gap-2 text-primary font-bold tracking-wide group/link" href="#">
                        Learn More
                        <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" />
                      </a>
                    </div>
                  </div>

                  {/* Card 4 - Easy Setup & Toolkit (Swapped) */}
                  <div className="flex-shrink-0 w-full lg:w-[calc(33.333%-21.33px)] snap-start">
                    <div className="group glass-card p-7 rounded-[2.25rem] transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full min-h-[320px] relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full transform -translate-x-8 -translate-y-8 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                      <div className="relative z-10 mb-5">
                        <div className="w-14 h-14 bg-primary rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center p-3">
                          <Layers className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-[22px] font-extrabold mb-3 text-slate-900 leading-tight">Easy Setup & Toolkit</h3>
                      <p className="text-slate-600 leading-relaxed text-[16px] mb-5 flex-grow">
                        Professional listing, pricing and promotion tools. Launch your continental storefront with intuitive systems built for speed and scale.
                      </p>
                      <button
                        onClick={() => onNavigate(View.EASY_SETUP_TOOLKIT)}
                        className="inline-flex items-center gap-2 text-primary font-bold tracking-wide group/link"
                      >
                        Learn More
                        <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard Section */}
          <section id="about-us" className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
                  Dashboard Overview
                </h2>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                  Experience a seamless workflow with our state-of-the-art seller dashboard. Manage products, track leads, and monitor your business growth with ease.
                </p>
              </div>
              <div className="relative max-w-5xl mx-auto">
                <div className="relative z-10 dashboard-glow rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-2xl transition-all duration-500 transform hover:scale-[1.01]">
                  <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    </div>
                    {/* Interaction Dots */}
                    <div className="flex gap-2">
                      {DASHBOARD_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          onMouseEnter={() => setActiveDashboardSlide(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${activeDashboardSlide === idx ? 'bg-primary w-6' : 'bg-slate-300 hover:bg-primary/50'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="relative overflow-hidden h-[500px]">
                    {DASHBOARD_SLIDES.map((slide, idx) => (
                      <img
                        key={idx}
                        alt="AfricaMart Seller Dashboard Interface"
                        className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out ${activeDashboardSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
                        src={slide.image}
                      />
                    ))}
                  </div>
                </div>

                {/* Dynamic Badges */}
                {DASHBOARD_SLIDES[activeDashboardSlide].badges.map((badge, idx) => (
                  <div
                    key={`${activeDashboardSlide}-${idx}`}
                    className={`absolute z-20 flex items-center gap-4 bg-white p-4 rounded-2xl shadow-xl border border-primary/10 max-w-[240px] transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 ${badge.pos}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {React.createElement(ICON_MAP[badge.icon] || Globe, { className: "w-6 h-6 text-primary" })}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{badge.title}</h4>
                      <p className="text-xs text-slate-500">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Procedures Section */}
          <section className="py-16 md:py-24 px-4 bg-white" id="how-it-works">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-slate-900">Seller's Procedures</h2>
                <p className="text-xl text-slate-500">
                  Complete guide to AfricaMart Seller Authentication Process
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-lg bg-white">
                      1
                    </div>
                    <div className="w-px h-full bg-slate-200 mt-4 min-h-[40px]"></div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Orientation</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Sign up on AfricaMart</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Verify your mobile number and email through OTP to secure your account and initiate the onboarding process.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-lg bg-white">
                      2
                    </div>
                    <div className="w-px h-full bg-slate-200 mt-4 min-h-[40px]"></div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Documentation</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Submit Business Proof</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Provide your PAN, GST, or other official Business Proof for essential identity and tax verification.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-lg bg-white">
                      3
                    </div>
                    <div className="w-px h-full bg-slate-200 mt-4 min-h-[40px]"></div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Validation</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Verification Review</h4>
                    <p className="text-slate-600 leading-relaxed">
                      We check your documents, business name, address and contact validity within a standard 24–48 hour window.
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary bg-primary text-white font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Approval</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">TrustSEAL Badge</h4>
                    <p className="text-slate-600 leading-relaxed">
                      A third-party agency verifies your authenticity, providing a <span className="font-bold text-primary">TrustSEAL badge</span> for premium platform visibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex justify-center">
                <button
                  onClick={onNext}
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-5 px-16 rounded-xl transition-all w-full md:w-auto text-lg uppercase tracking-wide shadow-xl shadow-blue-500/20"
                >
                  Create Seller Account
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="pt-16 bg-[#0026C0] text-white">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
            <div className="md:col-span-4 space-y-8">
              <div className="flex items-center space-x-2">
                <Store className="w-8 h-8 text-white" />
                <span className="text-2xl font-bold tracking-tight text-white uppercase">AfricaMart</span>
              </div>
              <p className="text-white/70 max-w-sm leading-relaxed text-lg">
                We exist to challenge African businesses to take initiative in producing, innovating and reshaping Africa's economy through digital and cross boarder connectivity.
              </p>
            </div>
            <div className="md:col-span-2 space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Business</h4>
              <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                <li><a className="hover:text-white transition-colors" href="#">Buy Leads</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Post RFQ</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Verified Suppliers</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Success Stories</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Solutions</h4>
              <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                <li><a className="hover:text-white transition-colors" href="#">Logistics</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Trade Finance</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Escrow Payments</a></li>
                <li><a className="hover:text-white transition-colors" href="#">API & Integration</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Company</h4>
              <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                <li><a className="hover:text-white transition-colors" href="#">Our Mission</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Investors</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Newsroom</a></li>
              </ul>
            </div>
            <div className="md:col-span-2 space-y-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest text-center md:text-left">Resources</h4>
              <ul className="space-y-4 text-white/70 text-sm font-medium text-center md:text-left">
                <li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Compliance</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Trade Guides</a></li>
              </ul>
            </div>
          </div>
          <div className="bg-[#001da1] py-10 px-4 border-t border-white/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white/60 text-sm font-medium">© 2026 AfricaMart Inc. All rights reserved.</p>
              <div className="flex items-center space-x-8">
                <a className="text-white/60 hover:text-white transition-colors" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </a>
                <a className="text-white/60 hover:text-white transition-colors" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a>
                <a className="text-white/60 hover:text-white transition-colors" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Dark Mode Toggle */}
      </div>
    </div >
  );
};

export default Onboarding;

