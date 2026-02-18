
import React, { useState } from 'react';
import { Search, Info, Tag, Handshake, ShieldCheck, ChevronDown, Mail, MessageSquare, Store, Menu, X } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    icon: React.ReactNode;
    faqs: FAQ[];
}

const FAQ_DATA: FAQSection[] = [
    {
        title: "General",
        icon: <Info className="text-primary" size={20} />,
        faqs: [
            {
                question: "What is AfricaMart Seller Center?",
                answer: "AfricaMart Seller Center is a comprehensive B2B marketplace platform designed to empower African manufacturers and wholesalers to reach international buyers. We provide the tools for digital storefront management, logistics tracking, and secure payment processing."
            },
            {
                question: "Which countries can join the platform?",
                answer: "Currently, we are onboarding sellers from across the African continent, with a focus on major manufacturing hubs. Buyers can join from anywhere globally to source authentic African products."
            }
        ]
    },
    {
        title: "Selling",
        icon: <Tag className="text-primary" size={20} />,
        faqs: [
            {
                question: "How do I list my products?",
                answer: "Listing products is simple. Once your seller account is verified, you can use our bulk upload feature or manually add items via the dashboard. We recommend high-quality images and detailed specifications for better conversion."
            },
            {
                question: "What are the commission fees?",
                answer: "We operate on a transparent tiered commission structure ranging from 5% to 12%, depending on your product category and sales volume. Subscription plans for premium visibility are also available."
            }
        ]
    },
    {
        title: "Partnerships",
        icon: <Handshake className="text-primary" size={20} />,
        faqs: [
            {
                question: "Can I integrate my logistics partner?",
                answer: "Yes, we offer API integrations for established logistics providers. However, we also provide pre-negotiated shipping rates through our native AfricaMart Logistics network to save you time and money."
            }
        ]
    },
    {
        title: "Security",
        icon: <ShieldCheck className="text-primary" size={20} />,
        faqs: [
            {
                question: "How are payments secured?",
                answer: "All transactions are protected by end-to-end encryption and our AfricaMart Escrow service. Funds are only released to sellers once the buyer confirms receipt of goods in the promised condition."
            }
        ]
    }
];

interface Props {
    onBack: () => void;
    onSignup: () => void;
}

const FAQs: React.FC<Props> = ({ onBack, onSignup }) => {
    const [activeFaq, setActiveFaq] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleAccordion = (question: string) => {
        setActiveFaq(activeFaq === question ? null : question);
    };

    const filteredFaqs = FAQ_DATA.map(section => ({
        ...section,
        faqs: section.faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(section => section.faqs.length > 0);

    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 font-sans antialiased">
            {/* Mobile Header */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                <Store size={24} />
                            </div>
                            <div>
                                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">AfricaMart</span>
                                <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 -mt-1">Seller Center</p>
                            </div>
                        </div>

                        <button onClick={onBack} className="p-2 text-slate-600 dark:text-slate-300">
                            <X size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="py-12 sm:py-20 lg:hidden">
                <div className="max-w-4xl mx-auto px-6 text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-blue-400 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Everything you need to know about selling on AfricaMart.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto px-6 mb-12">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm transition-all outline-none text-sm"
                            placeholder="Search for answers..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* FAQ Sections */}
                <div className="max-w-4xl mx-auto px-6 space-y-12">
                    {filteredFaqs.map((section, idx) => (
                        <section key={idx}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                                    {section.icon}
                                </div>
                                <h2 className="text-xl font-bold">{section.title}</h2>
                            </div>
                            <div className="space-y-2">
                                {section.faqs.map((faq, fIdx) => (
                                    <div key={fIdx} className={`border-b border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-300`}>
                                        <button
                                            className="w-full py-5 flex justify-between items-center text-left hover:text-primary transition-colors gap-4"
                                            onClick={() => toggleAccordion(faq.question)}
                                        >
                                            <span className="text-base font-medium leading-snug">{faq.question}</span>
                                            <ChevronDown
                                                className={`text-slate-400 transition-transform duration-300 shrink-0 ${activeFaq === faq.question ? 'rotate-180' : ''}`}
                                                size={20}
                                            />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === faq.question ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    {filteredFaqs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-slate-500">No matching questions found.</p>
                        </div>
                    )}
                </div>

                {/* Contact Section */}
                <section className="max-w-4xl mx-auto px-6 mt-20">
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 text-center border border-primary/10">
                        <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-sm mx-auto">
                            Our support team is available 24/7 to assist you.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20" href="#">
                                <Mail size={16} />
                                Contact Support
                            </a>
                            <a className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-full text-sm font-bold" href="#">
                                <MessageSquare size={16} />
                                Live Chat
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Desktop Redirect Notice (Optional, but user said mobile only) */}
            <div className="hidden lg:flex items-center justify-center min-h-[60vh] text-center p-12">
                <div className="max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Switch to Mobile</h2>
                    <p className="text-slate-600 mb-8">The FAQ experience is currently optimized for mobile. Please view this page on a mobile device or reduce your window width.</p>
                    <button onClick={onBack} className="text-primary font-bold">Return to Home</button>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
