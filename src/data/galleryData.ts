export interface GalleryItem {
  id: string;
  type: 'awards' | 'events' | 'initiatives' | 'press';
  url: string;
  year: string;
  title: string;
}

export const galleryData = (isHi: boolean): GalleryItem[] => [
  // --- AWARDS ---
  { id: 'aw1', type: 'awards', url: '/awards/a1.jpg', year: '2023', title: isHi ? 'राष्ट्रीय पुरस्कार' : 'National Award' },
  { id: 'aw2', type: 'awards', url: '/awards/a2.jpg', year: '2022', title: isHi ? 'स्वच्छता सम्मान' : 'Swachhata Samman' },
  { id: 'aw3', type: 'awards', url: '/awards/a3.jpg', year: '2023', title: isHi ? 'एक्सीलेंस अवार्ड' : 'Excellence Award' },

  // --- CONFERENCES ---
  { id: 'cf1', type: 'events', url: '/conferences/1.jpg', year: '2025', title: isHi ? 'वेस्ट मैनेजमेंट समिट' : 'Waste Management Summit' },
  { id: 'cf2', type: 'events', url: '/conferences/2.jpg', year: '2024', title: isHi ? 'नीति आयोग मीटिंग' : 'Niti Aayog Meeting' },

  // --- E-WASTE ---
  { id: 'ew1', type: 'initiatives', url: '/ewaste/1.jpg', year: '2024', title: isHi ? 'ई-वेस्ट एम्बुलेंस' : 'E-Waste Ambulance' },
  { id: 'ew2', type: 'initiatives', url: '/ewaste/2.jpg', year: '2023', title: isHi ? 'संग्रहण केंद्र' : 'Collection Hub' },

  // --- MEDIA ---
  { id: 'md1', type: 'press', url: '/media/1.jpg', year: '2021', title: isHi ? 'दैनिक भास्कर' : 'Dainik Bhaskar' },
  { id: 'md2', type: 'press', url: '/media/2.jpg', year: '2022', title: isHi ? 'नई दुनिया' : 'Nayi Duniya' },

  // --- ORGANIC WASTE ---
  { id: 'ow1', type: 'initiatives', url: '/organicwaste/1.jpg', year: '2023', title: isHi ? 'कंपोस्टिंग यूनिट' : 'Composting Unit' },
  { id: 'ow2', type: 'initiatives', url: '/organicwaste/2.jpg', year: '2024', title: isHi ? 'बायोगैस प्लांट' : 'Biogas Plant' },

  // --- PLASTIC WASTE ---
  { id: 'pw1', type: 'initiatives', url: '/plasticwaste/1.jpg', year: '2023', title: isHi ? 'प्लास्टिक सड़क' : 'Plastic Road Project' },
  { id: 'pw2', type: 'initiatives', url: '/plasticwaste/2.jpg', year: '2023', title: isHi ? 'MLP प्रसंस्करण' : 'MLP Processing' },

  // --- SOCIAL INCLUSION ---
  { id: 'si1', type: 'initiatives', url: '/socialinclusion/1.jpg', year: '2023', title: isHi ? 'सफाई मित्र सशक्तिकरण' : 'Safai Mitra Empowerment' },
  { id: 'si2', type: 'initiatives', url: '/socialinclusion/2.jpg', year: '2024', title: isHi ? 'स्वास्थ्य शिविर' : 'Health Camp' },

  // --- ZERO WASTE ---
  { id: 'zw1', type: 'events', url: '/zerowaste/1.jpg', year: '2023', title: isHi ? 'ज़ीरो वेस्ट इवेंट' : 'Zero Waste Event' },
  { id: 'zw2', type: 'events', url: '/zerowaste/2.jpg', year: '2024', title: isHi ? 'वेस्ट टू आर्ट' : 'Waste to Art' },
];