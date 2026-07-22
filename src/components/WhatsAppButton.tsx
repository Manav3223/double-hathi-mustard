import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumbers = [
    { number: "917976708372", label: "Distributor Enquiries", display: "+91 79767 08372" },
    { number: "919414376910", label: "Bulk Order & Trade", display: "+91 94143 76910" },
  ];

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message = encodeURIComponent("Hello! I'm interested in a distribution/trade partnership with Double Hathi Kachi Ghani Mustard Oil. Please share details.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-background rounded-2xl shadow-premium border border-border p-4 mb-2 min-w-[240px] animate-fade-in">
          <p className="text-sm font-medium text-foreground mb-3">Contact us on WhatsApp</p>
          <div className="space-y-2">
            {phoneNumbers.map((phone) => (
              <button
                key={phone.number}
                onClick={() => handleWhatsAppClick(phone.number)}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors text-left group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground group-hover:text-[#25D366] transition-colors">
                    {phone.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{phone.display}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? "bg-foreground text-background" 
            : "bg-[#25D366] text-white"
        }`}
        aria-label="WhatsApp Contact"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
