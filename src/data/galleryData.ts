export interface GalleryItem {
  id: string;
  type: 'awards' | 'events' | 'initiatives' | 'press' | 'conferences' | 'bsss' | 'ewaste' | 'nukkad' | 'organicwaste' | 'plasticwaste' | 'socialinclusion' | 'undp' | 'wastetowealth' | 'zerowaste';
  url: string;
  year: string;
  title: string;
}

export const galleryData = (isHi: boolean): GalleryItem[] => [
  // --- AWARDS ---
  { id: 'aw1', type: 'awards', url: '/awards/a1.jpg', year: '2023', title: isHi ? 'राष्ट्रीय पुरस्कार' : 'National Award' },
  { id: 'aw2', type: 'awards', url: '/awards/a2.jpg', year: '2022', title: isHi ? 'स्वच्छता सम्मान' : 'Swachhata Samman' },
  { id: 'aw3', type: 'awards', url: '/awards/a3.jpg', year: '2023', title: isHi ? 'एक्सीलेंस अवार्ड' : 'Excellence Award' },

  // --- BSSS ---
  { id: 'bs1', type: 'bsss', url: '/bsss/1.jpg', year: '2026', title: isHi ? 'बी.एस.एस.एस. आइटम 1' : 'BSSS Item 1' },
  { id: 'bs2', type: 'bsss', url: '/bsss/2.jpg', year: '2026', title: isHi ? 'बी.एस.एस.एस. आइटम 2' : 'BSSS Item 2' },
  { id: 'bs3', type: 'bsss', url: '/bsss/3.jpg', year: '2026', title: isHi ? 'बी.एस.एस.एस. आइटम 3' : 'BSSS Item 3' },
  { id: 'bs4', type: 'bsss', url: '/bsss/4.jpg', year: '2026', title: isHi ? 'बी.एस.एस.एस. आइटम 4' : 'BSSS Item 4' },
  { id: 'bs5', type: 'bsss', url: '/bsss/5.jpg', year: '2026', title: isHi ? 'बी.एस.एस.एस. आइटम 5' : 'BSSS Item 5' },
  // --- CONFERENCES ---
  { id: 'cf1', type: 'conferences', url: '/conferences/1.jpg', year: '2025', title: isHi ? 'वेस्ट मैनेजमेंट समिट' : 'Waste Management Summit' },
  { id: 'cf2', type: 'conferences', url: '/conferences/2.jpg', year: '2024', title: isHi ? 'नीति आयोग मीटिंग' : 'Niti Aayog Meeting' },
  { id: 'cf3', type: 'conferences', url: '/conferences/3.jpg', year: '2024', title: isHi ? 'कॉन्फ्रेंस आइटम 3' : 'Conference Item 3' },
  { id: 'cf4', type: 'conferences', url: '/conferences/4.jpg', year: '2024', title: isHi ? 'कॉन्फ्रेंस आइटम 4' : 'Conference Item 4' },
  { id: 'cf5', type: 'conferences', url: '/conferences/5.jpg', year: '2024', title: isHi ? 'कॉन्फ्रेंस आइटम 5' : 'Conference Item 5' },
  { id: 'cf6', type: 'conferences', url: '/conferences/6.jpg', year: '2025', title: isHi ? 'कॉन्फ्रेंस आइटम 6' : 'Conference Item 6' },
  { id: 'cf7', type: 'conferences', url: '/conferences/7.jpg', year: '2025', title: isHi ? 'कॉन्फ्रेंस आइटम 7' : 'Conference Item 7' },
  { id: 'cf8', type: 'conferences', url: '/conferences/8.jpg', year: '2025', title: isHi ? 'कॉन्फ्रेंस आइटम 8' : 'Conference Item 8' },
  { id: 'cf9', type: 'conferences', url: '/conferences/9.jpg', year: '2025', title: isHi ? 'कॉन्फ्रेंस आइटम 9' : 'Conference Item 9' },
  { id: 'cf10', type: 'conferences', url: '/conferences/10.jpg', year: '2026', title: isHi ? 'कॉन्फ्रेंस आइटम 10' : 'Conference Item 10' },
  { id: 'cf11', type: 'conferences', url: '/conferences/11.jpg', year: '2026', title: isHi ? 'कॉन्फ्रेंस आइटम 11' : 'Conference Item 11' },
  { id: 'cf12', type: 'conferences', url: '/conferences/12.jpg', year: '2026', title: isHi ? 'कॉन्फ्रेंस आइटम 12' : 'Conference Item 12' },

  // --- E-WASTE ---
  { id: 'ew1', type: 'ewaste', url: '/ewaste/1.jpg', year: '2024', title: isHi ? 'ई-वेस्ट एम्बुलेंस' : 'E-Waste Ambulance' },
  { id: 'ew2', type: 'ewaste', url: '/ewaste/2.jpg', year: '2023', title: isHi ? 'संग्रहण केंद्र' : 'Collection Hub' },
  { id: 'ew3', type: 'ewaste', url: '/ewaste/3.jpg', year: '2024', title: isHi ? 'जागरूकता अभियान' : 'Awareness Campaign' },
  { id: 'ew4', type: 'ewaste', url: '/ewaste/4.jpg', year: '2025', title: isHi ? 'रीसाइक्लिंग यूनिट' : 'Recycling Unit' },
  { id: 'ew5', type: 'ewaste', url: '/ewaste/5.jpg', year: '2026', title: isHi ? 'ई-वेस्ट डिस्पोजल' : 'E-Waste Disposal' },
  // --- MEDIA ---
  { id: 'md3', type: 'press', url: '/media/3.jpg', year: '2022', title: isHi ? 'मीडिया आइटम 3' : 'Media Item 3' },
  { id: 'md4', type: 'press', url: '/media/4.jpg', year: '2022', title: isHi ? 'मीडिया आइटम 4' : 'Media Item 4' },
  { id: 'md5', type: 'press', url: '/media/5.jpg', year: '2022', title: isHi ? 'मीडिया आइटम 5' : 'Media Item 5' },
  { id: 'md6', type: 'press', url: '/media/6.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 6' : 'Media Item 6' },
  { id: 'md7', type: 'press', url: '/media/7.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 7' : 'Media Item 7' },
  { id: 'md8', type: 'press', url: '/media/8.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 8' : 'Media Item 8' },
  { id: 'md9', type: 'press', url: '/media/9.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 9' : 'Media Item 9' },
  { id: 'md10', type: 'press', url: '/media/10.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 10' : 'Media Item 10' },
  { id: 'md11', type: 'press', url: '/media/11.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 11' : 'Media Item 11' },
  { id: 'md12', type: 'press', url: '/media/12.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 12' : 'Media Item 12' },
  { id: 'md13', type: 'press', url: '/media/13.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 13' : 'Media Item 13' },
  { id: 'md14', type: 'press', url: '/media/14.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 14' : 'Media Item 14' },
  { id: 'md15', type: 'press', url: '/media/15.jpg', year: '2023', title: isHi ? 'मीडिया आइटम 15' : 'Media Item 15' },
  { id: 'md16', type: 'press', url: '/media/16.jpg', year: '2024', title: isHi ? 'मीडिया आइटम 16' : 'Media Item 16' },
  { id: 'md17', type: 'press', url: '/media/17.jpg', year: '2024', title: isHi ? 'मीडिया आइटम 17' : 'Media Item 17' },
  { id: 'md18', type: 'press', url: '/media/18.jpg', year: '2024', title: isHi ? 'मीडिया आइटम 18' : 'Media Item 18' },
  { id: 'md19', type: 'press', url: '/media/19.jpg', year: '2024', title: isHi ? 'मीडिया आइटम 19' : 'Media Item 19' },
  { id: 'md20', type: 'press', url: '/media/20.jpg', year: '2024', title: isHi ? 'मीडिया आइटम 20' : 'Media Item 20' },
  { id: 'md21', type: 'press', url: '/media/21.jpeg', year: '2024', title: isHi ? 'मीडिया आइटम 21' : 'Media Item 21' },
  { id: 'md22', type: 'press', url: '/media/22.jpeg', year: '2024', title: isHi ? 'मीडिया आइटम 22' : 'Media Item 22' },
  { id: 'md23', type: 'press', url: '/media/23.jpeg', year: '2024', title: isHi ? 'मीडिया आइटम 23' : 'Media Item 23' },
  { id: 'md24', type: 'press', url: '/media/24.jpg', year: '2024', title: isHi ? 'मीडिया आइटम 24' : 'Media Item 24' },
  { id: 'md25', type: 'press', url: '/media/25.jpg', year: '2024', title: isHi ? 'मीडिया आइटम 25' : 'Media Item 25' },
  { id: 'md26', type: 'press', url: '/media/26.jpg', year: '2024', title: isHi ? 'मीडिया आइटम 26' : 'Media Item 26' },
  { id: 'md27', type: 'press', url: '/media/27.jpg', year: '2024', title: isHi ? 'मीडिया आइटम 27' : 'Media Item 27' },
  { id: 'md28', type: 'press', url: '/media/28.jpeg', year: '2024', title: isHi ? 'मीडिया आइटम 28' : 'Media Item 28' },
  { id: 'md29', type: 'press', url: '/media/29.jpeg', year: '2025', title: isHi ? 'मीडिया आइटम 29' : 'Media Item 29' },
  { id: 'md30', type: 'press', url: '/media/30.jpeg', year: '2025', title: isHi ? 'मीडिया आइटम 30' : 'Media Item 30' },
  { id: 'md31', type: 'press', url: '/media/31.jpg', year: '2025', title: isHi ? 'मीडिया आइटम 31' : 'Media Item 31' },
  { id: 'md32', type: 'press', url: '/media/32.jpg', year: '2025', title: isHi ? 'मीडिया आइटम 32' : 'Media Item 32' },
  { id: 'md33', type: 'press', url: '/media/33.jpg', year: '2025', title: isHi ? 'मीडिया आइटम 33' : 'Media Item 33' },
  { id: 'md34', type: 'press', url: '/media/34.jpg', year: '2025', title: isHi ? 'मीडिया आइटम 34' : 'Media Item 34' },
  { id: 'md35', type: 'press', url: '/media/35.jpg', year: '2025', title: isHi ? 'मीडिया आइटम 35' : 'Media Item 35' },
  { id: 'md36', type: 'press', url: '/media/36.jpg', year: '2025', title: isHi ? 'मीडिया आइटम 36' : 'Media Item 36' },
  { id: 'md37', type: 'press', url: '/media/37.jpg', year: '2025', title: isHi ? 'मीडिया आइटम 37' : 'Media Item 37' },
  { id: 'md38', type: 'press', url: '/media/38.jpg', year: '2025', title: isHi ? 'मीडिया आइटम 38' : 'Media Item 38' },
  { id: 'md39', type: 'press', url: '/media/39.jpeg', year: '2025', title: isHi ? 'मीडिया आइटम 39' : 'Media Item 39' },
  { id: 'md40', type: 'press', url: '/media/40.jpeg', year: '2025', title: isHi ? 'मीडिया आइटम 40' : 'Media Item 40' },
  { id: 'md41', type: 'press', url: '/media/41.jpeg', year: '2025', title: isHi ? 'मीडिया आइटम 41' : 'Media Item 41' },
  { id: 'md42', type: 'press', url: '/media/42.jpeg', year: '2025', title: isHi ? 'मीडिया आइटम 42' : 'Media Item 42' },
  { id: 'md43', type: 'press', url: '/media/43.jpeg', year: '2026', title: isHi ? 'मीडिया आइटम 43' : 'Media Item 43' },
  { id: 'md44', type: 'press', url: '/media/44.jpeg', year: '2026', title: isHi ? 'मीडिया आइटम 44' : 'Media Item 44' },
  { id: 'md45', type: 'press', url: '/media/45.jpeg', year: '2026', title: isHi ? 'मीडिया आइटम 45' : 'Media Item 45' },
  { id: 'md46', type: 'press', url: '/media/46.jpeg', year: '2026', title: isHi ? 'मीडिया आइटम 46' : 'Media Item 46' },
  { id: 'md47', type: 'press', url: '/media/47.jpeg', year: '2026', title: isHi ? 'मीडिया आइटम 47' : 'Media Item 47' },
  { id: 'md48', type: 'press', url: '/media/48.jpeg', year: '2026', title: isHi ? 'मीडिया आइटम 48' : 'Media Item 48' },
  { id: 'md49', type: 'press', url: '/media/49.jpeg', year: '2026', title: isHi ? 'मीडिया आइटम 49' : 'Media Item 49' },


  // --- NUKKAD ---
  { id: 'nk1', type: 'nukkad', url: '/nukkad/1.jpg', year: '2024', title: isHi ? 'नुक्कड़ नाटक - 1' : 'Nukkad Natak - 1' },
  { id: 'nk2', type: 'nukkad', url: '/nukkad/2.jpg', year: '2024', title: isHi ? 'जन जागरूकता' : 'Public Awareness' },
  { id: 'nk3', type: 'nukkad', url: '/nukkad/3.jpg', year: '2025', title: isHi ? 'स्वच्छता संदेश' : 'Cleanliness Message' },
  { id: 'nk4', type: 'nukkad', url: '/nukkad/4.jpg', year: '2025', title: isHi ? 'सामुदायिक जुड़ाव' : 'Community Engagement' },

// --- ORGANIC WASTE ---
  { id: 'ow1', type: 'organicwaste', url: '/organicwaste/1.jpg', year: '2023', title: isHi ? 'कंपोस्टिंग यूनिट' : 'Composting Unit' },
  { id: 'ow2', type: 'organicwaste', url: '/organicwaste/2.jpg', year: '2024', title: isHi ? 'बायोगैस प्लांट' : 'Biogas Plant' },
  { id: 'ow3', type: 'organicwaste', url: '/organicwaste/3.jpg', year: '2024', title: isHi ? 'जैविक खाद उत्पादन' : 'Organic Manure Production' },
  { id: 'ow4', type: 'organicwaste', url: '/organicwaste/4.jpg', year: '2025', title: isHi ? 'वेस्ट टू एनर्जी' : 'Waste to Energy' },
  { id: 'ow5', type: 'organicwaste', url: '/organicwaste/5.jpg', year: '2026', title: isHi ? 'शून्य कचरा प्रबंधन' : 'Zero Waste Management' },

// --- PLASTIC WASTE ---
  { id: 'pw1', type: 'plasticwaste', url: '/plasticwaste/1.jpg', year: '2023', title: isHi ? 'प्लास्टिक सड़क' : 'Plastic Road Project' },
  { id: 'pw2', type: 'plasticwaste', url: '/plasticwaste/2.jpg', year: '2023', title: isHi ? 'MLP प्रसंस्करण' : 'MLP Processing' },
  { id: 'pw3', type: 'plasticwaste', url: '/plasticwaste/3.jpg', year: '2024', title: isHi ? 'प्लास्टिक संग्रह केंद्र' : 'Plastic Collection Center' },
  { id: 'pw4', type: 'plasticwaste', url: '/plasticwaste/4.jpg', year: '2024', title: isHi ? 'रीसाइक्लिंग प्लांट' : 'Recycling Plant' },
  { id: 'pw5', type: 'plasticwaste', url: '/plasticwaste/5.jpg', year: '2024', title: isHi ? 'ईको-ब्रिक्स निर्माण' : 'Eco-Bricks Production' },
  { id: 'pw6', type: 'plasticwaste', url: '/plasticwaste/6.jpg', year: '2024', title: isHi ? 'ग्रैनुलेशन प्रोसेस' : 'Granulation Process' },
  { id: 'pw7', type: 'plasticwaste', url: '/plasticwaste/7.jpg', year: '2025', title: isHi ? 'अपशिष्ट पृथक्करण' : 'Waste Segregation' },
  { id: 'pw8', type: 'plasticwaste', url: '/plasticwaste/8.jpg', year: '2025', title: isHi ? 'पायरोलिसिस यूनिट' : 'Pyrolysis Unit' },
  { id: 'pw9', type: 'plasticwaste', url: '/plasticwaste/9.jpg', year: '2025', title: isHi ? 'प्लास्टिक मुक्त अभियान' : 'Plastic Free Campaign' },
  { id: 'pw10', type: 'plasticwaste', url: '/plasticwaste/10.jpg', year: '2025', title: isHi ? 'औद्योगिक रीसाइक्लिंग' : 'Industrial Recycling' },
  { id: 'pw11', type: 'plasticwaste', url: '/plasticwaste/11.jpg', year: '2026', title: isHi ? 'सतत पैकेजिंग' : 'Sustainable Packaging' },
  { id: 'pw12', type: 'plasticwaste', url: '/plasticwaste/12.jpg', year: '2026', title: isHi ? 'स्मार्ट वेस्ट बिन' : 'Smart Waste Bin' },
  { id: 'pw13', type: 'plasticwaste', url: '/plasticwaste/13.jpg', year: '2026', title: isHi ? 'सर्कुलर इकोनॉमी पहल' : 'Circular Economy Initiative' },

// --- SOCIAL INCLUSION ---
  { id: 'si1', type: 'socialinclusion', url: '/socialinclusion/1.jpg', year: '2023', title: isHi ? 'सफाई मित्र सशक्तिकरण' : 'Safai Mitra Empowerment' },
  { id: 'si2', type: 'socialinclusion', url: '/socialinclusion/2.jpg', year: '2024', title: isHi ? 'स्वास्थ्य शिविर' : 'Health Camp' },
  { id: 'si3', type: 'socialinclusion', url: '/socialinclusion/3.jpg', year: '2024', title: isHi ? 'कौशल विकास प्रशिक्षण' : 'Skill Development Training' },
  { id: 'si4', type: 'socialinclusion', url: '/socialinclusion/4.jpg', year: '2025', title: isHi ? 'सुरक्षा उपकरण वितरण' : 'Safety Gear Distribution' },
  { id: 'si5', type: 'socialinclusion', url: '/socialinclusion/5.jpg', year: '2025', title: isHi ? 'बीमा जागरूकता' : 'Insurance Awareness' },
  { id: 'si6', type: 'socialinclusion', url: '/socialinclusion/6.jpg', year: '2026', title: isHi ? 'सम्मान समारोह' : 'Recognition Ceremony' },

  // --- UNDP ---
  { id: 'un1', type: 'undp', url: '/undp/1.jpg', year: '2024', title: isHi ? 'यू.एन.डी.पी. साझेदारी' : 'UNDP Partnership' },
  { id: 'un2', type: 'undp', url: '/undp/2.jpg', year: '2025', title: isHi ? 'सतत विकास लक्ष्य' : 'Sustainable Development Goals' },

  // --- WASTE TO WEALTH ---
  { id: 'ww1', type: 'wastetowealth', url: '/wastetowealth/1.jpg', year: '2024', title: isHi ? 'कचरे से कंचन' : 'Waste to Wealth' },
  { id: 'ww2', type: 'wastetowealth', url: '/wastetowealth/2.jpg', year: '2024', title: isHi ? 'अभिनव उत्पाद' : 'Innovative Products' },
  { id: 'ww3', type: 'wastetowealth', url: '/wastetowealth/3.jpg', year: '2025', title: isHi ? 'अपशिष्ट शिल्प' : 'Upcycled Crafts' },
  { id: 'ww4', type: 'wastetowealth', url: '/wastetowealth/4.jpg', year: '2026', title: isHi ? 'प्रदर्शनी केंद्र' : 'Exhibition Center' },

  // --- ZERO WASTE ---
  { id: 'zw1', type: 'zerowaste', url: '/zerowaste/1.jpg', year: '2023', title: isHi ? 'ज़ीरो वेस्ट इवेंट' : 'Zero Waste Event' },
  { id: 'zw2', type: 'zerowaste', url: '/zerowaste/2.jpg', year: '2024', title: isHi ? 'वेस्ट टू आर्ट' : 'Waste to Art' },
  { id: 'zw3', type: 'zerowaste', url: '/zerowaste/3.jpg', year: '2024', title: isHi ? 'शून्य अपशिष्ट पहल' : 'Zero Waste Initiative' },
  { id: 'zw4', type: 'zerowaste', url: '/zerowaste/4.jpg', year: '2024', title: isHi ? 'प्लास्टिक मुक्त आयोजन' : 'Plastic Free Event' },
  { id: 'zw5', type: 'zerowaste', url: '/zerowaste/5.jpg', year: '2024', title: isHi ? 'ग्रीन इवेंट मैनेजमेंट' : 'Green Event Management' },
  { id: 'zw6', type: 'zerowaste', url: '/zerowaste/6.jpg', year: '2024', title: isHi ? 'सतत जीवन शैली' : 'Sustainable Lifestyle' },
  { id: 'zw7', type: 'zerowaste', url: '/zerowaste/7.jpg', year: '2024', title: isHi ? 'ईको-फ्रेंडली उत्सव' : 'Eco-Friendly Celebration' },
  { id: 'zw8', type: 'zerowaste', url: '/zerowaste/8.jpg', year: '2024', title: isHi ? 'वेस्ट सेग्रीगेशन कैंप' : 'Waste Segregation Camp' },
  { id: 'zw9', type: 'zerowaste', url: '/zerowaste/9.jpg', year: '2025', title: isHi ? 'जीरो वेस्ट वर्कशॉप' : 'Zero Waste Workshop' },
  { id: 'zw10', type: 'zerowaste', url: '/zerowaste/10.jpg', year: '2025', title: isHi ? 'रीयूजेबल रिसोर्सेज' : 'Reusable Resources' },
  { id: 'zw11', type: 'zerowaste', url: '/zerowaste/11.jpg', year: '2025', title: isHi ? 'कचरा मुक्त प्रदर्शनी' : 'Garbage Free Exhibition' },
  { id: 'zw12', type: 'zerowaste', url: '/zerowaste/12.jpg', year: '2025', title: isHi ? 'पर्यावरण संरक्षण' : 'Nature Conservation' },
  { id: 'zw13', type: 'zerowaste', url: '/zerowaste/13.jpg', year: '2025', title: isHi ? 'अपशिष्ट प्रबंधन सत्र' : 'Waste Management Session' },
  { id: 'zw14', type: 'zerowaste', url: '/zerowaste/14.jpg', year: '2025', title: isHi ? 'जीरो वेस्ट वेडिंग' : 'Zero Waste Wedding' },
  { id: 'zw15', type: 'zerowaste', url: '/zerowaste/15.jpg', year: '2025', title: isHi ? 'ईको-मंच' : 'Eco-Platform' },
  { id: 'zw16', type: 'zerowaste', url: '/zerowaste/16.jpg', year: '2025', title: isHi ? 'सस्टेनेबिलिटी एक्सपो' : 'Sustainability Expo' },
  { id: 'zw17', type: 'zerowaste', url: '/zerowaste/17.jpg', year: '2026', title: isHi ? 'शून्य कचरा समाधान' : 'Zero Waste Solution' },
  { id: 'zw18', type: 'zerowaste', url: '/zerowaste/18.jpg', year: '2026', title: isHi ? 'ग्रीन सिटी मिशन' : 'Green City Mission' },
  { id: 'zw19', type: 'zerowaste', url: '/zerowaste/19.jpg', year: '2026', title: isHi ? 'वेस्ट रिडक्शन ड्राइव' : 'Waste Reduction Drive' },
  { id: 'zw20', type: 'zerowaste', url: '/zerowaste/20.jpg', year: '2026', title: isHi ? 'पर्यावरण मित्र' : 'Eco-Friend Circle' },
  { id: 'zw21', type: 'zerowaste', url: '/zerowaste/21.jpg', year: '2026', title: isHi ? 'स्मार्ट वेस्ट ऑडिट' : 'Smart Waste Audit' },
  { id: 'zw22', type: 'zerowaste', url: '/zerowaste/22.jpg', year: '2026', title: isHi ? 'सर्कुलर वेस्ट मॉडल' : 'Circular Waste Model' },
  { id: 'zw23', type: 'zerowaste', url: '/zerowaste/23.jpg', year: '2026', title: isHi ? 'जीरो वेस्ट कैंपस' : 'Zero Waste Campus' },
  { id: 'zw24', type: 'zerowaste', url: '/zerowaste/24.jpg', year: '2026', title: isHi ? 'भविष्य की बचत' : 'Savings for Future' },
];