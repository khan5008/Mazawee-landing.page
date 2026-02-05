import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AdminDashboard from '@/components/AdminDashboard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <AdminDashboard />
      <Footer />
    </div>
  );
}