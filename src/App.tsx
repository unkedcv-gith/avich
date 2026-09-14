/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkModel from './components/WorkModel';
import Services from './components/Services';
import Process from './components/Process';
import Species from './components/Species';
import Team from './components/Team';
import WhyUs from './components/WhyUs';
import News from './components/News';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import WhatsAppButton from './components/WhatsAppButton';
import AdminModal from './components/AdminModal';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1640] selection:bg-[#6A00C8]/50 selection:text-white scroll-smooth relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkModel />
        <Services />
        <Process />
        <Species />
        <Team />
        <WhyUs />
        <News />
        <Clients />
        <Contact />
      </main>
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
      <MobileBottomNav />
      <WhatsAppButton />
      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
}
