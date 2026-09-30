import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchDrawer } from './components/SearchDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ThemeSettingsDrawer } from './components/ThemeSettingsDrawer';
import { ToastContainer } from './components/ToastContainer';
import { HomeView } from './views/HomeView';
import { CollectionView } from './views/CollectionView';
import { ProductView } from './views/ProductView';
import { PageView } from './views/PageView';

const AppContent: React.FC = () => {
  const { view } = useStore();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-cyan-500 selection:text-white">
      {/* Top Banner & Header */}
      <AnnouncementBar />
      <Header />

      {/* Main Routed View */}
      <main className="flex-1">
        {view === 'home' && <HomeView />}
        {view === 'collection' && <CollectionView />}
        {view === 'product' && <ProductView />}
        {view === 'page' && <PageView />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Slide-Over Drawers & Modals */}
      <CartDrawer />
      <SearchDrawer />
      <QuickViewModal />
      <CheckoutModal />
      <ThemeSettingsDrawer />
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

export default App;
