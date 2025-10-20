import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t('aboutUs')}</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg">
            The Local Bazar is a platform dedicated to connecting talented artisans from across 
            India with customers who appreciate authentic handmade products. We believe in 
            preserving traditional crafts and supporting local communities.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{t('ourMission')}</h2>
          <p>
            Our mission is to provide a sustainable marketplace for artisans to showcase and 
            sell their handcrafted products. Every purchase on our platform directly supports 
            local craftspeople and their families, helping preserve centuries-old traditions.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{t('ourValues')}</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>Empowering local artisans and preserving traditional craftsmanship</li>
            <li>Promoting sustainable and eco-friendly practices</li>
            <li>Building a community that values authenticity and quality</li>
            <li>Ensuring fair compensation for artisans' work</li>
            <li>Celebrating India's rich cultural heritage</li>
            <li>Creating economic opportunities in rural communities</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{t('whyChooseUs')}</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>100% Authentic Handmade Products</li>
            <li>Direct Support to Local Artisans</li>
            <li>Quality Guaranteed</li>
            <li>Secure Payment Options</li>
            <li>Fast and Reliable Delivery</li>
            <li>Fair Trade Practices</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{t('joinCommunity')}</h2>
          <p>
            Whether you're a customer looking for unique handcrafted items or an artisan 
            wanting to reach a wider audience, The Local Bazar welcomes you. Together, 
            we can preserve traditional crafts and create sustainable livelihoods for 
            talented artisans across India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
