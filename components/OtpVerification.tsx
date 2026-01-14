
import React, { useState } from 'react';

interface Props {
    onBack: () => void;
    onNext: () => void;
}

const OtpVerification: React.FC<Props> = ({ onBack, onNext }) => {
    const [otp, setOtp] = useState('2026');

    return (
        <div className="min-h-screen bg-background-light text-gray-900 p-6 flex flex-col justify-between items-center text-center transition-colors duration-200">
            <main className="w-full max-w-md mt-20">
                <h1 className="text-3xl font-extrabold text-primary mb-8">Verify Account</h1>
                <p className="font-medium mb-10 text-gray-600">Please use the OTP sent to your sms/email to verify.</p>

                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full h-16 bg-white border-2 border-primary/30 rounded-2xl text-center text-3xl font-bold tracking-[0.5em] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                />

                <div className="mt-8">
                    <p className="text-gray-500 text-sm">Resend OTP in <span className="font-bold text-primary">0:30</span></p>
                </div>
            </main>

            <footer className="w-full max-w-md pb-12">
                <button
                    onClick={onNext}
                    className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-full shadow-lg shadow-primary/20 transform active:scale-95 transition-all duration-200"
                >
                    Verify & Continue
                </button>
                <button
                    onClick={onBack}
                    className="w-full mt-4 text-gray-500 font-medium hover:text-primary transition-colors"
                >
                    Change details
                </button>
            </footer>
        </div>
    );
};

export default OtpVerification;
