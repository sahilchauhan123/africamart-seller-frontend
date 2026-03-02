import React, { useState } from 'react';
import { AuthService } from '../services/AuthService';

interface Props {
    onBack: () => void;
    onNext: () => void;
}

const OtpVerification: React.FC<Props> = ({ onBack, onNext }) => {
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleVerify = async () => {
        setError('');
        setIsLoading(true);

        const email = localStorage.getItem('registration_email');
        if (!email) {
            setError('Missing registration details. Please go back and try again.');
            setIsLoading(false);
            return;
        }

        try {
            await AuthService.submitOtp(email, parseInt(otp, 10));

            // Success - Now automatically login
            setIsLoading(true);
            const password = localStorage.getItem('registration_password');

            try {
                if (password) {
                    await AuthService.login(email, password);
                    // Clear sensitive data
                    localStorage.removeItem('registration_password');
                    onNext();
                } else {
                    setError('Verification successful, but automatic login failed. Please login manually.');
                }
            } catch (loginErr: any) {
                setError(loginErr.message || 'Verification successful, but login failed.');
            }
        } catch (err: any) {
            setError(err.message || 'Network error. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Mobile View */}
            <div className="lg:hidden min-h-screen bg-background-light text-gray-900 px-4 py-6 flex flex-col justify-center items-center text-center transition-colors duration-200">
                <main className="w-full max-w-sm flex flex-col items-center">
                    <h1 className="text-2xl font-extrabold text-primary mb-5">Verify Account</h1>

                    <div className="w-full bg-[#F0F4FF] rounded-2xl p-5 space-y-4 mb-6 shadow-sm">
                        <p className="font-medium text-gray-600">Please use the OTP sent to your sms/email to verify.</p>

                        {error && (
                            <div className="bg-red-50 text-red-500 text-xs p-3 rounded-lg border border-red-100 mb-2">
                                {error}
                            </div>
                        )}

                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="0000"
                            className="w-full h-14 bg-white border-2 border-primary/30 rounded-2xl text-center text-2xl font-bold tracking-[0.5em] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                        />

                        <div className="pt-2">
                            <p className="text-gray-500 text-sm">Resend OTP in <span className="font-bold text-primary">0:30</span></p>
                        </div>
                    </div>

                    <button
                        onClick={handleVerify}
                        disabled={isLoading || otp.length < 4}
                        className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-full shadow-lg shadow-primary/20 transform active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Verifying...' : 'Verify & Continue'}
                    </button>
                    <button
                        onClick={onBack}
                        disabled={isLoading}
                        className="w-full mt-4 text-gray-500 font-medium hover:text-primary transition-colors"
                    >
                        Change details
                    </button>
                </main>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex h-screen overflow-hidden bg-white font-sans">
                {/* Left Side: Form */}
                <div className="w-1/2 flex items-center justify-center bg-white">
                    <div className="w-full max-w-sm space-y-6">
                        <div className="text-center mb-6">
                            <h1 className="text-3xl font-black tracking-tight text-primary">
                                Verify Account
                            </h1>
                        </div>

                        <div className="bg-[#F0F4FF] p-6 lg:p-8 rounded-[1.5rem] shadow-sm text-center">
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm font-medium">
                                Please use the OTP sent to your sms/email to verify.
                            </p>
                            {error && (
                                <div className="bg-red-50 text-red-500 text-xs p-3 rounded-lg border border-red-100 mb-4">
                                    {error}
                                </div>
                            )}
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="0000"
                                className="w-full h-14 bg-white border-2 border-primary/30 rounded-2xl text-center text-3xl font-bold tracking-[0.5em] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-900"
                            />
                            <div className="mt-6">
                                <p className="text-gray-500 text-sm">Resend OTP in <span className="font-bold text-primary">0:30</span></p>
                            </div>
                        </div>

                        <div className="space-y-4 text-left">
                            <button
                                onClick={handleVerify}
                                disabled={isLoading || otp.length < 4}
                                className="w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Verifying...' : 'Verify & Continue'}
                            </button>
                            <button
                                onClick={onBack}
                                disabled={isLoading}
                                className="w-full text-center text-gray-400 font-bold uppercase tracking-widest hover:text-primary transition-colors text-[10px]"
                            >
                                Change details
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image/Branding */}
                <div className="w-1/2 relative overflow-hidden bg-gray-100">
                    <img
                        alt="Professional modern office space with clean lines and natural light"
                        className="absolute inset-0 h-full w-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZrEUMmNkxUAsyyh3xBPw8fgR1p7wjW8IqmvESxSVXpAvZSMf_QnQdBkf7MEIxud2f-Te6luY754Qv2scXd_itc13_n30nUlgtsYGKLP21ycdh9sAAlJyGj-NSSTrPeXcpQWsF3s4KLShNKGLzaktCrvJJlmJKDxMVfcaXcIVakErzp63jyQ9TQZw3K-u2vSENwmGiXvMQKb0mhRHWfOLa4CYoEmDuM_ndMLxZCVlWeYgIgE_NkiEL-RW8RSv96Ejfyh2tt6vm9M"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 text-white p-8 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
                        <h2 className="text-2xl font-bold mb-2">Join Our Global Network</h2>
                        <p className="text-white/80">Scale your business with our professional B2B platform tools and dedicated support.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtpVerification;
