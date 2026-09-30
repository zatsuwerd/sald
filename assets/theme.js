/**
 * SALD Online Store 2.0 Theme JS
 * Lightweight, Vanilla JavaScript for high conversion & high performance
 */
(function() {
  'use strict';

  // --- Cart Drawer Manager ---
  const CartDrawer = {
    init() {
      this.drawer = document.getElementById('CartDrawer');
      if (!this.drawer) return;
      this.panel = this.drawer.querySelector('[data-cart-panel]');
      this.countBadges = document.querySelectorAll('[data-cart-count], [data-cart-drawer-count]');
      this.itemsContainer = this.drawer.querySelector('[data-cart-items-container]');
      this.subtotalEl = this.drawer.querySelector('[data-cart-subtotal]');
      this.shippingProgress = this.drawer.querySelector('[data-free-shipping-progress]');
      this.shippingText = this.drawer.querySelector('[data-free-shipping-text]');
      this.threshold = (window.SALD && window.SALD.freeShippingThreshold) || 75;

      this.bindEvents();
    },

    bindEvents() {
      document.addEventListener('click', (e) => {
        if (e.target.closest('[data-cart-open]')) {
          e.preventDefault();
          this.open();
        } else if (e.target.closest('[data-cart-close]')) {
          e.preventDefault();
          this.close();
        } else if (e.target.closest('[data-quick-add]')) {
          e.preventDefault();
          const btn = e.target.closest('[data-quick-add]');
          const variantId = btn.getAttribute('data-quick-add');
          this.addItem(variantId, 1, btn);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.close();
          SearchDrawer.close();
          QuickViewModal.close();
        }
      });
    },

    open() {
      if (!this.drawer) return;
      this.drawer.classList.add('open');
      document.body.classList.add('overflow-hidden');
    },

    close() {
      if (!this.drawer) return;
      this.drawer.classList.remove('open');
      document.body.classList.remove('overflow-hidden');
    },

    async addItem(variantId, quantity = 1, sourceBtn) {
      if (sourceBtn) {
        sourceBtn.disabled = true;
        sourceBtn.innerText = 'Adding...';
      }

      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: variantId, quantity })
        });
        
        if (response.ok) {
          await this.refresh();
          this.open();
        }
      } catch (err) {
        console.error('Failed to add item to cart', err);
      } finally {
        if (sourceBtn) {
          sourceBtn.disabled = false;
          sourceBtn.innerText = '+ Add';
        }
      }
    },

    async refresh() {
      try {
        const res = await fetch('/cart.js');
        const cart = await res.json();
        this.updateUI(cart);
      } catch (e) {
        console.error('Cart fetch failed', e);
      }
    },

    updateUI(cart) {
      this.countBadges.forEach(el => el.textContent = cart.item_count);
      if (this.subtotalEl) {
        this.subtotalEl.textContent = '$' + (cart.total_price / 100).toFixed(2);
      }

      // Update Free Shipping Progress Bar
      const totalDollars = cart.total_price / 100;
      const remaining = Math.max(0, this.threshold - totalDollars);
      const percent = Math.min(100, Math.round((totalDollars / this.threshold) * 100));

      if (this.shippingProgress) {
        this.shippingProgress.style.width = percent + '%';
      }

      if (this.shippingText) {
        if (remaining <= 0) {
          this.shippingText.innerHTML = '<span class="text-emerald-700">🎉 Congratulations! You unlocked FREE Express Delivery!</span>';
        } else {
          this.shippingText.innerHTML = '<span>Add <strong class="text-cyan-700">$' + remaining.toFixed(2) + '</strong> more for FREE Express Shipping!</span>';
        }
      }
    }
  };

  // --- Search Drawer Manager ---
  const SearchDrawer = {
    init() {
      this.drawer = document.getElementById('SearchDrawer');
      if (!this.drawer) return;
      
      document.addEventListener('click', (e) => {
        if (e.target.closest('[data-search-open]')) {
          e.preventDefault();
          this.open();
        } else if (e.target.closest('[data-search-close]')) {
          e.preventDefault();
          this.close();
        }
      });
    },

    open() {
      if (!this.drawer) return;
      this.drawer.classList.add('open');
      const input = this.drawer.querySelector('input[name="q"]');
      if (input) setTimeout(() => input.focus(), 150);
    },

    close() {
      if (!this.drawer) return;
      this.drawer.classList.remove('open');
    }
  };

  // --- Quick View Modal Manager ---
  const QuickViewModal = {
    init() {
      this.modal = document.getElementById('QuickViewModal');
      if (!this.modal) return;
      
      document.addEventListener('click', (e) => {
        if (e.target.closest('[data-quick-view]')) {
          e.preventDefault();
          const id = e.target.closest('[data-quick-view]').getAttribute('data-quick-view');
          this.open(id);
        } else if (e.target.closest('[data-quickview-close]')) {
          e.preventDefault();
          this.close();
        }
      });
    },

    open(productId) {
      if (!this.modal) return;
      this.modal.classList.add('open');
      document.body.classList.add('overflow-hidden');
    },

    close() {
      if (!this.modal) return;
      this.modal.classList.remove('open');
      document.body.classList.remove('overflow-hidden');
    }
  };

  // --- Mobile Navigation Drawer Manager with Glassmorphism ---
  const MobileMenu = {
    init() {
      this.drawer = document.getElementById('MobileMenuDrawer');
      if (!this.drawer) return;
      this.panel = this.drawer.querySelector('[data-mobile-menu-panel]');
      this.bindEvents();
    },

    bindEvents() {
      if (this.bound) return;
      this.bound = true;

      document.addEventListener('click', (e) => {
        if (e.target.closest('[data-mobile-menu-open]')) {
          e.preventDefault();
          this.open();
        } else if (e.target.closest('[data-mobile-menu-close]')) {
          e.preventDefault();
          this.close();
        } else if (e.target.closest('#MobileMenuDrawer a, #MobileMenuDrawer [data-search-open], #MobileMenuDrawer [data-cart-open]')) {
          // Auto close drawer when navigating to page or opening search/cart
          this.close();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.drawer && !this.drawer.classList.contains('hidden')) {
          this.close();
        }
      });
    },

    open() {
      this.drawer = document.getElementById('MobileMenuDrawer');
      if (!this.drawer) return;
      this.drawer.classList.remove('hidden');
      this.drawer.setAttribute('aria-hidden', 'false');
      
      const isRtl = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
      const panel = this.drawer.querySelector('[data-mobile-menu-panel]');
      
      if (panel) {
        panel.style.transform = isRtl ? 'translateX(100%)' : 'translateX(-100%)';
        panel.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
        requestAnimationFrame(() => {
          panel.style.transform = 'translateX(0)';
        });
      }
      
      document.body.classList.add('overflow-hidden');
    },

    close() {
      this.drawer = document.getElementById('MobileMenuDrawer');
      if (!this.drawer) return;
      
      const isRtl = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
      const panel = this.drawer.querySelector('[data-mobile-menu-panel]');
      
      if (panel) {
        panel.style.transform = isRtl ? 'translateX(100%)' : 'translateX(-100%)';
        setTimeout(() => {
          if (this.drawer) {
            this.drawer.classList.add('hidden');
            this.drawer.setAttribute('aria-hidden', 'true');
          }
        }, 280);
      } else {
        this.drawer.classList.add('hidden');
        this.drawer.setAttribute('aria-hidden', 'true');
      }

      document.body.classList.remove('overflow-hidden');
    }
  };

  // Initialize on DOM load & support Shopify Theme Editor section reloading
  document.addEventListener('DOMContentLoaded', () => {
    CartDrawer.init();
    SearchDrawer.init();
    QuickViewModal.init();
    MobileMenu.init();
  });

  document.addEventListener('shopify:section:load', () => {
    CartDrawer.init();
    SearchDrawer.init();
    QuickViewModal.init();
    MobileMenu.init();
  });

  window.SALDCart = CartDrawer;
  window.SALDMobileMenu = MobileMenu;
})();
