
import React from 'react';
import { View } from '../types';
import {
    ChevronLeft,
    Inbox,
    MessageCircle,
    AlertTriangle,
    ClipboardList,
    UserCircle,
    XCircle,
    CheckCheck,
    Mail,
    BellRing,
    AlertCircle,
    ArrowRight
} from 'lucide-react';

interface NotificationsProps {
    onBack: () => void;
    onNavigate: (view: View) => void;
}

const Notifications: React.FC<NotificationsProps> = ({ onBack, onNavigate }) => {
    const desktopNotifications = [
        {
            id: 1,
            section: 'Today',
            type: 'Inquiry',
            title: 'New Inquiry Received',
            icon: <Mail className="text-primary" size={20} />,
            bg: 'bg-blue-50',
            color: 'text-blue-600',
            time: '15m ago',
            unread: true,
            description: "A buyer from Delhi is interested in 'Industrial Valves'. View details to send a professional quotation and close the deal.",
            link: () => onNavigate(View.INQUIRY_LIST)
        },
        {
            id: 2,
            section: 'Today',
            type: 'Response',
            title: 'Buyer Replied',
            icon: <MessageCircle className="text-emerald-600" size={20} />,
            bg: 'bg-emerald-50',
            color: 'text-emerald-600',
            time: '1h ago',
            unread: true,
            description: "New message regarding 'PVC Pipes'. Quick replies are 3x more likely to convert to an order according to our stats.",
            link: () => onNavigate(View.CHAT)
        },
        {
            id: 3,
            section: 'Yesterday',
            type: 'Alert',
            title: 'Missed Inquiry Alert',
            icon: <BellRing className="text-red-500" size={20} />,
            bg: 'bg-red-50',
            color: 'text-red-500',
            time: '4h ago',
            unread: false,
            description: "You have pending inquiries from yesterday. Remember that faster replies significantly increase your seller rating and trust score.",
            link: () => onNavigate(View.INQUIRY_LIST)
        },
        {
            id: 4,
            section: 'Yesterday',
            type: 'Inquiry',
            title: 'New Buyer Requirement',
            icon: <ClipboardList className="text-blue-500" size={20} />,
            bg: 'bg-blue-50',
            color: 'text-blue-600',
            time: '1d ago',
            unread: false,
            description: "A new requirement for 'Electrical Cables' matches your profile categories. Apply now to get the contact info.",
            link: () => onNavigate(View.INQUIRY_LIST)
        },
        {
            id: 5,
            section: 'Earlier',
            type: 'System',
            title: 'Profile Incomplete',
            icon: <UserCircle className="text-orange-500" size={20} />,
            bg: 'bg-orange-50',
            color: 'text-orange-500',
            time: '2d ago',
            unread: false,
            description: "Complete your business profile including GST and warehouse location to gain buyer trust and get more high-quality inquiries.",
            link: () => onNavigate(View.EDIT_PROFILE)
        },
        {
            id: 6,
            section: 'Earlier',
            type: 'Alert',
            title: 'Product Needs Update',
            icon: <AlertCircle className="text-red-500" size={20} />,
            bg: 'bg-red-50',
            color: 'text-red-500',
            time: '3d ago',
            unread: false,
            description: "Listing for 'Hydraulic Pump' was rejected due to missing technical specifications. Update to resume visibility.",
            link: () => onNavigate(View.PRODUCT_LIST),
            action: 'Update Listing'
        }
    ];

    const sections = ['Today', 'Yesterday', 'Earlier'];
    return (
        <div className="h-[calc(100vh-140px)] w-full flex flex-col items-center justify-center p-10 space-y-4">
            <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center">
                <BellRing size={40} className="text-primary animate-bounce" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Notifications</h2>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Feature Coming Soon</div>
            <p className="text-slate-400 text-sm font-medium text-center max-w-xs leading-relaxed">
                We're building a powerful notification system to keep you updated on lead inquiries and product activities in real-time. Stay tuned!
            </p>
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-400 hover:text-primary transition-all pt-10 group"
            >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Go Back</span>
            </button>
        </div>
    );
};

export default Notifications;
