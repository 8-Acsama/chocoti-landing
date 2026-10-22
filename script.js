/**
 * ============================================================================
 * CHOCOTI-DIGITAL | LÓGICA DE NEGOCIO, E-COMMERCE & INTERACTIVIDAD
 * Proyecto Académico 2026 - Ingeniería de Sistemas, USFX (Sucre, Bolivia)
 * Autoras: Marly Medrano Valdez, Angela Micaela Miranda Coro, Eli Mabel Acsama Cari
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. BASE DE DATOS MOCK DEL CATÁLOGO (Arquitectura estilo REST API)
     -------------------------------------------------------------------------- */
  const CATALOG_DATABASE = [
    {
      id: 'prod-001',
      name: 'Colección Imperial de Bombones',
      category: 'bombones',
      tag: 'Más Vendido',
      price: 85.00,
      weight: '24 unidades (320g)',
      description: 'Exquisita selección de bombones artesanales rellenos de licor de cacao, maracuyá, dulce de leche y praliné de avellanas.',
      svgTheme: 'bombones-imperial'
    },
    {
      id: 'prod-002',
      name: 'Trufas Sucrenses al Cacao & Ron',
      category: 'artesanales',
      tag: 'Artesanal',
      price: 65.00,
      weight: '16 unidades (220g)',
      description: 'Trufas fundentes espolvoreadas con cacao boliviano amargo y notas sutiles de ron añejo de destilería.',
      svgTheme: 'trufas-ron'
    },
    {
      id: 'prod-003',
      name: 'Tableta 70% Cacao Silvestre Alto Beni',
      category: 'tabletas',
      tag: 'Origen Puro',
      price: 32.00,
      weight: '100g',
      description: 'Cacao silvestre amazónico de origen único con notas a frutos rojos, madera noble y baja acidez.',
      svgTheme: 'tableta-70'
    },
    {
      id: 'prod-004',
      name: 'Cofre Colonial "Ciudad Blanca"',
      category: 'especiales',
      tag: 'Edición Sucre',
      price: 135.00,
      weight: '36 unidades (450g)',
      description: 'Homenaje a la cuna de la libertad: estuche con motivos coloniales sucrenses y bombones de cata selecta.',
      svgTheme: 'cofre-sucre'
    },
    {
      id: 'prod-005',
      name: 'Estuche Ejecutivo B2B con Relieve',
      category: 'corporativos',
      tag: 'Corporativo',
      price: 110.00,
      weight: '20 bombones finos (280g)',
      description: 'Caja rígida con acabado laminado mate, lazo satinado y espacio para relieve o grabado de logotipo institucional.',
      svgTheme: 'estuche-b2b'
    },
    {
      id: 'prod-006',
      name: 'Tableta Chocolate con Leche & Almendras',
      category: 'tabletas',
      tag: 'Clásico',
      price: 28.00,
      weight: '100g',
      description: 'Suave chocolate con leche fresca de los valles chuquisaqueños y trozos crocantes de almendra tostada.',
      svgTheme: 'tableta-almendras'
    },
    {
      id: 'prod-007',
      name: 'Corazones de Cacao & Cereza Silvestre',
      category: 'artesanales',
      tag: 'Favorito',
      price: 55.00,
      weight: '12 unidades (180g)',
      description: 'Bombones moldeados en forma de corazón con relleno cremoso de cerezas maceradas y cobertura semiamarga.',
      svgTheme: 'corazones-cereza'
    },
    {
      id: 'prod-008',
      name: 'Bombonera "Campana de la Libertad"',
      category: 'especiales',
      tag: 'Coleccionable',
      price: 160.00,
      weight: '30 piezas exclusivas (420g)',
      description: 'Edición histórica con medallones de chocolate al 60% cacao y baño dorado comestible.',
      svgTheme: 'campana-libertad'
    },
    {
      id: 'prod-009',
      name: 'Lote Empresarial Navidad y Aniversario',
      category: 'corporativos',
      tag: 'Por Mayor',
      price: 240.00,
      weight: 'Pack Doble Premium (600g)',
      description: 'Kit de celebración corporativa con bombones surtidos, trufas y tarjeta institucional personalizada.',
      svgTheme: 'lote-empresarial'
    }
  ];

  /* --------------------------------------------------------------------------
     2. GENERADOR DE ILUSTRACIONES SVG ARTESANALES PARA CADA PRODUCTO
     (Garantiza gráficos vectoriales nítidos, livianos y sin dependencias externas)
     -------------------------------------------------------------------------- */
  function getProductIllustrationSVG(theme) {
    switch (theme) {
      case 'bombones-imperial':
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bombones Imperial">
            <ellipse cx="120" cy="155" rx="90" ry="14" fill="#1F120F" opacity="0.25"/>
            <!-- Caja octogonal dorada y cacao -->
            <rect x="35" y="40" width="170" height="105" rx="12" fill="#3E2723" stroke="#C9A227" stroke-width="2"/>
            <rect x="42" y="47" width="156" height="91" rx="8" fill="#5D4037" stroke="#E5C358" stroke-width="0.8" stroke-dasharray="4 2"/>
            <!-- Bombones -->
            <circle cx="70" cy="72" r="14" fill="#2B1612"/>
            <path d="M64 68 Q70 60 76 68" stroke="#C9A227" stroke-width="1.5" fill="none"/>
            <circle cx="120" cy="72" r="14" fill="#8E1B2E"/>
            <circle cx="120" cy="72" r="6" fill="#A5283D"/>
            <circle cx="170" cy="72" r="14" fill="#3E2723"/>
            <rect x="164" y="66" width="12" height="12" fill="#C9A227" rx="2"/>
            <circle cx="70" cy="112" r="14" fill="#4E342E"/>
            <circle cx="70" cy="112" r="7" fill="#E5C358"/>
            <circle cx="120" cy="112" r="14" fill="#2B1612"/>
            <line x1="112" y1="112" x2="128" y2="112" stroke="#FFF8E1" stroke-width="2"/>
            <circle cx="170" cy="112" r="14" fill="#8E1B2E"/>
            <path d="M165 110 Q170 105 175 110" stroke="#FFF8E1" stroke-width="1.5" fill="none"/>
          </svg>`;

      case 'trufas-ron':
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trufas Sucrenses al Ron">
            <ellipse cx="120" cy="155" rx="85" ry="14" fill="#1F120F" opacity="0.25"/>
            <!-- Placa de presentación dorada -->
            <ellipse cx="120" cy="125" rx="85" ry="32" fill="#3E2723" stroke="#C9A227" stroke-width="2"/>
            <ellipse cx="120" cy="125" rx="75" ry="26" fill="#4E342E"/>
            <!-- Pirámide de Trufas espolvoreadas -->
            <circle cx="85" cy="115" r="22" fill="#2A1713"/>
            <circle cx="80" cy="110" r="1.5" fill="#C9A227"/><circle cx="92" cy="118" r="1.5" fill="#C9A227"/>
            <circle cx="155" cy="115" r="22" fill="#2A1713"/>
            <circle cx="150" cy="112" r="1.5" fill="#C9A227"/><circle cx="162" cy="120" r="1.5" fill="#C9A227"/>
            <circle cx="120" cy="100" r="24" fill="#381D17"/>
            <circle cx="115" cy="95" r="2" fill="#E5C358"/><circle cx="126" cy="104" r="1.5" fill="#E5C358"/>
            <circle cx="120" cy="68" r="20" fill="#22110D"/>
            <!-- Destello de ron y cacao -->
            <path d="M114 62 Q120 54 126 62" stroke="#C9A227" stroke-width="2" fill="none"/>
          </svg>`;

      case 'tableta-70':
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tableta 70% Cacao">
            <ellipse cx="120" cy="155" rx="80" ry="12" fill="#1F120F" opacity="0.25"/>
            <!-- Barra con papel aluminio dorado semiabierto -->
            <rect x="65" y="30" width="110" height="120" rx="8" fill="#3E2723" stroke="#5D4037" stroke-width="2"/>
            <!-- División en tabletas -->
            <line x1="102" y1="30" x2="102" y2="150" stroke="#251411" stroke-width="2"/>
            <line x1="138" y1="30" x2="138" y2="150" stroke="#251411" stroke-width="2"/>
            <line x1="65" y1="70" x2="175" y2="70" stroke="#251411" stroke-width="2"/>
            <line x1="65" y1="110" x2="175" y2="110" stroke="#251411" stroke-width="2"/>
            <!-- Envoltorio dorado inferior -->
            <path d="M60 85 L180 85 L180 155 L60 155 Z" fill="#C9A227"/>
            <path d="M60 85 L120 100 L180 85" stroke="#9C7714" stroke-width="1.5" fill="none"/>
            <text x="120" y="125" font-family="'Playfair Display', serif" font-size="12" fill="#3E2723" font-weight="bold" text-anchor="middle">70% CACAO</text>
            <text x="120" y="140" font-family="'Poppins', sans-serif" font-size="7" fill="#5D4037" font-weight="600" text-anchor="middle">ALTO BENI - SUCRE</text>
          </svg>`;

      case 'cofre-sucre':
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cofre Ciudad Blanca">
            <ellipse cx="120" cy="158" rx="90" ry="14" fill="#1F120F" opacity="0.25"/>
            <!-- Estuche de Madera Colonial / Blanco Crema -->
            <rect x="40" y="45" width="160" height="100" rx="10" fill="#FFF8E1" stroke="#C9A227" stroke-width="2.5"/>
            <rect x="48" y="53" width="144" height="84" rx="6" fill="#3E2723"/>
            <!-- Detalles coloniales dorados -->
            <circle cx="120" cy="95" r="22" fill="#5D4037" stroke="#C9A227" stroke-width="1.5"/>
            <!-- Escudo colonial estilizado original dentro del cofre -->
            <path d="M120 80 L132 86 V98 C132 105 120 110 120 110 C120 110 108 105 108 98 V86 L120 80 Z" fill="#C9A227"/>
            <circle cx="120" cy="93" r="3" fill="#FFF8E1"/>
            <!-- Bombones en las esquinas -->
            <circle cx="68" cy="72" r="10" fill="#C9A227"/>
            <circle cx="172" cy="72" r="10" fill="#C9A227"/>
            <circle cx="68" cy="118" r="10" fill="#8E1B2E"/>
            <circle cx="172" cy="118" r="10" fill="#8E1B2E"/>
          </svg>`;

      case 'estuche-b2b':
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Estuche B2B Corporativo">
            <ellipse cx="120" cy="155" rx="85" ry="12" fill="#1F120F" opacity="0.25"/>
            <!-- Caja rígida negra/chocolate mate -->
            <rect x="45" y="35" width="150" height="110" rx="8" fill="#241512" stroke="#5D4037" stroke-width="2"/>
            <!-- Cinta corporativa dorada vertical y horizontal -->
            <rect x="110" y="35" width="20" height="110" fill="#C9A227"/>
            <rect x="45" y="80" width="150" height="20" fill="#C9A227"/>
            <!-- Insignia corporativa para grabado de logotipo -->
            <circle cx="120" cy="90" r="26" fill="#3E2723" stroke="#FFF8E1" stroke-width="2"/>
            <rect x="106" y="82" width="28" height="16" rx="3" fill="none" stroke="#E5C358" stroke-width="1.5"/>
            <text x="120" y="93" font-family="'Poppins', sans-serif" font-size="6.5" fill="#E5C358" font-weight="bold" text-anchor="middle">TU LOGO</text>
          </svg>`;

      case 'tableta-almendras':
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tableta con Almendras">
            <ellipse cx="120" cy="155" rx="80" ry="12" fill="#1F120F" opacity="0.25"/>
            <!-- Tableta chocolate con leche -->
            <rect x="65" y="35" width="110" height="115" rx="6" fill="#6D4C41" stroke="#4E342E" stroke-width="2"/>
            <!-- Cortes de la tableta -->
            <line x1="102" y1="35" x2="102" y2="150" stroke="#4E342E" stroke-width="2"/>
            <line x1="138" y1="35" x2="138" y2="150" stroke="#4E342E" stroke-width="2"/>
            <line x1="65" y1="73" x2="175" y2="73" stroke="#4E342E" stroke-width="2"/>
            <line x1="65" y1="112" x2="175" y2="112" stroke="#4E342E" stroke-width="2"/>
            <!-- Trozos de almendras incrustadas -->
            <ellipse cx="85" cy="54" rx="6" ry="3" fill="#FFE0B2" transform="rotate(-25 85 54)"/>
            <ellipse cx="120" cy="92" rx="7" ry="4" fill="#FFE0B2" transform="rotate(35 120 92)"/>
            <ellipse cx="156" cy="60" rx="6" ry="3.5" fill="#FFE0B2" transform="rotate(-15 156 60)"/>
            <ellipse cx="88" cy="130" rx="7" ry="4" fill="#FFE0B2" transform="rotate(40 88 130)"/>
            <ellipse cx="148" cy="132" rx="6" ry="3" fill="#FFE0B2" transform="rotate(-30 148 132)"/>
          </svg>`;

      case 'corazones-cereza':
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Corazones Cereza">
            <ellipse cx="120" cy="155" rx="85" ry="12" fill="#1F120F" opacity="0.25"/>
            <!-- Caja en forma de corazón o estuche rojo bordó -->
            <circle cx="120" cy="95" r="55" fill="#8E1B2E" stroke="#C9A227" stroke-width="2"/>
            <circle cx="120" cy="95" r="48" fill="#5D4037"/>
            <!-- Corazón central -->
            <path d="M120 120 C90 100 80 75 95 62 C108 52 118 64 120 70 C122 64 132 52 145 62 C160 75 150 100 120 120 Z" fill="#8E1B2E" stroke="#C9A227" stroke-width="1.5"/>
            <path d="M110 75 Q120 68 130 75" stroke="#FFF8E1" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="120" cy="92" r="5" fill="#E5C358"/>
          </svg>`;

      case 'campana-libertad':
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Campana de la Libertad">
            <ellipse cx="120" cy="158" rx="85" ry="14" fill="#1F120F" opacity="0.25"/>
            <!-- Campana de chocolate con destellos de oro -->
            <path d="M120 35 C108 35 102 55 95 90 C88 120 70 130 70 135 H170 C170 130 152 120 145 90 C138 55 132 35 120 35 Z" fill="#3E2723" stroke="#C9A227" stroke-width="2.5"/>
            <!-- Borde inferior campana -->
            <ellipse cx="120" cy="135" rx="50" ry="10" fill="#5D4037" stroke="#C9A227" stroke-width="1.5"/>
            <!-- Badajo -->
            <circle cx="120" cy="142" r="8" fill="#C9A227"/>
            <line x1="120" y1="35" x2="120" y2="25" stroke="#C9A227" stroke-width="4" stroke-linecap="round"/>
            <!-- Grabado Sucre 1825 -->
            <text x="120" y="95" font-family="'Playfair Display', serif" font-size="11" fill="#E5C358" font-weight="bold" text-anchor="middle">SUCRE</text>
            <text x="120" y="110" font-family="'Poppins', sans-serif" font-size="8" fill="#FFF8E1" text-anchor="middle">LIBERTAD</text>
          </svg>`;

      case 'lote-empresarial':
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lote Empresarial">
            <ellipse cx="120" cy="158" rx="90" ry="14" fill="#1F120F" opacity="0.25"/>
            <!-- Dos estuches corporativos apilados elegantemente -->
            <rect x="40" y="85" width="160" height="60" rx="8" fill="#3E2723" stroke="#C9A227" stroke-width="2"/>
            <rect x="60" y="45" width="120" height="45" rx="6" fill="#8E1B2E" stroke="#E5C358" stroke-width="1.8"/>
            <!-- Lazo y Moño dorado -->
            <line x1="120" y1="45" x2="120" y2="145" stroke="#C9A227" stroke-width="12"/>
            <circle cx="120" cy="45" r="10" fill="#E5C358"/>
            <circle cx="120" cy="45" r="5" fill="#3E2723"/>
          </svg>`;

      default:
        return `
          <svg class="product-svg" viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="40" width="140" height="100" rx="10" fill="#3E2723"/>
            <circle cx="120" cy="90" r="25" fill="#C9A227"/>
          </svg>`;
    }
  }

  /* --------------------------------------------------------------------------
     3. GESTIÓN DEL ESTADO GLOBAL: CARRITO & ENTORNO
     -------------------------------------------------------------------------- */
  let cart = [];
  try {
    const savedCart = localStorage.getItem('chocoti_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.warn('Almacenamiento local restringido o inaccesible:', e);
    cart = [];
  }

  function saveCartToStorage() {
    try {
      localStorage.setItem('chocoti_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('No se pudo guardar el carrito:', e);
    }
  }

  /* --------------------------------------------------------------------------
     4. RENDERIZADO DEL CATÁLOGO & FILTROS POR CATEGORÍA
     -------------------------------------------------------------------------- */
  const productsGrid = document.getElementById('productsGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderCatalog(categoryFilter = 'todos') {
    if (!productsGrid) return;

    const filtered = categoryFilter === 'todos'
      ? CATALOG_DATABASE
      : CATALOG_DATABASE.filter(item => item.category === categoryFilter);

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-muted);">
          <p>No se encontraron productos en esta categoría por el momento.</p>
        </div>`;
      return;
    }

    productsGrid.innerHTML = filtered.map(prod => `
      <article class="product-card" data-id="${prod.id}">
        <div class="product-image-box">
          <span class="product-tag">${prod.tag}</span>
          ${getProductIllustrationSVG(prod.svgTheme)}
        </div>
        <div class="product-card-body">
          <span class="product-category-label">${formatCategoryName(prod.category)}</span>
          <h3 class="product-title">${prod.name}</h3>
          <p class="product-desc">${prod.description}</p>
          <div class="product-specs">
            <span>Presentación:</span>
            <strong>${prod.weight}</strong>
          </div>
          <div class="product-pricing-row">
            <span class="product-price">Bs. ${prod.price.toFixed(2)}</span>
            <button class="btn-add-cart" data-id="${prod.id}" aria-label="Añadir ${prod.name} al carrito">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H4.887L4.35 1.35A1 1 0 003.35 1H3zM6 16a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>Añadir</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Adjuntar escuchadores a los botones "Añadir"
    const addButtons = productsGrid.querySelectorAll('.btn-add-cart');
    addButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = btn.getAttribute('data-id');
        addToCart(productId);
      });
    });
  }

  function formatCategoryName(cat) {
    const map = {
      artesanales: 'Chocolates Artesanales',
      bombones: 'Línea de Bombones',
      tabletas: 'Tabletas & Barras',
      corporativos: 'Regalos Corporativos',
      especiales: 'Ediciones Especiales'
    };
    return map[cat] || 'Chocolates Para Ti';
  }

  // Filtrado al hacer clic en las pestañas
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const cat = btn.getAttribute('data-category');
      renderCatalog(cat);
    });
  });

  /* --------------------------------------------------------------------------
     5. CARRITO DE COMPRAS (SIDE DRAWER & OPERACIONES)
     -------------------------------------------------------------------------- */
  const cartTrigger = document.getElementById('cartTrigger');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBadge = document.getElementById('cartBadge');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartShipping = document.getElementById('cartShipping');
  const cartTotal = document.getElementById('cartTotal');
  const shippingSelect = document.getElementById('shippingSelect');
  const btnClearCart = document.getElementById('btnClearCart');
  const btnCheckout = document.getElementById('btnCheckout');

  function openCart() {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    cartBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    cartBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (cartDrawer.classList.contains('open')) closeCart();
      closeQRModal();
    }
  });

  function addToCart(productId) {
    const product = CATALOG_DATABASE.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        weight: product.weight,
        svgTheme: product.svgTheme,
        qty: 1
      });
    }

    saveCartToStorage();
    updateCartUI();

    // Efecto visual en el badge del carrito
    if (cartBadge) {
      cartBadge.classList.add('bump');
      setTimeout(() => cartBadge.classList.remove('bump'), 300);
    }
  }

  function updateQuantity(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      cart[itemIndex].qty += delta;
      if (cart[itemIndex].qty <= 0) {
        cart.splice(itemIndex, 1);
      }
      saveCartToStorage();
      updateCartUI();
    }
  }

  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
  }

  function clearCart() {
    cart = [];
    saveCartToStorage();
    updateCartUI();
  }

  if (btnClearCart) {
    btnClearCart.addEventListener('click', clearCart);
  }

  function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shippingZone = shippingSelect ? shippingSelect.value : 'sucre';
    
    let shipping = 0;
    if (subtotal > 0) {
      if (shippingZone === 'sucre') {
        // En Sucre es gratis en compras mayores a 50 Bs, caso contrario 10 Bs
        shipping = subtotal >= 50 ? 0.00 : 10.00;
      } else {
        // Envío nacional courier
        shipping = 25.00;
      }
    }

    const total = subtotal + shipping;
    return { subtotal, shipping, total, shippingZone };
  }

  function updateCartUI() {
    // 1. Contador del badge
    const totalCount = cart.reduce((count, item) => count + item.qty, 0);
    if (cartBadge) cartBadge.textContent = totalCount;

    // 2. Elementos del Drawer
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart-msg">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
          </svg>
          <p><strong>Tu carrito está vacío</strong></p>
          <small>Elige tus chocolates favoritos de Sucre y disfruta del sabor tradicional.</small>
        </div>`;
      if (btnCheckout) btnCheckout.disabled = true;
    } else {
      if (btnCheckout) btnCheckout.disabled = false;
      cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-img">
            ${getProductIllustrationSVG(item.svgTheme)}
          </div>
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">Bs. ${(item.price * item.qty).toFixed(2)}</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="window.ChocoTiApp.changeQty('${item.id}', -1)" aria-label="Disminuir cantidad">-</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" onclick="window.ChocoTiApp.changeQty('${item.id}', 1)" aria-label="Aumentar cantidad">+</button>
            </div>
          </div>
          <button class="btn-remove-item" onclick="window.ChocoTiApp.deleteItem('${item.id}')" aria-label="Eliminar producto">&times;</button>
        </div>
      `).join('');
    }

    // 3. Totales
    const { subtotal, shipping, total, shippingZone } = calculateCartTotals();
    if (cartSubtotal) cartSubtotal.textContent = `Bs. ${subtotal.toFixed(2)}`;
    if (cartShipping) {
      if (subtotal === 0) {
        cartShipping.textContent = 'Bs. 0.00';
      } else if (shippingZone === 'sucre' && shipping === 0) {
        cartShipping.textContent = '¡GRATIS!';
      } else {
        cartShipping.textContent = `Bs. ${shipping.toFixed(2)}`;
      }
    }
    if (cartTotal) cartTotal.textContent = `Bs. ${total.toFixed(2)}`;
  }

  if (shippingSelect) {
    shippingSelect.addEventListener('change', updateCartUI);
  }

  // Exponer métodos para los botones en línea del carrito
  window.ChocoTiApp = {
    changeQty: (id, delta) => updateQuantity(id, delta),
    deleteItem: (id) => removeFromCart(id)
  };

  /* --------------------------------------------------------------------------
     6. PASARELA DE PAGO QR SIMPLE (<10s CON VALIDACIÓN AUTOMÁTICA)
     -------------------------------------------------------------------------- */
  const qrModalOverlay = document.getElementById('qrModalOverlay');
  const qrModalClose = document.getElementById('qrModalClose');
  const qrActiveState = document.getElementById('qrActiveState');
  const qrSuccessState = document.getElementById('qrSuccessState');
  const qrModalAmount = document.getElementById('qrModalAmount');
  const qrTimer = document.getElementById('qrTimer');
  const btnSimulateInstantPay = document.getElementById('btnSimulateInstantPay');
  const btnDoneOrder = document.getElementById('btnDoneOrder');
  const confirmedOrderNum = document.getElementById('confirmedOrderNum');
  const confirmedTrackCode = document.getElementById('confirmedTrackCode');
  const confirmedTotal = document.getElementById('confirmedTotal');

  let qrCountdownInterval = null;

  function openQRModal() {
    if (cart.length === 0) {
      alert('Tu carrito está vacío. Agrega chocolates antes de proceder al pago.');
      return;
    }

    closeCart(); // Cerrar drawer lateral
    const { total } = calculateCartTotals();

    qrModalAmount.textContent = `Bs. ${total.toFixed(2)}`;
    qrActiveState.style.display = 'block';
    qrSuccessState.style.display = 'none';

    qrModalOverlay.classList.add('open');
    qrModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Iniciar cuenta regresiva de validación automática en 10 segundos
    startQRCountdown(10, total);
  }

  function closeQRModal() {
    qrModalOverlay.classList.remove('open');
    qrModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (qrCountdownInterval) clearInterval(qrCountdownInterval);
  }

  if (btnCheckout) btnCheckout.addEventListener('click', openQRModal);
  if (qrModalClose) qrModalClose.addEventListener('click', closeQRModal);

  function startQRCountdown(seconds, orderAmount) {
    if (qrCountdownInterval) clearInterval(qrCountdownInterval);
    let remaining = seconds;
    qrTimer.textContent = `${remaining}s`;

    qrCountdownInterval = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        clearInterval(qrCountdownInterval);
        triggerPaymentSuccess(orderAmount);
      } else {
        qrTimer.textContent = `${remaining}s`;
      }
    }, 1000);
  }

  function triggerPaymentSuccess(orderAmount) {
    if (qrCountdownInterval) clearInterval(qrCountdownInterval);

    // Generar código de seguimiento y número de orden simulados
    const randomOrderNum = Math.floor(1000 + Math.random() * 9000);
    const newOrderCode = `ORD-2026-${randomOrderNum}`;
    const newTrackCode = `SUC-${randomOrderNum}`;

    if (confirmedOrderNum) confirmedOrderNum.textContent = newOrderCode;
    if (confirmedTrackCode) confirmedTrackCode.textContent = newTrackCode;
    if (confirmedTotal) confirmedTotal.textContent = `Bs. ${orderAmount.toFixed(2)}`;

    // Transición visual al estado confirmado
    qrActiveState.style.display = 'none';
    qrSuccessState.style.display = 'block';

    // Vaciar el carrito tras pago exitoso
    cart = [];
    saveCartToStorage();
    updateCartUI();
  }

  if (btnSimulateInstantPay) {
    btnSimulateInstantPay.addEventListener('click', () => {
      const { total } = calculateCartTotals();
      triggerPaymentSuccess(total);
    });
  }

  if (btnDoneOrder) {
    btnDoneOrder.addEventListener('click', () => {
      const generatedCode = confirmedTrackCode ? confirmedTrackCode.textContent : 'SUC-8921';
      closeQRModal();
      
      // Desplazarse suavemente a la sección de seguimiento y prellenar el código
      const trackingInput = document.getElementById('trackingInput');
      const trackingSection = document.getElementById('seguimiento');
      if (trackingInput) {
        trackingInput.value = generatedCode;
      }
      if (trackingSection) {
        trackingSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          performTracking(generatedCode);
        }, 500);
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. SEGUIMIENTO DE PEDIDO EN TIEMPO REAL (TRACKING SIMULATOR)
     -------------------------------------------------------------------------- */
  const trackingInput = document.getElementById('trackingInput');
  const trackingBtn = document.getElementById('trackingBtn');
  const trackingResult = document.getElementById('trackingResult');
  const trackCodeDisplay = document.getElementById('trackCodeDisplay');
  const trackDestDisplay = document.getElementById('trackDestDisplay');
  const trackCourierDisplay = document.getElementById('trackCourierDisplay');
  const trackStatusPill = document.getElementById('trackStatusPill');
  const trackingStepper = document.getElementById('trackingStepper');
  const trackingHistoryList = document.getElementById('trackingHistoryList');
  const sampleTagButtons = document.querySelectorAll('.sample-tag-btn');

  // Base de datos de códigos de prueba
  const TRACKING_DB = {
    'SUC-8921': {
      code: 'SUC-8921',
      dest: 'La Paz - Zona Sopocachi',
      courier: 'Courier Express Nacional',
      status: 'En Tránsito Interdepartamental',
      statusClass: 'in-transit',
      currentStep: 3,
      history: [
        { time: 'Hoy - 14:20', text: 'Envío en tránsito interdepartamental hacia terminal de distribución central.' },
        { time: 'Hoy - 11:15', text: 'Inspección de calidad completada en planta matriz Sucre. Empaque climatizado sellado.' },
        { time: 'Hoy - 08:30', text: 'Pago con QR Simple validado exitosamente. Orden enviada a producción.' }
      ]
    },
    'SUC-4050': {
      code: 'SUC-4050',
      dest: 'Cochabamba - Av. América',
      courier: 'Transportes Climatizados Bolivia',
      status: 'En Empaque Térmico en Planta (Sucre)',
      statusClass: 'in-transit',
      currentStep: 2,
      history: [
        { time: 'Hoy - 15:00', text: 'Envasado al vacío y acondicionamiento térmico en sala blanca de Sucre.' },
        { time: 'Hoy - 13:45', text: 'Orden recibida y asignada a la línea de bombones finos.' }
      ]
    },
    'SUC-7712': {
      code: 'SUC-7712',
      dest: 'Santa Cruz de la Sierra - Equipetrol',
      courier: 'AeroCourier Exprés',
      status: 'Entregado Satisfactoriamente',
      statusClass: 'delivered',
      currentStep: 5,
      history: [
        { time: 'Ayer - 17:40', text: 'Paquete entregado a destinatario con firma de conformidad.' },
        { time: 'Ayer - 11:30', text: 'Arribo a oficina central Santa Cruz y salida a ruta de reparto.' },
        { time: '21/10 - 18:00', text: 'Despacho aéreo desde Sucre en bodega climatizada.' },
        { time: '21/10 - 10:15', text: 'Confirmación y preparación de orden de bombones especiales.' }
      ]
    }
  };

  function performTracking(codeToTrack) {
    const cleanCode = (codeToTrack || '').trim().toUpperCase();
    if (!cleanCode) {
      alert('Por favor ingresa un código de envío válido (Ej: SUC-8921).');
      return;
    }

    const data = TRACKING_DB[cleanCode] || {
      code: cleanCode,
      dest: 'Sucre / Destino Nacional Registrado',
      courier: 'Courier Asignado ChocoTi-Digital',
      status: 'En Tránsito Interdepartamental',
      statusClass: 'in-transit',
      currentStep: 3,
      history: [
        { time: 'Hoy - Reciente', text: `Paquete registrado con guía ${cleanCode}. En ruta de despacho desde la planta en Sucre.` },
        { time: 'Hoy - Turno Mañana', text: 'Validación fiscal SIN y empaque térmico completado.' }
      ]
    };

    // Renderizar datos en pantalla
    trackCodeDisplay.textContent = data.code;
    trackDestDisplay.textContent = data.dest;
    trackCourierDisplay.textContent = data.courier;
    trackStatusPill.textContent = data.status;
    trackStatusPill.className = `status-pill ${data.statusClass}`;

    // Actualizar stepper de 5 pasos
    const stepElements = trackingStepper.querySelectorAll('.stepper-step');
    stepElements.forEach((stepEl, idx) => {
      const stepNum = idx + 1;
      stepEl.className = 'stepper-step';
      const circle = stepEl.querySelector('.step-circle');

      if (stepNum < data.currentStep) {
        stepEl.classList.add('completed');
        if (circle) circle.textContent = '✓';
      } else if (stepNum === data.currentStep) {
        stepEl.classList.add('active');
        if (circle) circle.textContent = stepNum === 5 ? '✓' : '🚚';
      } else {
        if (circle) circle.textContent = stepNum;
      }
    });

    // Renderizar historial
    trackingHistoryList.innerHTML = data.history.map(h => `
      <li>
        <span class="hist-time">${h.time}</span>
        <span class="hist-text">${h.text}</span>
      </li>
    `).join('');

    trackingResult.style.display = 'block';
  }

  if (trackingBtn) {
    trackingBtn.addEventListener('click', () => {
      performTracking(trackingInput.value);
    });
  }

  if (trackingInput) {
    trackingInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        performTracking(trackingInput.value);
      }
    });
  }

  sampleTagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sampleCode = btn.getAttribute('data-code');
      trackingInput.value = sampleCode;
      performTracking(sampleCode);
    });
  });

  /* --------------------------------------------------------------------------
     8. PORTAL CORPORATIVO B2B (FORMULARIO, PREVIEW DE LOGO & VALIDACIONES)
     -------------------------------------------------------------------------- */
  const b2bForm = document.getElementById('b2bForm');
  const b2bSuccessAlert = document.getElementById('b2bSuccessAlert');
  const quoteCodeDisplay = document.getElementById('quoteCodeDisplay');
  const newQuoteBtn = document.getElementById('newQuoteBtn');

  const logoDropzone = document.getElementById('logoDropzone');
  const b2bLogoInput = document.getElementById('b2bLogoInput');
  const dropzoneEmpty = document.getElementById('dropzoneEmpty');
  const dropzonePreview = document.getElementById('dropzonePreview');
  const logoPreviewImg = document.getElementById('logoPreviewImg');
  const logoFileName = document.getElementById('logoFileName');
  const removeLogoBtn = document.getElementById('removeLogoBtn');

  // Carga y Drag & Drop del Logotipo Institucional
  if (logoDropzone && b2bLogoInput) {
    logoDropzone.addEventListener('click', (e) => {
      if (e.target !== removeLogoBtn) {
        b2bLogoInput.click();
      }
    });

    logoDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      logoDropzone.classList.add('dragover');
    });

    logoDropzone.addEventListener('dragleave', () => {
      logoDropzone.classList.remove('dragover');
    });

    logoDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      logoDropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleLogoFile(e.dataTransfer.files[0]);
      }
    });

    b2bLogoInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleLogoFile(e.target.files[0]);
      }
    });
  }

  function handleLogoFile(file) {
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen válido (PNG, JPG o SVG).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      logoPreviewImg.src = e.target.result;
      logoFileName.textContent = file.name;
      dropzoneEmpty.style.display = 'none';
      dropzonePreview.style.display = 'flex';
    };
    reader.readAsDataURL(file);
  }

  if (removeLogoBtn) {
    removeLogoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      b2bLogoInput.value = '';
      logoPreviewImg.src = '';
      dropzoneEmpty.style.display = 'block';
      dropzonePreview.style.display = 'none';
    });
  }

  // Validación y Envío del Formulario B2B
  if (b2bForm) {
    b2bForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('b2bName');
      const companyInput = document.getElementById('b2bCompany');
      const nitInput = document.getElementById('b2bNit');
      const phoneInput = document.getElementById('b2bPhone');
      const emailInput = document.getElementById('b2bEmail');
      const messageInput = document.getElementById('b2bMessage');

      let isValid = true;

      // Validación Nombre
      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
      }

      // Validación Empresa
      if (!companyInput.value.trim()) {
        companyInput.classList.add('is-invalid');
        isValid = false;
      } else {
        companyInput.classList.remove('is-invalid');
      }

      // Validación NIT
      if (!nitInput.value.trim() || nitInput.value.trim().length < 5) {
        nitInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nitInput.classList.remove('is-invalid');
      }

      // Validación Teléfono (min 7-8 dígitos)
      const phoneDigits = phoneInput.value.replace(/\D/g, '');
      if (phoneDigits.length < 7) {
        phoneInput.classList.add('is-invalid');
        isValid = false;
      } else {
        phoneInput.classList.remove('is-invalid');
      }

      // Validación Correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
      }

      // Validación Mensaje
      if (!messageInput.value.trim()) {
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
      }

      if (!isValid) return;

      // Generar código de cotización simulado
      const randomQuote = Math.floor(1000 + Math.random() * 9000);
      const quoteCode = `COT-2026-B2B-${randomQuote}`;
      quoteCodeDisplay.textContent = quoteCode;

      // Ocultar formulario y mostrar mensaje de confirmación
      b2bForm.style.display = 'none';
      b2bSuccessAlert.style.display = 'block';
    });
  }

  if (newQuoteBtn) {
    newQuoteBtn.addEventListener('click', () => {
      b2bForm.reset();
      if (removeLogoBtn) removeLogoBtn.click();
      b2bForm.style.display = 'flex';
      b2bSuccessAlert.style.display = 'none';
    });
  }

  /* --------------------------------------------------------------------------
     9. NAVEGACIÓN, MENÚ MÓVIL & SCROLL TO TOP
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // Menú hamburguesa móvil
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });

    // Cerrar menú móvil al hacer clic en cualquier enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header scroll y botón volver arriba
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    if (header) {
      if (scrollPos > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollPos > 380) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // Actualizar enlace activo en el menú según la sección visible
    updateActiveNavLink();
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const scrollPosition = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. INICIALIZACIÓN AL CARGAR LA PÁGINA
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderCatalog('todos');
    updateCartUI();
  });

})();
