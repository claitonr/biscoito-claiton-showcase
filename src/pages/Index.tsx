import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialIcons from '../components/SocialIcons';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="main-title mb-2">Claiton</h1>
          <SocialIcons />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
