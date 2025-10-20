import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About us',
    location: 'Location',
    contacts: 'Contacts',
    search: 'Search products...',
    cart: 'Cart',
    shopNow: 'Shop Now',
    becomeSeller: 'Become a Seller',
    discoverAuthentic: 'Discover Authentic',
    handmadeTreasures: 'Handmade Treasures',
    heroDesc: 'Support local artisans and explore unique handcrafted products from across India. Every purchase tells a story of tradition and craftsmanship.',
    handcraftedProducts: 'Handcrafted Products',
    discoverUnique: 'Discover unique items from talented local artisans',
    allLocations: 'All Locations',
    viewDetails: 'View Details',
    backToProducts: 'Back to Products',
    description: 'Description',
    artisan: 'Artisan',
    madeIn: 'Made in',
    videoSection: 'Making Process Video',
    comingSoon: 'Coming Soon',
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    aboutUs: 'About The Local Bazar',
    ourMission: 'Our Mission',
    ourValues: 'Our Values',
    whyChooseUs: 'Why Choose Us?',
    joinCommunity: 'Join Our Community',
    artisanLocations: 'Artisan Locations',
    findArtisans: 'Find Artisans Near You',
    getMyLocation: 'Get My Location',
    activeLocations: 'Active Locations',
    viewProducts: 'View Products',
    checkout: 'Checkout',
    paymentMethod: 'Payment Method',
    card: 'Card',
    upi: 'UPI',
    cod: 'Cash on Delivery',
    placeOrder: 'Place Order',
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    location: 'स्थान',
    contacts: 'संपर्क',
    search: 'उत्पाद खोजें...',
    cart: 'कार्ट',
    shopNow: 'अभी खरीदें',
    becomeSeller: 'विक्रेता बनें',
    discoverAuthentic: 'खोजें प्रामाणिक',
    handmadeTreasures: 'हस्तनिर्मित खजाने',
    heroDesc: 'स्थानीय कारीगरों का समर्थन करें और भारत भर से अनूठे हस्तनिर्मित उत्पादों का अन्वेषण करें। हर खरीद परंपरा और शिल्प कौशल की एक कहानी बताती है।',
    handcraftedProducts: 'हस्तनिर्मित उत्पाद',
    discoverUnique: 'प्रतिभाशाली स्थानीय कारीगरों से अनूठी वस्तुओं की खोज करें',
    allLocations: 'सभी स्थान',
    viewDetails: 'विवरण देखें',
    backToProducts: 'उत्पादों पर वापस जाएं',
    description: 'विवरण',
    artisan: 'कारीगर',
    madeIn: 'निर्माण स्थान',
    videoSection: 'निर्माण प्रक्रिया वीडियो',
    comingSoon: 'जल्द आ रहा है',
    addToCart: 'कार्ट में जोड़ें',
    buyNow: 'अभी खरीदें',
    aboutUs: 'द लोकल बाज़ार के बारे में',
    ourMission: 'हमारा मिशन',
    ourValues: 'हमारे मूल्य',
    whyChooseUs: 'हमें क्यों चुनें?',
    joinCommunity: 'हमारे समुदाय में शामिल हों',
    artisanLocations: 'कारीगर स्थान',
    findArtisans: 'अपने पास कारीगर खोजें',
    getMyLocation: 'मेरा स्थान प्राप्त करें',
    activeLocations: 'सक्रिय स्थान',
    viewProducts: 'उत्पाद देखें',
    checkout: 'चेकआउट',
    paymentMethod: 'भुगतान विधि',
    card: 'कार्ड',
    upi: 'यूपीआई',
    cod: 'कैश ऑन डिलीवरी',
    placeOrder: 'ऑर्डर दें',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
