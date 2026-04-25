
import React from 'react';
import { Store, X } from 'lucide-react';
import TeamSection from './common/TeamSection';

interface Props {
    onBack: () => void;
}

const TeamPage: React.FC<Props> = ({ onBack }) => {
    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans antialiased">
            {/* Mobile Header */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                                <Store size={24} />
                            </div>
                            <div>
                                <span className="text-xl font-bold tracking-tight text-slate-900">Lasomaa</span>
                                <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500 -mt-1">Our Team</p>
                            </div>
                        </div>

                        <button onClick={onBack} className="p-2 text-slate-600">
                            <X size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="lg:hidden">
                <TeamSection />
            </main>

            {/* Desktop View */}
            <div className="hidden lg:flex items-center justify-center min-h-[60vh] text-center p-12">
                <div className="max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                    <p className="text-slate-600 mb-8">This view is currently optimized for mobile. Please view this page on a mobile device or reduce your window width.</p>
                    <button onClick={onBack} className="text-primary font-bold">Return to Home</button>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
