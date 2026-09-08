/**
 * DEMANDRA — Enterprise AI Retail Demand & Planning Platform
 * Master Interactive Controller
 * Benchmarks: o9 Solutions + RELEX
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. MOBILE NAVIGATION DRAWER CONTROLLER
  // ==========================================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navDrawer = document.getElementById('navDrawer');

  if (mobileToggle && navDrawer) {
    const hamburgerSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    const closeSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navDrawer.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.innerHTML = isOpen ? closeSvg : hamburgerSvg;
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (navDrawer.classList.contains('is-open') && !navDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        navDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = hamburgerSvg;
      }
    });

    // Close drawer when link clicked
    navDrawer.querySelectorAll('a, button').forEach(item => {
      item.addEventListener('click', () => {
        navDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = hamburgerSvg;
      });
    });
  }

  // ==========================================================================
  // 1B. HERO AMBIENT BACKGROUND VIDEO AUTOPLAY ASSURANCE
  // ==========================================================================
  const videoElem = document.getElementById('heroVideoElem');
  if (videoElem) {
    videoElem.muted = true;
    videoElem.playsInline = true;
    videoElem.play().catch(() => {});
  }

  // ==========================================================================
  // 2. DECISION SCENE: PARAMETER CHIPS & SHELF GONDOLA
  // ==========================================================================
  const paramChips = document.querySelectorAll('[data-param]');
  const shelfBays = document.querySelectorAll('[data-bay]');
  const dispatchTitle = document.getElementById('dispatchTitle');
  const dispatchSubtitle = document.getElementById('dispatchSubtitle');
  const dispatchBadge = document.getElementById('dispatchBadge');

  const paramProfiles = {
    demand: {
      title: 'Transfer Recommendation #TR-9042',
      subtitle: 'Surge in Lekki Hub: Move 80 Cases from Surulere Hub → Lekki Store #04',
      badge: 'EXECUTE REBALANCE',
      bays: [
        { pill: 'CRITICAL · 18%', bar: '18%', crit: true, rate: 'Depletion rate: 14 units/hr ↑' },
        { pill: 'OPTIMAL · 76%', bar: '76%', crit: false, rate: 'Depletion rate: 8 units/hr →' },
        { pill: 'SURGE · 24%', bar: '24%', crit: true, rate: 'Depletion rate: 32 cartons/hr ↑' },
        { pill: 'STABLE · 65%', bar: '65%', crit: false, rate: 'Depletion rate: 6 units/hr →' }
      ]
    },
    velocity: {
      title: 'Checkout Velocity Alert #CV-8821',
      subtitle: 'Victoria Island POS: Depletion rate +280% on Cooking Oil & Instant Noodles',
      badge: 'EXPEDITE DISPATCH',
      bays: [
        { pill: 'DEPLETED · 12%', bar: '12%', crit: true, rate: 'Depletion rate: 26 units/hr ↑' },
        { pill: 'NORMAL · 68%', bar: '68%', crit: false, rate: 'Depletion rate: 10 units/hr →' },
        { pill: 'CRITICAL · 15%', bar: '15%', crit: true, rate: 'Depletion rate: 45 cartons/hr ↑' },
        { pill: 'MODERATE · 58%', bar: '58%', crit: false, rate: 'Depletion rate: 9 units/hr →' }
      ]
    },
    leadtime: {
      title: 'Lead Time Buffer Buffer #LT-4109',
      subtitle: 'Port Harcourt Inbound Lag: Supplier transit buffer extended to 18 days',
      badge: 'UPDATE SAFETY STOCK',
      bays: [
        { pill: 'BUFFERED · 45%', bar: '45%', crit: false, rate: 'Lead time buffer: 5.4 days' },
        { pill: 'OPTIMAL · 82%', bar: '82%', crit: false, rate: 'Lead time buffer: 7.2 days' },
        { pill: 'REORDER · 32%', bar: '32%', crit: true, rate: 'Lead time buffer: 3.1 days ↑' },
        { pill: 'BALANCED · 70%', bar: '70%', crit: false, rate: 'Lead time buffer: 6.0 days' }
      ]
    },
    payday: {
      title: 'Municipal Payday Surge Forecast #PF-3301',
      subtitle: 'Lagos Island Weekend Liquidity: Advance replenishment of 140 crates',
      badge: 'PRE-DEPLOY STOCK',
      bays: [
        { pill: 'PROJECTED · 28%', bar: '28%', crit: true, rate: 'Weekend forecast: 180 units demand' },
        { pill: 'STABLE · 74%', bar: '74%', crit: false, rate: 'Weekend forecast: 95 units demand' },
        { pill: 'PROJECTED · 20%', bar: '20%', crit: true, rate: 'Weekend forecast: 240 cartons demand' },
        { pill: 'OPTIMAL · 80%', bar: '80%', crit: false, rate: 'Weekend forecast: 60 units demand' }
      ]
    }
  };

  function updateBays(profile) {
    if (!profile) return;
    if (dispatchTitle) dispatchTitle.textContent = profile.title;
    if (dispatchSubtitle) dispatchSubtitle.textContent = profile.subtitle;
    if (dispatchBadge) dispatchBadge.textContent = profile.badge;

    profile.bays.forEach((b, i) => {
      const pill = document.getElementById(`pillBay${i}`);
      const bar = document.getElementById(`barBay${i}`);
      const rate = document.getElementById(`rateBay${i}`);

      if (pill) {
        pill.textContent = b.pill;
        pill.className = `shelf-stock-pill ${b.crit ? 'pill-low' : 'pill-ok'}`;
      }
      if (bar) {
        bar.style.width = b.bar;
        bar.className = `shelf-fill-bar ${b.crit ? 'is-critical' : ''}`;
      }
      if (rate) {
        rate.textContent = b.rate;
      }
    });
  }

  paramChips.forEach(chip => {
    chip.addEventListener('click', () => {
      paramChips.forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');

      const param = chip.getAttribute('data-param');
      updateBays(paramProfiles[param]);
    });
  });

  const bayDescriptions = [
    { title: 'SKU Rebalance: Gino Cooking Oil (5L)', subtitle: 'Surplus detected in Ikeja Hub → Route 60 cases to Lekki Superstore' },
    { title: 'SKU Stock Health: Peak Evaporated Milk', subtitle: 'Buffer healthy · 18 days of supply currently on retail shelf' },
    { title: 'SKU Rebalance: Indomie Onion Chicken', subtitle: 'Rapid depletion detected · Trigger automated replenishment batch of 90 cartons' },
    { title: 'SKU Stock Health: Nestlé Golden Morn (1kg)', subtitle: 'Depletion rate steady · Scheduled replenishment in 8 days' }
  ];

  shelfBays.forEach((bay, idx) => {
    bay.addEventListener('click', () => {
      shelfBays.forEach(b => b.classList.remove('is-active'));
      bay.classList.add('is-active');

      const desc = bayDescriptions[idx];
      if (desc && dispatchTitle && dispatchSubtitle) {
        dispatchTitle.textContent = desc.title;
        dispatchSubtitle.textContent = desc.subtitle;
      }
    });
  });

  // ==========================================================================
  // 3. NEURAL ENGINE: 5-STAGE PIPELINE & WAVE CANVAS
  // ==========================================================================
  const pipelineNodes = document.querySelectorAll('.pipeline-node-item');
  const fcTitle = document.getElementById('fcTitle');
  const fcDesc = document.getElementById('fcDesc');
  const wavePath = document.getElementById('wavePath');

  const pipelineData = [
    {
      title: 'Stage 01: Demand Sensing (Real-Time POS Ingestion)',
      desc: 'Point-of-sale receipt streams ingest every 15 minutes across 2,400+ doors. Micro-demand anomalies are captured before store managers pull reports.',
      d: 'M0 190 C100 185 140 140 220 150 C300 160 340 70 420 85 C500 100 540 35 600 20'
    },
    {
      title: 'Stage 02: Pattern Neural (Temporal Fusion Transformers)',
      desc: 'Deep learning models isolate non-linear correlations across 8.4M daily variables, municipal payday schedules, and rainfall elasticity.',
      d: 'M0 180 C80 160 160 190 240 130 C320 120 380 95 460 70 C520 60 560 40 600 25'
    },
    {
      title: 'Stage 03: SKU Depletion (Store-Level Consumption Curves)',
      desc: 'Every retail shelf receives an hourly depletion trajectory with 98.4% confidence intervals across 14-day rolling horizons.',
      d: 'M0 195 C120 190 180 120 260 140 C340 150 400 65 480 80 C540 50 570 30 600 15'
    },
    {
      title: 'Stage 04: Auto-Replenish (Depot Cross-Dock Dispatch)',
      desc: 'Purchase orders and warehouse picklists automatically compile with supplier lead-time buffers factored in.',
      d: 'M0 170 C90 180 150 130 230 145 C310 110 390 85 470 60 C530 45 570 25 600 18'
    },
    {
      title: 'Stage 05: Cluster Rebalance (Inter-Store Redistribution)',
      desc: 'Surplus inventory from slow-moving locations automatically re-routes to high-velocity deficit stores across municipal clusters.',
      d: 'M0 185 C110 170 170 150 250 125 C330 135 410 75 490 65 C550 40 580 20 600 12'
    }
  ];

  pipelineNodes.forEach((node, idx) => {
    node.addEventListener('click', () => {
      pipelineNodes.forEach(n => n.classList.remove('is-active'));
      node.classList.add('is-active');

      const data = pipelineData[idx];
      if (data) {
        if (fcTitle) fcTitle.textContent = data.title;
        if (fcDesc) fcDesc.textContent = data.desc;
        if (wavePath) wavePath.setAttribute('d', data.d);
      }
    });
  });

  const nodePts = [
    { el: document.getElementById('nodePt1'), title: 'Velocity Surge Detected', desc: 'Demand accelerates 240% above Friday evening baseline in Lekki Store #04.' },
    { el: document.getElementById('nodePt2'), title: 'Neural Threshold Triggered', desc: 'Depletion curve crosses critical replenishment line 14 days ahead.' },
    { el: document.getElementById('nodePt3'), title: 'Autonomous Dispatch Executed', desc: '120 cases pre-allocated from Ikeja Central Depot before stockout happens.' }
  ];

  nodePts.forEach(pt => {
    if (pt.el) {
      pt.el.addEventListener('mouseenter', () => {
        if (fcTitle) fcTitle.textContent = pt.title;
        if (fcDesc) fcDesc.textContent = pt.desc;
      });
    }
  });



  // ==========================================================================
  // 5. ENTERPRISE SIGNUP MODAL (AGENTS.md RULE 3 COMPLIANT)
  // ==========================================================================
  const modalBackdrop = document.getElementById('demoModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const signupForm = document.getElementById('enterpriseSignupForm');
  const modalFormView = document.getElementById('modalFormView');
  const modalProvView = document.getElementById('modalProvView');
  const provStatusMsg = document.getElementById('provStatusMsg');
  const provStep1 = document.getElementById('provStep1');
  const provStep2 = document.getElementById('provStep2');
  const provStep3 = document.getElementById('provStep3');

  const passwordInput = document.getElementById('modalPassword');
  const passwordToggle = document.getElementById('passwordToggle');
  const sSeg1 = document.getElementById('sSeg1');
  const sSeg2 = document.getElementById('sSeg2');
  const sSeg3 = document.getElementById('sSeg3');
  const sSeg4 = document.getElementById('sSeg4');
  const strengthText = document.getElementById('strengthText');

  // Open / Close
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalBackdrop) modalBackdrop.classList.add('is-open');
      if (modalFormView) modalFormView.style.display = 'block';
      if (modalProvView) modalProvView.style.display = 'none';
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modalBackdrop) modalBackdrop.classList.remove('is-open');
    });
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('is-open');
      }
    });
  }

  // Password visibility
  if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', () => {
      const isPass = passwordInput.type === 'password';
      passwordInput.type = isPass ? 'text' : 'password';
    });
  }

  // 4-state password strength
  if (passwordInput && strengthText) {
    passwordInput.addEventListener('input', () => {
      const val = passwordInput.value;
      const segs = [sSeg1, sSeg2, sSeg3, sSeg4];
      segs.forEach(s => { if (s) s.style.background = 'rgba(12, 20, 16, 0.12)'; });

      if (!val) {
        strengthText.textContent = 'Password security rating';
        return;
      }

      let score = 0;
      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
      if (/\d/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      const colors = ['#dc5f47', '#f59e0b', '#245e41', '#38ef7d'];
      const labels = ['Weak corporate password', 'Moderate security', 'Strong enterprise key', 'Very strong cryptographic key'];

      for (let i = 0; i < score; i++) {
        if (segs[i]) segs[i].style.background = colors[score - 1];
      }
      strengthText.textContent = labels[score - 1] || 'Weak';
    });
  }

  // Form Submission -> 3-step Azure Sandbox Provisioning Animation
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!signupForm.checkValidity()) {
        signupForm.reportValidity();
        return;
      }

      if (modalFormView) modalFormView.style.display = 'none';
      if (modalProvView) modalProvView.style.display = 'block';

      // Step 1
      setTimeout(() => {
        if (provStep1) {
          provStep1.classList.add('is-done');
          provStep1.querySelector('span').textContent = '✓ 1. Microsoft Entra ID Credentials Verified';
        }
        if (provStatusMsg) provStatusMsg.textContent = 'Allocating isolated Azure West Africa tenant database...';
      }, 1200);

      // Step 2
      setTimeout(() => {
        if (provStep2) {
          provStep2.classList.add('is-done');
          provStep2.querySelector('span').textContent = '✓ 2. Azure West Africa Tenant Allocated (CMK Enforced)';
        }
        if (provStatusMsg) provStatusMsg.textContent = 'Spinning up Demandra demand forecasting neural weights...';
      }, 2400);

      // Step 3
      setTimeout(() => {
        if (provStep3) {
          provStep3.classList.add('is-done');
          provStep3.querySelector('span').textContent = '✓ 3. Demandra Retail Intelligence Environment Ready';
        }
        if (provStatusMsg) {
          provStatusMsg.innerHTML = '<strong style="color: #245e41;">Ready! Redirecting to Retail Operations Sandbox...</strong>';
        }
        setTimeout(() => {
          window.location.href = 'solution.html';
        }, 1500);
      }, 3600);
    });
  }

  // SSO Buttons trigger provisioning flow too
  const btnEntra = document.getElementById('btnSsoEntra');
  const btnGoogle = document.getElementById('btnSsoGoogle');
  [btnEntra, btnGoogle].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        if (modalFormView) modalFormView.style.display = 'none';
        if (modalProvView) modalProvView.style.display = 'block';
        setTimeout(() => {
          if (provStep1) provStep1.classList.add('is-done');
        }, 1000);
        setTimeout(() => {
          if (provStep2) provStep2.classList.add('is-done');
        }, 2000);
        setTimeout(() => {
          if (provStep3) provStep3.classList.add('is-done');
          setTimeout(() => { window.location.href = 'solution.html'; }, 1200);
        }, 3000);
      });
    }
  });

  // ==========================================================================
  // 6. SCROLL REVEAL ANIMATIONS
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));


});

