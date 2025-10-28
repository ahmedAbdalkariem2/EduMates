/**
 * app.js
 * Minimal, modular JS to power site features:
 * - i18n language toggle (Arabic / English)
 * - mobile nav toggle
 * - courses / portfolio / blog rendering and filtering
 * - multi-step contact form with client-side validation and preview
 *
 * Keep code readable and extensible.
 */

(() => {
  'use strict';

  // ======= Simple translations store =======
  const translations = {
    en: {
      brand: 'EduMates',
      nav_about: 'About',
      nav_courses: 'Courses',
      nav_portfolio: 'Portfolio',
      nav_blog: 'Blog',
      nav_contact: 'Contact',
      cta_start: 'Start Learning',
      hero_title: 'We gather the best programming resources in one place',
      hero_sub: 'Free and curated tutorials, courses, projects and tools — in Arabic & English.',
      hero_cta: 'Browse Courses',
      hero_cta2: 'Read Blog',
      about_title: 'About EduMates',
      about_text: 'EduMates collects and organizes high-quality programming content — tutorials, videos, articles and open-source projects — to help learners progress from basics to job-ready skills.',
      about_mission_title: 'Our Mission',
      about_mission: 'Make programming learning accessible and practical. Curated content, real projects.',
      about_values_title: 'What we offer',
      about_values: 'Guides, curated courses, project templates, mentorship pathways and a growing community.',
      about_team_title: 'Team',
      about_team: 'Volunteers and contributors keeping content fresh.',
      courses_title: 'Courses & Resources',
      courses_sub: 'Hand-picked courses to boost your programming skills',
      filter_all: 'All levels',
      filter_beginner: 'Beginner',
      filter_intermediate: 'Intermediate',
      filter_advanced: 'Advanced',
      search_placeholder: 'Search courses...',
      portfolio_title: 'Projects & Portfolio',
      portfolio_sub: 'Projects built by learners and templates you can reuse.',
      blog_title: 'Latest Articles',
      view_all_articles: 'View All Articles',
      contact_title: 'Contact Us',
      contact_sub: 'Have a question, partnership, or contribution? Send us a message.',
      contact_email_label: 'Email',
      contact_location_label: 'Location',
      contact_location: 'Remote / Egypt',
      contact_team_label: 'Support',
      contact_support: 'Join our Discord or open an issue on GitHub.',
      form_name: 'Name',
      form_email: 'Email',
      form_topic: 'Topic',
      form_select: 'Select a topic',
      topic_partnership: 'Partnership',
      topic_contribution: 'Contribution',
      topic_bug: 'Report a bug',
      topic_other: 'Other',
      form_message: 'Message',
      form_attachment: 'Attach file (optional)',
      form_next: 'Next',
      form_back: 'Back',
      form_review: 'Review',
      form_review_title: 'Review & Send',
      form_send: 'Send Message',
      footer_about: 'Curated programming resources in Arabic & English.',
      article_read_more: 'Read more'
    },
    ar: {
      brand: 'إديوميتس',
      nav_about: 'من نحن',
      nav_courses: 'الدورات',
      nav_portfolio: 'معرض الأعمال',
      nav_blog: 'المدونة',
      nav_contact: 'تواصل',
      cta_start: 'ابدأ التعلم',
      hero_title: 'نجمع أفضل مصادر تعليم البرمجة في مكان واحد',
      hero_sub: 'دورات، دروس ومشاريع مجرّبة — بالعربية والإنجليزية.',
      hero_cta: 'تصفح الدورات',
      hero_cta2: 'قراءة المدونة',
      about_title: 'عن إديوميتس',
      about_text: 'نجمع وننظم محتوى برمجي عالي الجودة — دروس، فيديوهات، ومشاريع مفتوحة المصدر — لمساعدة المتعلمين على التقدّم من الأساسيات إلى مهارات جاهزة للعمل.',
      about_mission_title: 'مهمتنا',
      about_mission: 'جعل تعلم البرمجة متاحاً وعمليّاً. محتوى مُنسّق ومشاريع حقيقية.',
      about_values_title: 'ما نقدمه',
      about_values: 'أدلة، دورات مُنسّقة، قوالب مشاريع، مسارات إرشاد ومجتمع نشط.',
      about_team_title: 'الفريق',
      about_team: 'متطوعون ومساهمون يعملون على تحديث المحتوى.',
      courses_title: 'الدورات والمصادر',
      courses_sub: 'دورات مختارة بعناية لتعزيز مهاراتك البرمجية',
      filter_all: 'كل المستويات',
      filter_beginner: 'مبتدئ',
      filter_intermediate: 'متوسط',
      filter_advanced: 'متقدم',
      search_placeholder: 'ابحث في الدورات...',
      portfolio_title: 'المشاريع',
      portfolio_sub: 'مشاريع أنشأها المتعلمون وقوالب لإعادة الاستخدام.',
      blog_title: 'أحدث المقالات',
      view_all_articles: 'عرض جميع المقالات',
      contact_title: 'تواصل معنا',
      contact_sub: 'هل لديك سؤال أو شراكة؟ أرسل لنا رسالة.',
      contact_email_label: 'البريد الإلكتروني',
      contact_location_label: 'الموقع',
      contact_location: 'عن بُعد / مصر',
      contact_team_label: 'الدعم',
      contact_support: 'انضم لقناتنا أو افتح issue على GitHub.',
      form_name: 'الاسم',
      form_email: 'البريد الإلكتروني',
      form_topic: 'الموضوع',
      form_select: 'اختر موضوعاً',
      topic_partnership: 'شراكة',
      topic_contribution: 'مساهمة',
      topic_bug: 'الإبلاغ عن خلل',
      topic_other: 'أخرى',
      form_message: 'الرسالة',
      form_attachment: 'إرفاق ملف (اختياري)',
      form_next: 'التالي',
      form_back: 'السابق',
      form_review: 'مراجعة',
      form_review_title: 'مراجعة وإرسال',
      form_send: 'إرسال الرسالة',
      footer_about: 'مصادر برمجية مُنقّحة بالعربية والإنجليزية.',
      article_read_more: 'اقرأ المزيد'
    }
  };

  // ======= Sample data for courses / blog =======
  const sampleCourses = [
    { 
      id: 'c1', 
      title: { en: 'Front-End Development', ar: 'تطوير الواجهات الأمامية' }, 
      desc: { en: 'Learn HTML, CSS, JavaScript and modern frameworks.', ar: 'تعلم HTML، CSS، JavaScript وأطر العمل الحديثة.' }, 
      level: 'beginner', 
      url: 'https://edumates.netlify.app/j-front-end/courses=det',
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    { 
      id: 'c2', 
      title: { en: 'Back-End Development', ar: 'تطوير الخلفية' }, 
      desc: { en: 'Server-side programming, databases and APIs.', ar: 'برمجة الخادم، قواعد البيانات وواجهات البرمجة.' }, 
      level: 'intermediate', 
      url: 'https://edumates.netlify.app/j-backend/courses=det',
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80'
    },
    { 
      id: 'c3', 
      title: { en: 'Programming Basics', ar: 'أساسيات البرمجة' }, 
      desc: { en: 'Start your programming journey with fundamentals.', ar: 'ابدأ رحلتك في البرمجة مع الأساسيات.' }, 
      level: 'beginner', 
      url: 'https://edumates.netlify.app/programing-basics/programing-basics.html',
      bgImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    { 
      id: 'c4', 
      title: { en: 'Data Analysis', ar: 'تحليل البيانات' }, 
      desc: { en: 'Learn data analysis techniques and tools.', ar: 'تعلم تقنيات وأدوات تحليل البيانات.' }, 
      level: 'intermediate', 
      url: 'https://edumates.netlify.app/j-data-analysis/data-analysis',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    { 
      id: 'c5', 
      title: { en: 'JavaScript Essentials', ar: 'أساسيات JavaScript' }, 
      desc: { en: 'Core language concepts and DOM manipulation.', ar: 'مفاهيم اللغة الأساسية والتعامل مع DOM.' }, 
      level: 'beginner', 
      url: '#',
      bgImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    { 
      id: 'c6', 
      title: { en: 'React Practical', ar: 'React عملي' }, 
      desc: { en: 'Build real apps with hooks and routing.', ar: 'بناء تطبيقات حقيقية باستخدام hooks و routing.' }, 
      level: 'intermediate', 
      url: '#',
      bgImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  const samplePosts = [
    { 
      id: 'b1', 
      title: { 
        en: 'How to structure your study plan', 
        ar: 'كيف تنظّم خطة دراستك' 
      }, 
      excerpt: { 
        en: 'A step-by-step approach to consistent learning and progress tracking.', 
        ar: 'نهج خطوة بخطوة للتعلم المستمر وتتبع التقدم.' 
      }, 
      url: 'blog.html#b1',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-01-15'
    },
    { 
      id: 'b2', 
      title: { 
        en: 'Top 10 free resources in 2025', 
        ar: 'أفضل 10 مصادر مجانية في 2025' 
      }, 
      excerpt: { 
        en: 'Curated list of the best free programming resources for fast progress.', 
        ar: 'قائمة مُنقّحة لأفضل المصادر البرمجية المجانية للتقدّم السريع.' 
      }, 
      url: 'blog.html#b2',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-01-12'
    },
    { 
      id: 'b3', 
      title: { 
        en: 'JavaScript Best Practices', 
        ar: 'أفضل ممارسات JavaScript' 
      }, 
      excerpt: { 
        en: 'Learn the essential JavaScript practices every developer should know.', 
        ar: 'تعلم الممارسات الأساسية في JavaScript التي يجب على كل مطور معرفتها.' 
      }, 
      url: 'blog.html#b3',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-01-10'
    },
    { 
      id: 'b4', 
      title: { 
        en: 'Getting Started with React', 
        ar: 'بدء العمل مع React' 
      }, 
      excerpt: { 
        en: 'Complete beginner guide to start your journey with React framework.', 
        ar: 'دليل المبتدئين الشامل لبدء رحلتك مع إطار عمل React.' 
      }, 
      url: 'blog.html#b4',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-01-08'
    },
    { 
      id: 'b5', 
      title: { 
        en: 'CSS Grid vs Flexbox', 
        ar: 'مقارنة بين CSS Grid و Flexbox' 
      }, 
      excerpt: { 
        en: 'When to use CSS Grid and when to use Flexbox for your layouts.', 
        ar: 'متى تستخدم CSS Grid ومتى تستخدم Flexbox في تخطيطاتك.' 
      }, 
      url: 'blog.html#b5',
      image: 'css.png',
      date: '2024-01-05'
    },
    { 
      id: 'b6', 
      title: { 
        en: 'Python for Data Science', 
        ar: 'بايثون لعلوم البيانات' 
      }, 
      excerpt: { 
        en: 'How to use Python for data analysis and machine learning projects.', 
        ar: 'كيفية استخدام بايثون في مشاريع تحليل البيانات وتعلم الآلة.' 
      }, 
      url: 'blog.html#b6',
      image: 'python-logo.png',
      date: '2024-01-03'
    }
  ];

  // ======= Utilities =======
  const el = (selector, root = document) => root.querySelector(selector);
  const els = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const byId = id => document.getElementById(id);

  // Current language state
  let lang = localStorage.getItem('edumates:lang') || 'en';

  // ======= I18n render =======
function renderTranslations() {
  const nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(node => {
    const key = node.getAttribute('data-i18n');
    const text = translations[lang] && translations[lang][key];
    if (text) {
      node.textContent = text;
    }
  });

  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(inp => {
    const key = inp.getAttribute('data-i18n-placeholder');
    const text = translations[lang] && translations[lang][key];
    if (text) inp.setAttribute('placeholder', text);
  });

  // direction
  document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // flip layout for arabic small tweak
  document.body.style.direction = document.documentElement.dir;
  
  // update language toggle text - التصحيح هنا
  const langToggle = byId('langToggle');
  if (langToggle) {
    const langText = langToggle.querySelector('.lang-text');
    const langIcon = langToggle.querySelector('.lang-icon');
    
    if (langText && langIcon) {
      // عندما تكون اللغة العربية، اعرض "EN" في النص و"AR" في الأيقونة
      if (lang === 'ar') {
        langText.textContent = 'EN';
        langIcon.textContent = 'AR';
      } else {
        // عندما تكون اللغة الإنجليزية، اعرض "AR" في النص و"EN" في الأيقونة
        langText.textContent = 'AR';
        langIcon.textContent = 'EN';
      }
    }
  }
}
  // Toggle language
  function toggleLanguage() {
    lang = lang === 'en' ? 'ar' : 'en';
    localStorage.setItem('edumates:lang', lang);
    renderTranslations();
    renderCourses();
    renderBlog();
  }

  // ======= Render content sections =======
  function renderCourses(filter = 'all', query = '') {
    const container = byId('coursesList');
    if (!container) return;
    
    container.innerHTML = '';
    const q = query.trim().toLowerCase();

    const list = sampleCourses.filter(c => {
      if (filter !== 'all' && c.level !== filter) return false;
      if (!q) return true;
      const t = (c.title[lang] || '').toLowerCase();
      const d = (c.desc[lang] || '').toLowerCase();
      return t.includes(q) || d.includes(q);
    });

    if (list.length === 0) {
      const nothing = document.createElement('div');
      nothing.className = 'card';
      nothing.textContent = lang === 'ar' ? 'لا توجد دورات مطابقة.' : 'No matching courses found.';
      container.appendChild(nothing);
      return;
    }

    list.forEach(c => {
      // إنشاء بطاقة كورس مع تصميم حديث
      const card = document.createElement('a');
      card.className = 'course-card';
      card.href = c.url;
      card.setAttribute('data-level', c.level);
      
      // إضافة صورة الخلفية
      card.style.backgroundImage = `url(${c.bgImage})`;
      
      // طبقة التعتيم
      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      
      // محتوى البطاقة
      const content = document.createElement('div');
      content.className = 'content';
      
      const title = document.createElement('h3');
      title.textContent = c.title[lang] || c.title.en;
      
      const desc = document.createElement('p');
      desc.textContent = c.desc[lang] || c.desc.en;
      
      // إضافة شارة المستوى
      const levelBadge = document.createElement('div');
      levelBadge.className = 'level-badge';
      levelBadge.textContent = translations[lang][`filter_${c.level}`] || c.level;
      
      content.appendChild(title);
      content.appendChild(desc);
      
      card.appendChild(overlay);
      card.appendChild(content);
      card.appendChild(levelBadge);
      
      container.appendChild(card);
    });
  }

  function renderBlog() {
    const container = byId('blogList');
    if (!container) return;
    
    container.innerHTML = '';
    
    // عرض 6 مقالات فقط في الصفحة الرئيسية
    const postsToShow = samplePosts.slice(0, 6);
    
    postsToShow.forEach(post => {
      const card = document.createElement('article');
      card.className = 'card blog-card';
      
      const img = document.createElement('img');
      img.src = post.image;
      img.alt = post.title[lang] || post.title.en;
      img.className = 'blog-image';
      
      const content = document.createElement('div');
      content.className = 'blog-content';
      
      const h = document.createElement('h3');
      h.textContent = post.title[lang] || post.title.en;
      
      const p = document.createElement('p');
      p.textContent = post.excerpt[lang] || post.excerpt.en;
      
      const meta = document.createElement('div');
      meta.className = 'blog-meta';
      meta.textContent = new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US');
      
      const a = document.createElement('a');
      a.href = post.url;
      a.className = 'btn small';
      a.textContent = translations[lang].article_read_more;
      
      content.appendChild(h);
      content.appendChild(meta);
      content.appendChild(p);
      content.appendChild(a);
      
      card.appendChild(img);
      card.appendChild(content);
      container.appendChild(card);
    });
  }

  // ======= Mobile nav toggle =======
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const mobile = byId('mobileNav');
    if (!toggle || !mobile) return;
    
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (mobile.hidden) {
        mobile.hidden = false;
      } else {
        mobile.hidden = true;
      }
    });
  }

  // ======= Contact form (multi-step) =======
  function initContactForm() {
    const form = byId('contactForm');
    if (!form) return;

    const steps = els('.step', form);
    let current = 0;

    function showStep(index) {
      steps.forEach((s, i) => {
        s.hidden = i !== index;
      });
      current = index;
    }

    // navigation buttons
    form.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.dataset.action) return;
      const action = target.dataset.action;
      if (action === 'next') {
        // basic validation for current step
        const inputs = Array.from(steps[current].querySelectorAll('input,textarea,select'));
        for (const input of inputs) {
          if (input.required && !input.value) {
            input.focus();
            return;
          }
        }
        showStep(Math.min(current + 1, steps.length - 1));
      } else if (action === 'back') {
        showStep(Math.max(current - 1, 0));
      }
    });

    // file preview
    const fileInput = byId('attachment');
    const filePreview = byId('filePreview');
    if (fileInput && filePreview) {
      fileInput.addEventListener('change', (e) => {
        const f = e.target.files && e.target.files[0];
        if (!f) {
          filePreview.hidden = true;
          filePreview.innerHTML = '';
          return;
        }
        filePreview.hidden = false;
        const info = document.createElement('div');
        info.textContent = `${f.name} (${Math.round(f.size / 1024)} KB)`;
        filePreview.innerHTML = '';
        filePreview.appendChild(info);

        if (f.type.startsWith('image/')) {
          const img = document.createElement('img');
          img.style.maxWidth = '100%';
          img.style.marginTop = '0.5rem';
          img.alt = 'preview';
          const reader = new FileReader();
          reader.onload = () => img.src = reader.result;
          reader.readAsDataURL(f);
          filePreview.appendChild(img);
        }
      });
    }

    // review step populate
    form.addEventListener('click', (e) => {
      if (e.target.dataset.action === 'next' && current === steps.length - 2) {
        populateReview();
      }
    });

    function populateReview() {
      const review = byId('reviewBox');
      if (!review) return;
      
      const data = new FormData(form);
      review.innerHTML = `
        <p><strong>${translations[lang].form_name}:</strong> ${data.get('name') || ''}</p>
        <p><strong>${translations[lang].form_email}:</strong> ${data.get('email') || ''}</p>
        <p><strong>${translations[lang].form_topic}:</strong> ${data.get('topic') || ''}</p>
        <p><strong>${translations[lang].form_message}:</strong></p>
        <div>${(data.get('message') || '').replace(/\n/g,'<br/>')}</div>
      `;
      const f = fileInput && fileInput.files && fileInput.files[0];
      if (f) {
        const attach = document.createElement('p');
        attach.style.marginTop = '0.5rem';
        attach.textContent = `${f.name} (${Math.round(f.size/1024)} KB)`;
        review.appendChild(attach);
      }
    }

    // submission (client-side only)
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = byId('formStatus');
      if (!status) return;
      
      // basic final validation
      const formData = new FormData(form);
      if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
        status.textContent = lang === 'ar' ? 'الرجاء تعبئة الحقول المطلوبة.' : 'Please fill required fields.';
        return;
      }

      // Simulate async submission (replace with real endpoint)
      status.textContent = lang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
      setTimeout(() => {
        status.textContent = lang === 'ar' ? 'تم إرسال الرسالة! شكراً لتواصلك.' : 'Message sent! Thanks for reaching out.';
        form.reset();
        if (filePreview) filePreview.hidden = true;
        showStep(0);
      }, 800);
    });

    // initialize first step
    showStep(0);
  }

  // ======= Filters and search =======
  function initCourseControls() {
    const search = byId('searchInput');
    const filter = byId('filterLevel');

    if (!search || !filter) return;

    const apply = () => {
      renderCourses(filter.value || 'all', search.value || '');
    };

    search.addEventListener('input', debounce(apply, 250));
    filter.addEventListener('change', apply);
  }

  // ======= Small helpers =======
  function debounce(fn, wait = 200) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  // ======= Boot =======
  function init() {
    // set year in footer
    const year = new Date().getFullYear();
    const elYear = byId('year');
    if (elYear) elYear.textContent = String(year);

    // wire language toggle
    const langToggle = byId('langToggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        toggleLanguage();
      });
    }

    // initial render
    renderTranslations();
    renderCourses();
    renderBlog();

    // ui
    initMobileNav();
    initContactForm();
    initCourseControls();
  }

  // Wait DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();