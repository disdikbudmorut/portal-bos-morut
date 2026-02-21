import React, { useState } from 'react';
import { 
  Home, 
  BarChart2, 
  Image as ImageIcon, 
  MessageSquare, 
  Shield, 
  Users, 
  BookOpen, 
  Upload, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  FileText,
  Lock,
  Newspaper,
  DollarSign,
  Receipt,
  Edit,
  Camera,
  LogIn,
  LogOut,
  Settings,
  UserPlus,
  Key,
  Trash2,
  Eye,
  EyeOff,
  FileDown,
  Download,
  Inbox,
  Phone,
  Mail,
  Video,
  Youtube
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- STATE LATAR BELAKANG ---
  const [heroBg, setHeroBg] = useState('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
  const [heroColor, setHeroColor] = useState('#1e3a8a');

  // --- STATE KONTAK LAYANAN ---
  const [contactInfo, setContactInfo] = useState({
    email: 'pengaduan@sekolah-bos.go.id',
    phone: '(021) 1500-BOS',
    hours: 'Senin - Jumat (08:00 - 16:00)'
  });

  // --- STATE AUTENTIKASI ADMIN ---
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [activeAdmin, setActiveAdmin] = useState(null);
  
  // Database Simulasi Akun Admin
  const [adminList, setAdminList] = useState([
    { id: 1, name: 'Administrator Utama', username: 'yusmukmin', password: 'adminbos', role: 'Super Admin' },
    { id: 2, name: 'Siti Aminah', username: 'managerbos', password: 'bos123', role: 'Manager BOS' },
    { id: 3, name: 'Pengelola Data BOS', username: 'pengelola', password: 'pengelola123', role: 'Pengelola Data' }
  ]);

  // --- STATE DATA KONTEN ---
  const [complaints, setComplaints] = useState([
    { id: 'BOS-2602-001', date: '20 Feb 2026', name: 'Anonim (Dilindungi)', phone: 'Rahasia', relation: 'Orang Tua / Wali Murid', category: 'Pungutan Liar (Pungli)', incidentDate: '2026-02-15', description: 'Ada oknum yang meminta iuran buku paket sebesar Rp 150.000 per siswa dengan alasan dana BOS belum cair.', status: 'Menunggu Review' },
    { id: 'BOS-2602-002', date: '18 Feb 2026', name: 'Ahmad Faisal', phone: '081234567890', relation: 'Masyarakat Umum', category: 'Penelantaran Fasilitas Sekolah', incidentDate: '2026-02-10', description: 'Plafon ruang kelas dibiarkan rusak berbulan-bulan padahal ada anggaran pemeliharaan. Sangat membahayakan.', status: 'Sedang Diinvestigasi' }
  ]);

  const [leaders, setLeaders] = useState({
    kepalaDinas: { name: 'Dr. H. Budi Santoso, M.Pd.', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' },
    managerBos: { name: 'Siti Aminah, S.E., M.Si.', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' }
  });

  const [activities, setActivities] = useState([
    { id: 1, title: 'Renovasi Laboratorium Komputer', date: '15 Feb 2026', category: 'Sarana Prasarana', mediaType: 'image', media: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', desc: 'Pengadaan 20 unit PC baru dan perbaikan instalasi jaringan.' },
    { id: 2, title: 'Buku Paket Kurikulum Merdeka', date: '02 Feb 2026', category: 'Perpustakaan', mediaType: 'image', media: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80', desc: 'Pembelian buku teks utama untuk seluruh siswa kelas 10 dan 11.' },
    { id: 3, title: 'Pemberitahuan Sosialisasi Dana BOS', date: '20 Feb 2026', category: 'Lainnya', mediaType: 'youtube', media: 'https://www.youtube.com/embed/tgbNymZ7vqY', desc: 'Saksikan video instruksional resmi terkait pedoman pencairan dana BOS.' }
  ]);

  const [news, setNews] = useState([
    { id: 1, title: 'Pembayaran Honorarium Guru Honorer Bulan Januari 2026', date: '05 Feb 2026', category: 'Pembayaran Honor', amount: 'Rp 15.000.000', summary: 'Pembayaran honor untuk 10 orang guru honorer dan 2 tenaga kependidikan sesuai dengan beban kerja berdasarkan SK Kepala Sekolah.' },
    { id: 2, title: 'Pengadaan Buku Teks Utama Kurikulum Merdeka Kelas 10', date: '20 Jan 2026', category: 'Pengembangan Perpustakaan', amount: 'Rp 45.500.000', summary: 'Pembelian 300 eksemplar buku teks utama mata pelajaran esensial dari penyedia SIPLah untuk menunjang kegiatan pembelajaran semester genap.' }
  ]);

  const [documents, setDocuments] = useState([
    { id: 1, title: 'Petunjuk Teknis (Juknis) BOS Reguler Tahun Anggaran 2026', date: '10 Jan 2026', size: '2.4 MB', type: 'PDF', desc: 'Dokumen resmi petunjuk teknis pengelolaan dan penggunaan Dana BOS tahun 2026.' },
    { id: 2, title: 'Surat Edaran Mendikbudristek tentang Transparansi BOS', date: '05 Jan 2026', size: '1.1 MB', type: 'PDF', desc: 'Aturan tambahan mengenai kewajiban publikasi RKAS dan realisasi oleh sekolah.' },
    { id: 3, title: 'Format Standar Pelaporan RKAS Semester 1 (2026)', date: '15 Des 2025', size: '850 KB', type: 'XLSX', desc: 'Template Excel untuk penyusunan RKAS yang akan disinkronisasi ke sistem ARKAS.' }
  ]);

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setActiveAdmin(null);
    setActiveTab('beranda');
    alert("Anda telah berhasil logout.");
  };

  const baseNavItems = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'transparansi', label: 'Transparansi Dana', icon: BarChart2 },
    { id: 'kegiatan', label: 'Galeri Kegiatan', icon: ImageIcon },
    { id: 'berita', label: 'Berita Penggunaan', icon: Newspaper },
    { id: 'juknis', label: 'Juknis BOS', icon: FileDown },
    { id: 'aduan', label: 'Layanan Aduan', icon: MessageSquare },
  ];

  const navItems = isAdminLoggedIn 
    ? [...baseNavItems, { id: 'admin-panel', label: 'Panel Admin', icon: Settings }]
    : baseNavItems;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="https://blogger.googleusercontent.com/img/a/AVvXsEj250HmexBF_zBJ_pAZb9A9i0lcrMDhaIyNUwIB_gpH1UelDZ4LitBlnesOMJ6ahxEbjirUMsBeGLlvqQ6T36Tm7fNwEzz849ULFFbbl5KLp3m6SlsZt8tQXqlac3qtE5ZGt_6VhrL-4Y9pFm8EMEIRu4Z0fLncqHlzabeI_UblDDiAR1xj2NqHdoqe5A=w400-h300" 
                alt="Logo Morowali Utara" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-extrabold text-blue-900 leading-tight">Portal BOS</h1>
                <p className="text-xs text-slate-500 font-bold tracking-wide uppercase">DINAS PENDIDIKAN DAN KEBUDAYAAN DAERAH<br className="md:hidden" /> KAB. MOROWALI UTARA</p>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1 items-center">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                const isAdminTab = item.id === 'admin-panel';
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive 
                        ? (isAdminTab ? 'bg-indigo-50 text-indigo-700' : 'bg-blue-50 text-blue-700')
                        : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                    }`}
                  >
                    <Icon size={18} className="mr-1.5" />
                    {item.label}
                  </button>
                );
              })}
              {isAdminLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="ml-2 flex items-center px-3 py-2 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  <LogOut size={18} className="mr-1.5" /> Keluar
                </button>
              )}
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-500 hover:text-slate-700 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setIsMenuOpen(false); }}
                    className={`flex w-full items-center px-3 py-3 rounded-md text-base font-medium ${
                      activeTab === item.id ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon size={20} className="mr-3" />
                    {item.label}
                  </button>
                );
              })}
              {isAdminLoggedIn && (
                <button
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                  className="flex w-full items-center px-3 py-3 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOut size={20} className="mr-3" /> Keluar
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="pb-20">
        {activeTab === 'beranda' && <BerandaView setActiveTab={setActiveTab} isAdminLoggedIn={isAdminLoggedIn} heroBg={heroBg} setHeroBg={setHeroBg} heroColor={heroColor} setHeroColor={setHeroColor} leaders={leaders} setLeaders={setLeaders} />}
        {activeTab === 'transparansi' && <TransparansiView />}
        {activeTab === 'kegiatan' && <KegiatanView isAdminLoggedIn={isAdminLoggedIn} activities={activities} setActivities={setActivities} />}
        {activeTab === 'berita' && <BeritaView isAdminLoggedIn={isAdminLoggedIn} news={news} setNews={setNews} />}
        {activeTab === 'juknis' && <JuknisView isAdminLoggedIn={isAdminLoggedIn} documents={documents} setDocuments={setDocuments} />}
        {activeTab === 'aduan' && <AduanView complaints={complaints} setComplaints={setComplaints} />}
        
        {activeTab === 'login' && (
          <LoginView setActiveTab={setActiveTab} setIsAdminLoggedIn={setIsAdminLoggedIn} setActiveAdmin={setActiveAdmin} adminList={adminList} />
        )}
        {activeTab === 'admin-panel' && isAdminLoggedIn && (
          <AdminPanelView activeAdmin={activeAdmin} adminList={adminList} setAdminList={setAdminList} complaints={complaints} setComplaints={setComplaints} contactInfo={contactInfo} setContactInfo={setContactInfo} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://blogger.googleusercontent.com/img/a/AVvXsEj250HmexBF_zBJ_pAZb9A9i0lcrMDhaIyNUwIB_gpH1UelDZ4LitBlnesOMJ6ahxEbjirUMsBeGLlvqQ6T36Tm7fNwEzz849ULFFbbl5KLp3m6SlsZt8tQXqlac3qtE5ZGt_6VhrL-4Y9pFm8EMEIRu4Z0fLncqHlzabeI_UblDDiAR1xj2NqHdoqe5A=w400-h300" 
                alt="Logo Morowali Utara" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-white text-xl font-bold">Portal BOS</span>
            </div>
            <p className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">
              DINAS PENDIDIKAN DAN KEBUDAYAAN DAERAH<br/>KAB. MOROWALI UTARA
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Mewujudkan pengelolaan Bantuan Operasional Sekolah yang transparan, akuntabel, dan tepat sasaran untuk kemajuan pendidikan Indonesia.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setActiveTab('transparansi')} className="hover:text-blue-400 transition-colors">Laporan Keuangan</button></li>
              <li><button onClick={() => setActiveTab('kegiatan')} className="hover:text-blue-400 transition-colors">Galeri Kegiatan</button></li>
              <li><button onClick={() => setActiveTab('berita')} className="hover:text-blue-400 transition-colors">Berita Penggunaan</button></li>
              <li><button onClick={() => setActiveTab('juknis')} className="hover:text-blue-400 transition-colors">Unduh Juknis BOS</button></li>
              <li><button onClick={() => setActiveTab('aduan')} className="hover:text-blue-400 transition-colors">Laporkan Penyelewengan</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak Layanan</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start"><Mail size={16} className="mr-2 shrink-0 mt-0.5" /> Email: {contactInfo.email}</li>
              <li className="flex items-start"><Phone size={16} className="mr-2 shrink-0 mt-0.5" /> Telp: {contactInfo.phone}</li>
              <li className="flex items-start"><AlertCircle size={16} className="mr-2 shrink-0 mt-0.5" /> Jam Layanan: {contactInfo.hours}</li>
            </ul>
            {!isAdminLoggedIn && (
              <div className="mt-6 pt-6 border-t border-slate-800">
                <button 
                  onClick={() => setActiveTab('login')} 
                  className="text-xs text-slate-500 hover:text-white flex items-center transition-colors"
                >
                  <Lock size={12} className="mr-1" /> Login Admin / Pengelola
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          &copy; 2026 DINAS PENDIDIKAN DAN KEBUDAYAAN DAERAH KAB. MOROWALI UTARA. Sistem Informasi Bantuan Operasional Sekolah. Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
}

// --- VIEW: BERANDA ---
function BerandaView({ setActiveTab, isAdminLoggedIn, heroBg, setHeroBg, heroColor, setHeroColor, leaders, setLeaders }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(leaders);

  const handleSaveLeaders = () => {
    setLeaders(editData);
    setShowEditModal(false);
    alert("Profil Pimpinan berhasil diperbarui!");
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: heroColor }}>
        {isAdminLoggedIn && (
          <div className="absolute top-6 right-6 z-20 flex flex-col sm:flex-row gap-3">
            <label className="cursor-pointer bg-black/30 hover:bg-black/50 backdrop-blur-md text-white border border-white/20 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center transition-all shadow-lg relative overflow-hidden">
              <div className="w-4 h-4 rounded-full mr-2 border border-white/50 shadow-sm" style={{ backgroundColor: heroColor }}></div>
              Ganti Warna
              <input type="color" value={heroColor} onChange={(e) => setHeroColor(e.target.value)} className="absolute opacity-0 w-full h-full cursor-pointer left-0 top-0" />
            </label>
            <label className="cursor-pointer bg-black/30 hover:bg-black/50 backdrop-blur-md text-white border border-white/20 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center transition-all shadow-lg">
              <Camera size={16} className="mr-2" /> Ganti Gambar
              <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                if(e.target.files && e.target.files[0]) {
                  const url = URL.createObjectURL(e.target.files[0]);
                  setHeroBg(url);
                }
              }}/>
            </label>
          </div>
        )}
        <div className="absolute inset-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-20 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
          <div className="md:w-2/3">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800 text-blue-200 text-sm font-semibold mb-6 border border-blue-700">Tahun Anggaran 2026</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Transparansi Dana BOS <br/>Untuk Masa Depan Pendidikan</h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">Platform terpadu untuk memantau alokasi dana, melihat galeri kegiatan sekolah, serta memberikan masukan dan aduan demi akuntabilitas pendidikan.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => setActiveTab('aduan')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center">
                Buat Aduan / Laporan <ChevronRight className="ml-2" size={20} />
              </button>
              <button onClick={() => setActiveTab('transparansi')} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
                Lihat Alokasi Dana
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6"><Shield size={32} /></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Akuntabel & Aman</h3>
            <p className="text-slate-600">Seluruh laporan dan aduan diproses dengan sistem keamanan tinggi dan jaminan kerahasiaan pelapor.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"><Users size={32} /></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Partisipasi Publik</h3>
            <p className="text-slate-600">Melibatkan wali murid dan masyarakat dalam mengawasi penggunaan dana untuk fasilitas terbaik.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6"><BarChart2 size={32} /></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Laporan Real-time</h3>
            <p className="text-slate-600">Pantau grafik serapan dan realisasi anggaran secara langsung melalui dashboard transparansi.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-10 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Susunan Pengurus</h2>
            <p className="text-slate-600 mt-2">Penanggung jawab utama pengelolaan Dana BOS Kabupaten Morowali Utara.</p>
          </div>
          {isAdminLoggedIn && (
            <button onClick={() => { setEditData(leaders); setShowEditModal(true); }} className="flex items-center text-sm font-semibold text-indigo-700 bg-indigo-100 px-5 py-2.5 rounded-xl hover:bg-indigo-200 transition-colors shadow-sm">
              <Edit size={16} className="mr-2" /> Update Profil (Admin)
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-center space-x-6 hover:shadow-md transition-shadow">
            <img src={leaders.kepalaDinas.photo} alt="Kepala Dinas" className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-slate-50" />
            <div>
              <p className="text-sm text-blue-600 font-extrabold uppercase tracking-wider mb-1">Kepala Dinas Pendidikan</p>
              <h3 className="text-xl font-bold text-slate-800">{leaders.kepalaDinas.name}</h3>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-center space-x-6 hover:shadow-md transition-shadow">
            <img src={leaders.managerBos.photo} alt="Manager BOS" className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-slate-50" />
            <div>
              <p className="text-sm text-orange-600 font-extrabold uppercase tracking-wider mb-1">Manager BOS</p>
              <h3 className="text-xl font-bold text-slate-800">{leaders.managerBos.name}</h3>
            </div>
          </div>
        </div>
      </div>

      {showEditModal && isAdminLoggedIn && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl sticky top-0 z-10">
              <h3 className="text-xl font-bold text-slate-800 flex items-center"><Edit className="mr-2 text-blue-600" /> Update Profil Pimpinan</h3>
              <button onClick={() => setShowEditModal(false)} className="text-slate-400 hover:text-slate-600 bg-white rounded-full p-1 shadow-sm"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>
            <div className="p-6 space-y-8">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Data Kepala Dinas</h4>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Nama Lengkap & Gelar</label>
                  <input type="text" value={editData.kepalaDinas.name} onChange={(e) => setEditData({...editData, kepalaDinas: {...editData.kepalaDinas, name: e.target.value}})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Foto</label>
                  <div className="flex items-center space-x-4">
                    <img src={editData.kepalaDinas.photo} alt="Preview" className="w-16 h-16 rounded-full object-cover border border-slate-200" />
                    <label className="cursor-pointer bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 flex items-center transition-colors">
                      <Camera size={16} className="mr-2" /> Ganti Foto
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => { if(e.target.files && e.target.files[0]) { setEditData({...editData, kepalaDinas: {...editData.kepalaDinas, photo: URL.createObjectURL(e.target.files[0])}}); } }}/>
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Data Manager BOS</h4>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Nama Lengkap & Gelar</label>
                  <input type="text" value={editData.managerBos.name} onChange={(e) => setEditData({...editData, managerBos: {...editData.managerBos, name: e.target.value}})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Foto</label>
                  <div className="flex items-center space-x-4">
                    <img src={editData.managerBos.photo} alt="Preview" className="w-16 h-16 rounded-full object-cover border border-slate-200" />
                    <label className="cursor-pointer bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 flex items-center transition-colors">
                      <Camera size={16} className="mr-2" /> Ganti Foto
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => { if(e.target.files && e.target.files[0]) { setEditData({...editData, managerBos: {...editData.managerBos, photo: URL.createObjectURL(e.target.files[0])}}); } }}/>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 flex justify-end space-x-3 bg-slate-50 rounded-b-2xl sticky bottom-0">
              <button onClick={() => setShowEditModal(false)} className="px-5 py-2.5 text-slate-600 font-semibold hover:bg-slate-200 rounded-lg transition-colors">Batal</button>
              <button onClick={handleSaveLeaders} className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/30 transition-colors flex items-center"><CheckCircle2 size={18} className="mr-2" /> Simpan Perubahan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- VIEW: TRANSPARANSI ---
function TransparansiView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Dashboard Transparansi</h2>
        <p className="text-slate-600 text-lg">Ringkasan alokasi dan penggunaan dana BOS Tahun Ajaran 2025/2026.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">Total Pagu Anggaran</p>
          <h3 className="text-3xl font-extrabold text-blue-700">Rp 1.250.000.000</h3>
          <div className="mt-4 flex items-center text-sm text-green-600 font-medium"><CheckCircle2 size={16} className="mr-1" /> Telah Cair 100%</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">Total Realisasi</p>
          <h3 className="text-3xl font-extrabold text-slate-800">Rp 845.500.000</h3>
          <div className="mt-4 flex items-center text-sm text-blue-600 font-medium"><BarChart2 size={16} className="mr-1" /> Serapan 67.6%</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">Sisa Saldo</p>
          <h3 className="text-3xl font-extrabold text-green-600">Rp 404.500.000</h3>
          <div className="mt-4 w-full bg-slate-100 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: '32.4%' }}></div></div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Rincian Penggunaan Berdasarkan Komponen</h3>
        <div className="space-y-6">
          {[
            { label: 'Pengembangan Perpustakaan', amount: 'Rp 150.000.000', pct: 80, color: 'bg-blue-500' },
            { label: 'Kegiatan Pembelajaran & Ekstrakurikuler', amount: 'Rp 320.000.000', pct: 65, color: 'bg-purple-500' },
            { label: 'Pemeliharaan Sarana & Prasarana', amount: 'Rp 210.500.000', pct: 90, color: 'bg-orange-500' },
            { label: 'Pengembangan Profesi Guru', amount: 'Rp 85.000.000', pct: 45, color: 'bg-green-500' },
            { label: 'Pembayaran Honor', amount: 'Rp 80.000.000', pct: 100, color: 'bg-red-500' },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-end mb-2"><span className="font-semibold text-slate-700">{item.label}</span><span className="text-slate-600 font-medium">{item.amount}</span></div>
              <div className="w-full bg-slate-100 rounded-full h-3"><div className={`${item.color} h-3 rounded-full transition-all duration-1000`} style={{ width: `${item.pct}%` }}></div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- VIEW: KEGIATAN & UPLOAD ---
function KegiatanView({ isAdminLoggedIn, activities, setActivities }) {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleUpload = () => {
    const titleInput = document.getElementById('kegiatan-title')?.value || 'Kegiatan Baru';
    const categoryInput = document.getElementById('kegiatan-kategori')?.value || 'Umum';
    const descInput = document.getElementById('kegiatan-desc')?.value || 'Deskripsi kegiatan.';
    const fileInput = document.getElementById('kegiatan-file');
    const youtubeInput = document.getElementById('kegiatan-youtube')?.value || '';
    
    let mediaUrl = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80';
    let mediaType = 'image';

    if (youtubeInput) {
      const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
      const match = youtubeInput.match(ytRegex);
      if (match && match[1]) {
        mediaUrl = `https://www.youtube.com/embed/${match[1]}`;
        mediaType = 'youtube';
      }
    } else if (fileInput && fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      mediaUrl = URL.createObjectURL(file);
      if (file.type.startsWith('video/')) {
        mediaType = 'video';
      }
    } else if (titleInput.toLowerCase().includes('video')) {
      mediaUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';
      mediaType = 'video';
    }
    
    const newAct = {
      id: Date.now(),
      title: titleInput,
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      category: categoryInput,
      media: mediaUrl,
      mediaType: mediaType,
      desc: descInput
    };
    
    setActivities([newAct, ...activities]);
    setIsSuccess(true);
    setTimeout(() => { setIsSuccess(false); setShowUploadModal(false); }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Dokumentasi Kegiatan</h2>
          <p className="text-slate-600 text-lg">Galeri foto dan video pelaksanaan program sekolah yang didanai oleh BOS.</p>
        </div>
        {isAdminLoggedIn && (
          <button onClick={() => setShowUploadModal(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md flex items-center shrink-0">
            <Upload className="mr-2" size={20} /> Upload Media Baru (Admin)
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map(act => (
          <div key={act.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300 group flex flex-col">
            <div className="h-48 overflow-hidden relative bg-slate-900 flex items-center justify-center">
              {act.mediaType === 'youtube' ? (
                <iframe className="w-full h-full object-cover" src={act.media} title={act.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              ) : act.mediaType === 'video' ? (
                <video src={act.media} controls className="w-full h-full object-cover" />
              ) : (
                <img src={act.media || act.img} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              )}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10 pointer-events-none">{act.category}</div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-xs text-slate-500 mb-2 flex items-center"><FileText size={14} className="mr-1" /> {act.date}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">{act.title}</h3>
              <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {showUploadModal && isAdminLoggedIn && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            {isSuccess ? (
              <div className="p-12 text-center animate-in zoom-in duration-300">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={48} /></div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Media Berhasil Diunggah!</h3>
                <p className="text-slate-600">Video / Foto dokumentasi kegiatan telah dipublikasikan ke Galeri Publik.</p>
              </div>
            ) : (
              <>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center"><Upload className="mr-2 text-blue-600" /> Form Upload Media Kegiatan</h3>
                  <button onClick={() => setShowUploadModal(false)} className="text-slate-400 hover:text-slate-600 bg-white rounded-full p-1 shadow-sm"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Judul Kegiatan</label>
                    <input id="kegiatan-title" type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Contoh: Video Kegiatan Lomba 17 Agustus" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Kategori</label>
                      <select id="kegiatan-kategori" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                        <option>Pilih Kategori Komponen</option>
                        <option>Perpustakaan</option>
                        <option>Ekstrakurikuler</option>
                        <option>Sarana Prasarana</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Tanggal Pelaksanaan</label>
                      <input type="date" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Deskripsi & Rincian</label>
                    <textarea id="kegiatan-desc" rows="3" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder="Jelaskan detail kegiatan dan dokumentasi..."></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Upload File dari Komputer (Opsional)</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-slate-50 hover:bg-blue-50 hover:border-blue-400 transition-colors cursor-pointer group relative overflow-hidden">
                      <input type="file" id="kegiatan-file" accept="image/*,video/mp4,video/x-m4v,video/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      <div className="flex justify-center space-x-4 mb-2">
                        <ImageIcon className="text-slate-400 group-hover:text-blue-500" size={28} />
                        <Video className="text-slate-400 group-hover:text-blue-500" size={28} />
                      </div>
                      <p className="text-sm font-medium text-slate-600">Klik atau seret file Foto/Video ke sini</p>
                    </div>
                  </div>
                  <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="mx-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Atau</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Sematkan Link Video YouTube</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-red-500"><Youtube size={20} /></div>
                      <input id="kegiatan-youtube" type="url" className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Contoh: https://www.youtube.com/watch?v=XXXXXXX" />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">* Kosongkan bagian "Upload File" di atas jika Anda ingin menggunakan Link YouTube.</p>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-100 flex justify-end space-x-3 bg-slate-50 rounded-b-2xl">
                  <button onClick={() => setShowUploadModal(false)} className="px-5 py-2.5 text-slate-600 font-semibold hover:bg-slate-200 rounded-lg transition-colors">Batal</button>
                  <button onClick={handleUpload} className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/30 transition-colors flex items-center"><CheckCircle2 size={18} className="mr-2" /> Simpan Publikasi</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// --- VIEW: BERITA PENGGUNAAN DANA ---
function BeritaView({ isAdminLoggedIn, news, setNews }) {
  const [showForm, setShowForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePublish = () => {
    const titleInput = document.getElementById('berita-title')?.value || 'Berita Penggunaan Dana Baru';
    const categoryInput = document.getElementById('berita-kategori')?.value || 'Lainnya';
    const amountInput = document.getElementById('berita-amount')?.value || '0';
    
    const newNewsItem = {
      id: Date.now(),
      title: titleInput,
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      category: categoryInput,
      amount: `Rp ${Number(amountInput).toLocaleString('id-ID')}`,
      summary: 'Rincian penggunaan dana telah dilaporkan sesuai dengan komponen BOS yang berlaku dan bukti sah telah terlampir.'
    };

    setNews([newNewsItem, ...news]);
    setIsSuccess(true);
    setTimeout(() => { setIsSuccess(false); setShowForm(false); }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Berita Penggunaan Dana</h2>
          <p className="text-slate-600 text-lg">Laporan detail rincian pengeluaran dan pemanfaatan dana BOS beserta buktinya.</p>
        </div>
        {isAdminLoggedIn && (
          <button onClick={() => setShowForm(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md flex items-center shrink-0">
            <FileText className="mr-2" size={20} /> Input Berita Baru (Admin)
          </button>
        )}
      </div>

      <div className="space-y-6">
        {news.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex flex-col justify-center items-center bg-slate-50 rounded-xl p-4 border border-slate-100 text-center shrink-0">
              <DollarSign className="text-green-500 mb-2" size={32} />
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Total Nilai</p>
              <h4 className="text-xl font-extrabold text-slate-800">{item.amount}</h4>
            </div>
            <div className="md:w-3/4 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{item.category}</span>
                <span className="text-sm text-slate-500 flex items-center"><Newspaper size={14} className="mr-1" /> {item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{item.summary}</p>
              <div><button className="text-blue-600 font-semibold text-sm hover:text-blue-800 flex items-center bg-blue-50 px-4 py-2 rounded-lg transition-colors"><FileText size={16} className="mr-2" /> Baca Selengkapnya <ChevronRight size={16} className="ml-1" /></button></div>
            </div>
          </div>
        ))}
      </div>

      {showForm && isAdminLoggedIn && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            {isSuccess ? (
              <div className="p-12 text-center animate-in zoom-in duration-300">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={48} /></div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Berita Berhasil Dipublikasikan!</h3>
                <p className="text-slate-600">Laporan penggunaan dana telah ditambahkan ke sistem transparansi publik.</p>
              </div>
            ) : (
              <>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl sticky top-0 z-10">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center"><FileText className="mr-2 text-blue-600" /> Form Input Penggunaan Dana BOS</h3>
                  <button onClick={() => setShowForm(false)} className="text-slate-400 hover:text-slate-600 bg-white rounded-full p-1 shadow-sm"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </div>
                <div className="p-6 space-y-6">
                  <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm mb-2 border border-blue-100 flex items-start"><AlertCircle size={20} className="mr-3 shrink-0 mt-0.5" /><p>Pastikan data nominal yang Anda masukkan sesuai dengan yang tercatat dalam RKAS.</p></div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Judul Laporan/Berita <span className="text-red-500">*</span></label>
                    <input id="berita-title" type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Contoh: Pembayaran Jasa Internet Bulan Maret" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Kategori Komponen BOS <span className="text-red-500">*</span></label>
                      <select id="berita-kategori" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                        <option value="">Pilih Komponen...</option><option>Pengembangan Perpustakaan</option><option>Kegiatan Ekstrakurikuler</option><option>Kegiatan Asesmen/Evaluasi</option><option>Administrasi Kegiatan Sekolah</option><option>Pengembangan Profesi Guru</option><option>Langganan Daya dan Jasa</option><option>Pemeliharaan Sarana dan Prasarana</option><option>Penyediaan Alat Multi Media</option><option>Pembayaran Honor</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Tanggal Realisasi <span className="text-red-500">*</span></label>
                      <input type="date" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Total Nominal Penggunaan <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><span className="text-slate-500 font-bold">Rp</span></div>
                      <input id="berita-amount" type="number" className="w-full border border-slate-300 rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="0" />
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-100 flex justify-end space-x-3 bg-slate-50 rounded-b-2xl sticky bottom-0">
                  <button onClick={() => setShowForm(false)} className="px-5 py-2.5 text-slate-600 font-semibold hover:bg-slate-200 rounded-lg transition-colors">Batal</button>
                  <button onClick={handlePublish} className="px-6 py-2.5 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 shadow-md shadow-green-500/30 transition-colors flex items-center"><CheckCircle2 size={18} className="mr-2" /> Publikasikan Berita</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// --- VIEW: JUKNIS BOS & PEMBERITAHUAN ---
function JuknisView({ isAdminLoggedIn, documents, setDocuments }) {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownload = (title) => { alert(`Mendownload file: ${title} ... \n(Ini adalah simulasi download)`); };

  const handleUpload = () => {
    const titleInput = document.getElementById('juknis-title')?.value || 'Dokumen Juknis Baru';
    const descInput = document.getElementById('juknis-desc')?.value || 'Tidak ada deskripsi.';
    const fileInput = document.getElementById('file-upload');
    let ext = 'PDF';
    if(fileInput && fileInput.value) { const parts = fileInput.value.split('.'); ext = parts[parts.length-1].toUpperCase(); }
    const newDoc = { id: Date.now(), title: titleInput, date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }), size: '1.5 MB', type: ext.length > 4 ? 'DOC' : ext, desc: descInput };
    setDocuments([newDoc, ...documents]);
    setIsSuccess(true);
    setTimeout(() => { setIsSuccess(false); setShowUploadModal(false); }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Dokumen & Juknis BOS</h2>
          <p className="text-slate-600 text-lg">Pusat unduhan surat edaran, peraturan, dan petunjuk teknis pengelolaan dana.</p>
        </div>
        {isAdminLoggedIn && (
          <button onClick={() => setShowUploadModal(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md flex items-center shrink-0">
            <Upload className="mr-2" size={20} /> Upload Dokumen Baru (Admin)
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map(doc => (
          <div key={doc.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm ${doc.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>{doc.type}</div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{doc.size}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight line-clamp-2" title={doc.title}>{doc.title}</h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">{doc.desc}</p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">{doc.date}</span>
              <button onClick={() => handleDownload(doc.title)} className="flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"><Download size={16} className="mr-2" /> Unduh</button>
            </div>
          </div>
        ))}
      </div>

      {showUploadModal && isAdminLoggedIn && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
            {isSuccess ? (
              <div className="p-12 text-center animate-in zoom-in duration-300">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={48} /></div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Berkas Berhasil Diunggah!</h3>
                <p className="text-slate-600">Dokumen Juknis/Pemberitahuan telah tersedia dan siap diunduh oleh publik.</p>
              </div>
            ) : (
              <>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center"><Upload className="mr-2 text-indigo-600" /> Upload Dokumen Juknis</h3>
                  <button onClick={() => setShowUploadModal(false)} className="text-slate-400 hover:text-slate-600 bg-white rounded-full p-1 shadow-sm"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                </div>
                <div className="p-6 space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Judul Dokumen / Peraturan</label>
                    <input id="juknis-title" type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Contoh: Salinan Juknis BOS 2026" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Deskripsi Singkat</label>
                    <textarea id="juknis-desc" rows="2" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none resize-none" placeholder="Jelaskan secara singkat isi dokumen ini..."></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Upload File</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 hover:bg-indigo-50 hover:border-indigo-400 transition-colors cursor-pointer group">
                      <FileDown className="mx-auto text-slate-400 group-hover:text-indigo-500 mb-3" size={32} />
                      <p className="text-sm font-medium text-slate-600">Pilih dokumen dari komputer Anda</p>
                      <p className="text-xs text-slate-400 mt-1">Format didukung: PDF, DOCX, XLSX (Maks. 20MB)</p>
                      <input type="file" className="hidden" id="file-upload" />
                      <label htmlFor="file-upload" className="mt-4 inline-block px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-indigo-600 cursor-pointer shadow-sm hover:bg-slate-50">Cari File</label>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-100 flex justify-end space-x-3 bg-slate-50">
                  <button onClick={() => setShowUploadModal(false)} className="px-5 py-2.5 text-slate-600 font-semibold hover:bg-slate-200 rounded-lg transition-colors">Batal</button>
                  <button onClick={handleUpload} className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 shadow-md shadow-indigo-500/30 transition-colors flex items-center"><CheckCircle2 size={18} className="mr-2" /> Upload Dokumen</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// --- VIEW: KOTAK ADUAN LENGKAP ---
function AduanView({ complaints, setComplaints }) {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newId = `BOS-2602-${String(Math.floor(Math.random() * 900) + 100)}`;
    const relationMap = { 'wali': 'Orang Tua / Wali Murid', 'guru': 'Guru / Tenaga Pendidik', 'siswa': 'Siswa', 'masyarakat': 'Masyarakat Umum' };
    const categoryMap = { 'pungli': 'Pungutan Liar (Pungli)', 'fiktif': 'Pembelian/Pengadaan Fiktif', 'mark-up': 'Penggelembungan Harga (Mark-up)', 'fasilitas': 'Penelantaran Fasilitas Sekolah', 'lainnya': 'Lainnya' };
    
    const newComplaint = {
      id: newId,
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      name: isAnonymous ? 'Anonim (Dilindungi)' : form.reporterName.value,
      phone: isAnonymous ? 'Rahasia' : form.phone.value,
      relation: relationMap[form.relation.value] || form.relation.value,
      category: categoryMap[form.category.value] || form.category.value,
      incidentDate: form.incidentDate.value,
      description: form.description.value,
      status: 'Menunggu Review'
    };

    setComplaints([newComplaint, ...complaints]);
    setTicketId(newId);
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); if(form) form.reset(); setIsAnonymous(false); }, 8000); 
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 animate-in zoom-in duration-300">
        <div className="bg-white rounded-3xl p-10 text-center shadow-xl border border-slate-100">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={48} /></div>
          <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Laporan Berhasil Terkirim!</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">Terima kasih atas kepedulian Anda. Nomor tiket laporan Anda adalah <span className="font-bold text-blue-600">#{ticketId}</span>. Laporan ini telah masuk secara rahasia ke panel Admin untuk segera ditindaklanjuti.</p>
          <button onClick={() => setIsSubmitted(false)} className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">Kirim Laporan Lain</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in slide-in-from-right-8 duration-500">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-10 shadow-lg shadow-orange-500/20">
        <div className="flex items-start md:items-center">
          <AlertCircle size={40} className="mr-5 shrink-0 opacity-80 mt-1 md:mt-0" />
          <div>
            <h2 className="text-2xl font-bold mb-2">Layanan Pengaduan & Pelaporan BOS</h2>
            <p className="text-orange-50 leading-relaxed text-sm md:text-base">Laporkan indikasi penyelewengan, pungutan liar, atau penyalahgunaan dana BOS di lingkungan sekolah. Identitas Anda dijamin kerahasiaannya oleh sistem (Whistleblower Protection).</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-xl font-bold text-slate-800 mb-1">Formulir Pengaduan Resmi</h3>
          <p className="text-sm text-slate-500">Mohon isi data dengan sebenar-benarnya untuk mempermudah proses investigasi.</p>
        </div>
        <div className="p-8 space-y-8">
          <div className="space-y-5 relative">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-slate-800 flex items-center"><span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm mr-3">1</span>Data Pelapor</h4>
              <label className="flex items-center cursor-pointer bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition-colors">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 mr-2 cursor-pointer" checked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)} />
                <span className="text-sm font-bold text-slate-700 flex items-center"><Lock size={14} className="mr-1" /> Sembunyikan Identitas (Anonim)</span>
              </label>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${isAnonymous ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap <span className="text-red-500">*</span></label>
                <input name="reporterName" required={!isAnonymous} type="text" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nomor Telepon / WhatsApp <span className="text-red-500">*</span></label>
                <input name="phone" required={!isAnonymous} type="tel" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="08xxxxxxxxxx" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Hubungan dengan Sekolah <span className="text-red-500">*</span></label>
                <select name="relation" required className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                  <option value="">Pilih Status Anda...</option><option value="wali">Orang Tua / Wali Murid</option><option value="guru">Guru / Tenaga Pendidik</option><option value="siswa">Siswa</option><option value="masyarakat">Masyarakat Umum</option>
                </select>
              </div>
            </div>
            {isAnonymous && (
              <div className="absolute inset-0 top-12 flex items-center justify-center bg-white/40 backdrop-blur-[2px] rounded-xl z-10">
                <div className="bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg flex items-center"><Lock size={16} className="mr-2 text-yellow-400" /> Mode Anonim Aktif: Identitas tidak dilampirkan.</div>
              </div>
            )}
          </div>
          <hr className="border-slate-200" />
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-800 flex items-center mb-4"><span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm mr-3">2</span>Detail Laporan</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Kategori Pelanggaran <span className="text-red-500">*</span></label>
                <select name="category" required className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                  <option value="">Pilih Kategori Laporan...</option><option value="pungli">Pungutan Liar (Pungli)</option><option value="fiktif">Pembelian/Pengadaan Fiktif</option><option value="mark-up">Penggelembungan Harga (Mark-up)</option><option value="fasilitas">Penelantaran Fasilitas Sekolah</option><option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Perkiraan Tanggal Kejadian <span className="text-red-500">*</span></label>
                <input name="incidentDate" required type="date" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Uraian Kejadian Lengkap <span className="text-red-500">*</span></label>
              <textarea name="description" required rows="5" className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-y" placeholder="Ceritakan kronologi kejadian (Siapa, Apa, Kapan, Dimana, dan Bagaimana)..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Lampirkan Bukti (Foto/Dokumen/Audio)</label>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer group flex flex-col items-center">
                <Upload className="text-slate-400 group-hover:text-blue-500 mb-2" size={28} />
                <span className="text-sm font-medium text-slate-600 mb-1">Klik untuk melampirkan file pendukung</span>
                <span className="text-xs text-slate-400">Format: JPG, PDF, MP3, MP4 (Maks 10MB)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 leading-relaxed max-w-lg">Dengan menekan tombol kirim, Anda menyatakan bahwa laporan yang diberikan adalah benar dan tidak mengandung unsur fitnah berdasarkan hukum yang berlaku.</p>
          <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center"><Shield size={18} className="mr-2" /> Kirim Aduan Sekarang</button>
        </div>
      </form>
    </div>
  );
}

// --- VIEW: ADMIN PANEL (Kelola & Ganti Password) ---
function AdminPanelView({ activeAdmin, adminList, setAdminList, complaints, setComplaints, contactInfo, setContactInfo }) {
  const [activeAdminTab, setActiveAdminTab] = useState('aduan'); 
  const [newAdmin, setNewAdmin] = useState({ name: '', username: '', password: '', role: 'Admin Sekolah' });
  const [showNewAdminPass, setShowNewAdminPass] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [showEditAdminPass, setShowEditAdminPass] = useState(false);
  const [passData, setPassData] = useState({ oldPass: '', newPass: '', confirmPass: '' });
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [editContact, setEditContact] = useState(contactInfo);

  const handleAddAdmin = (e) => {
    e.preventDefault();
    if(adminList.find(u => u.username === newAdmin.username)) { alert("Username sudah digunakan!"); return; }
    setAdminList([...adminList, { ...newAdmin, id: Date.now() }]);
    setNewAdmin({ name: '', username: '', password: '', role: 'Admin Sekolah' });
    alert("Admin baru berhasil ditambahkan!");
  };

  const handleDeleteAdmin = (id) => {
    if (activeAdmin.username !== 'yusmukmin') { alert("Akses Ditolak: Hanya Super Admin Utama yang berhak menghapus akun pengelola lain!"); return; }
    const targetAdmin = adminList.find(admin => admin.id === id);
    if(targetAdmin && targetAdmin.username === 'yusmukmin') { alert("Akses Ditolak: Akun Super Admin Utama dilindungi sistem dan tidak dapat dihapus!"); return; }
    if(id === activeAdmin.id) { alert("Anda tidak dapat menghapus akun Anda sendiri yang sedang aktif!"); return; }
    if(window.confirm(`Yakin ingin menghapus pengelola "${targetAdmin?.name}"?`)) { setAdminList(adminList.filter(admin => admin.id !== id)); }
  };

  const handleSaveEditAdmin = (e) => {
    e.preventDefault();
    if(adminList.find(u => u.username === editingAdmin.username && u.id !== editingAdmin.id)) { alert("Username sudah digunakan oleh pengelola lain!"); return; }
    setAdminList(adminList.map(admin => admin.id === editingAdmin.id ? editingAdmin : admin));
    setEditingAdmin(null);
    setShowEditAdminPass(false);
    alert("Data pengelola berhasil diperbarui!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (activeAdmin.username === 'yusmukmin') { alert("Akses Ditolak: Password akun Super Admin Utama dikunci oleh sistem untuk keamanan dan tidak dapat diubah!"); setPassData({ oldPass: '', newPass: '', confirmPass: '' }); return; }
    if (passData.oldPass !== activeAdmin.password) { alert("Password lama salah!"); return; }
    if (passData.newPass !== passData.confirmPass) { alert("Konfirmasi password baru tidak cocok!"); return; }
    const updatedList = adminList.map(admin => { if(admin.id === activeAdmin.id) { return { ...admin, password: passData.newPass }; } return admin; });
    setAdminList(updatedList);
    activeAdmin.password = passData.newPass;
    setPassData({ oldPass: '', newPass: '', confirmPass: '' });
    alert("Password berhasil diperbarui!");
  };

  const handleSaveContact = (e) => { e.preventDefault(); setContactInfo(editContact); alert("Informasi Kontak Layanan berhasil diperbarui!"); };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Panel Pengaturan Admin</h2>
        <p className="text-slate-600">Selamat datang, <span className="font-bold text-blue-600">{activeAdmin?.name}</span> ({activeAdmin?.role})</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
            <div className="p-4 bg-slate-50 border-b border-slate-100"><p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Menu Pengaturan</p></div>
            <div className="p-2 space-y-1">
              <button onClick={() => setActiveAdminTab('aduan')} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeAdminTab === 'aduan' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                <div className="flex items-center"><Inbox size={18} className="mr-3" /> Data Aduan</div>
                {complaints.filter(c => c.status === 'Baru' || c.status === 'Menunggu Review').length > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{complaints.filter(c => c.status === 'Baru' || c.status === 'Menunggu Review').length}</span>
                )}
              </button>
              <button onClick={() => setActiveAdminTab('users')} className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeAdminTab === 'users' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}><Users size={18} className="mr-3" /> Kelola Admin</button>
              <button onClick={() => setActiveAdminTab('kontak')} className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeAdminTab === 'kontak' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}><Phone size={18} className="mr-3" /> Pengaturan Kontak</button>
              <button onClick={() => setActiveAdminTab('password')} className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeAdminTab === 'password' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}><Key size={18} className="mr-3" /> Ganti Password</button>
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          {activeAdminTab === 'aduan' && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center"><Inbox className="mr-2 text-indigo-600" size={20}/> Kotak Masuk Pengaduan</h3>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">Rahasia & Terenkripsi</span>
                </div>
                <div className="divide-y divide-slate-100">
                  {complaints.length === 0 ? ( <div className="p-8 text-center text-slate-500 font-medium">Belum ada aduan yang masuk.</div> ) : (
                    complaints.map((aduan) => (
                      <div key={aduan.id} className="p-6 hover:bg-slate-50 transition-colors">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">{aduan.id}</span>
                              <span className="text-xs font-medium text-slate-500">{aduan.date}</span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-800">{aduan.category}</h4>
                            <p className="text-sm font-medium text-slate-600 mt-1">Pelapor: <span className="text-slate-800 font-bold">{aduan.name}</span> ({aduan.relation})</p>
                            <p className="text-sm text-slate-500">Kontak: {aduan.phone}</p>
                          </div>
                          <div className="shrink-0 w-full md:w-auto">
                            <select value={aduan.status} onChange={(e) => { const newStatus = e.target.value; setComplaints(complaints.map(c => c.id === aduan.id ? {...c, status: newStatus} : c)); }} className={`w-full text-sm font-bold px-3 py-2 rounded-lg outline-none border shadow-sm cursor-pointer ${aduan.status === 'Selesai' ? 'bg-green-50 text-green-700 border-green-200 focus:ring-green-500' : aduan.status === 'Sedang Diinvestigasi' ? 'bg-orange-50 text-orange-700 border-orange-200 focus:ring-orange-500' : 'bg-red-50 text-red-700 border-red-200 focus:ring-red-500'}`}>
                              <option value="Menunggu Review">Menunggu Review</option><option value="Sedang Diinvestigasi">Sedang Diinvestigasi</option><option value="Selesai">Selesai</option>
                            </select>
                          </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-5 text-sm text-slate-700 leading-relaxed shadow-sm">
                          <p className="font-semibold text-slate-800 mb-2 text-xs uppercase tracking-wider">Isi Laporan / Kronologi:</p>
                          {aduan.description}
                          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center"><AlertCircle size={14} className="mr-1.5" /> Tanggal Perkiraan Kejadian: <span className="font-semibold text-slate-700 ml-1">{aduan.incidentDate}</span></div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
          {activeAdminTab === 'users' && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              {activeAdmin.username === 'yusmukmin' ? (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center border-b border-slate-100 pb-3"><UserPlus className="mr-2 text-indigo-600" size={20}/> Tambah Pengelola Baru</h3>
                  <form onSubmit={handleAddAdmin} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div><label className="block text-sm font-semibold text-slate-700 mb-1">Nama Lengkap</label><input required type="text" value={newAdmin.name} onChange={e => setNewAdmin({...newAdmin, name: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Role/Jabatan</label>
                      <select value={newAdmin.role} onChange={e => setNewAdmin({...newAdmin, role: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"><option>Super Admin</option><option>Manager BOS</option><option>Pengelola Data</option><option>Admin Sekolah</option><option>Auditor</option></select>
                    </div>
                    <div><label className="block text-sm font-semibold text-slate-700 mb-1">Username Login</label><input required type="text" value={newAdmin.username} onChange={e => setNewAdmin({...newAdmin, username: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Password Awal</label>
                      <div className="relative">
                        <input required type={showNewAdminPass ? "text" : "password"} value={newAdmin.password} onChange={e => setNewAdmin({...newAdmin, password: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 pr-10 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" />
                        <button type="button" onClick={() => setShowNewAdminPass(!showNewAdminPass)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors">{showNewAdminPass ? <EyeOff size={16} /> : <Eye size={16} />}</button>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex justify-end mt-2"><button type="submit" className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 shadow-md transition-colors flex items-center"><CheckCircle2 size={18} className="mr-2" /> Simpan Admin</button></div>
                  </form>
                </div>
              ) : (
                <div className="bg-indigo-50 text-indigo-800 p-5 rounded-2xl text-sm border border-indigo-100 flex items-start shadow-sm"><Lock size={24} className="mr-4 shrink-0 mt-0.5 text-indigo-600" /><div><h3 className="font-extrabold text-lg mb-1">Akses Dibatasi (Mode Baca)</h3><p className="text-indigo-700/80 leading-relaxed">Hanya <b>Super Admin Utama (Master)</b> yang memiliki hak akses penuh untuk <b>menambahkan, merubah, atau menghapus</b> akun pengelola lainnya. Anda hanya dapat melihat daftar pengelola yang aktif.</p></div></div>
              )}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-slate-50"><h3 className="text-lg font-bold text-slate-800">Daftar Akun Pengelola Aktif</h3></div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead><tr className="bg-white border-b border-slate-200 text-sm text-slate-500"><th className="p-4 font-semibold">Nama & Jabatan</th><th className="p-4 font-semibold">Username</th><th className="p-4 font-semibold text-center">Aksi</th></tr></thead>
                    <tbody>
                      {adminList.map((admin) => (
                        <tr key={admin.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="p-4"><p className="font-bold text-slate-800">{admin.name}</p><span className="inline-block mt-1 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded font-semibold">{admin.role}</span></td>
                          <td className="p-4 text-slate-600 font-medium">{admin.username}</td>
                          <td className="p-4 text-center">
                            {admin.username === 'yusmukmin' ? ( <span className="inline-flex items-center text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200"><Lock size={12} className="mr-1" /> Master</span> ) : activeAdmin.username === 'yusmukmin' ? (
                              <div className="flex justify-center space-x-2"><button onClick={() => setEditingAdmin(admin)} className="text-blue-500 hover:text-blue-700 p-2 bg-blue-50 rounded-lg hover:bg-blue-100"><Edit size={18} /></button><button onClick={() => handleDeleteAdmin(admin.id)} className="text-red-500 hover:text-red-700 p-2 bg-red-50 rounded-lg hover:bg-red-100"><Trash2 size={18} /></button></div>
                            ) : ( <span className="inline-flex items-center justify-center text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100"><Lock size={12} className="mr-1" /> Terkunci</span> )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {editingAdmin && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
                    <div className="p-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center"><h3 className="text-lg font-bold text-slate-800 flex items-center"><Edit className="mr-2 text-indigo-600" size={20}/> Edit Data Pengelola</h3><button onClick={() => setEditingAdmin(null)} className="text-slate-400 hover:text-slate-600 bg-white rounded-full p-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
                    <form onSubmit={handleSaveEditAdmin} className="p-6 space-y-4">
                      <div><label className="block text-sm font-semibold text-slate-700 mb-1">Nama Lengkap</label><input required type="text" value={editingAdmin.name} onChange={e => setEditingAdmin({...editingAdmin, name: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Role/Jabatan</label>
                        <select value={editingAdmin.role} onChange={e => setEditingAdmin({...editingAdmin, role: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"><option>Super Admin</option><option>Manager BOS</option><option>Pengelola Data</option><option>Admin Sekolah</option><option>Auditor</option></select>
                      </div>
                      <div><label className="block text-sm font-semibold text-slate-700 mb-1">Username Login</label><input required type="text" value={editingAdmin.username} onChange={e => setEditingAdmin({...editingAdmin, username: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
                        <div className="relative">
                          <input required type={showEditAdminPass ? "text" : "password"} value={editingAdmin.password} onChange={e => setEditingAdmin({...editingAdmin, password: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 pr-10 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" />
                          <button type="button" onClick={() => setShowEditAdminPass(!showEditAdminPass)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"><{showEditAdminPass ? EyeOff : Eye} size={16} /></button>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-slate-100 flex justify-end space-x-3"><button type="button" onClick={() => setEditingAdmin(null)} className="px-5 py-2.5 text-slate-600 font-semibold hover:bg-slate-100 rounded-lg">Batal</button><button type="submit" className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 flex items-center"><CheckCircle2 size={18} className="mr-2" /> Simpan</button></div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
          {activeAdminTab === 'kontak' && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              {activeAdmin.username === 'yusmukmin' ? (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center border-b border-slate-100 pb-3"><Phone className="mr-2 text-indigo-600" size={20}/> Edit Kontak Layanan Publik</h3>
                  <form onSubmit={handleSaveContact} className="max-w-md space-y-5">
                    <div><label className="block text-sm font-semibold text-slate-700 mb-1">Email Aduan/Layanan</label><input required type="email" value={editContact.email} onChange={e => setEditContact({...editContact, email: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                    <div><label className="block text-sm font-semibold text-slate-700 mb-1">Nomor Telepon / Call Center</label><input required type="text" value={editContact.phone} onChange={e => setEditContact({...editContact, phone: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                    <div><label className="block text-sm font-semibold text-slate-700 mb-1">Jam Operasional Layanan</label><input required type="text" value={editContact.hours} onChange={e => setEditContact({...editContact, hours: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                    <div className="pt-2"><button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 flex items-center justify-center"><CheckCircle2 size={18} className="mr-2" /> Simpan Pengaturan Kontak</button></div>
                  </form>
                </div>
              ) : (
                <div className="bg-indigo-50 text-indigo-800 p-5 rounded-2xl text-sm border border-indigo-100 flex items-start shadow-sm"><Lock size={24} className="mr-4 shrink-0 mt-0.5 text-indigo-600" /><div><h3 className="font-extrabold text-lg mb-1">Akses Dibatasi</h3><p className="text-indigo-700/80 leading-relaxed">Hanya <b>Super Admin Utama (Master)</b> yang memiliki hak akses untuk merubah informasi kontak resmi instansi yang ditampilkan di seluruh halaman website publik.</p></div></div>
              )}
            </div>
          )}
          {activeAdminTab === 'password' && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 animate-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center border-b border-slate-100 pb-3"><Key className="mr-2 text-indigo-600" size={20}/> Form Reset / Ganti Password</h3>
              <form onSubmit={handleChangePassword} className="max-w-md space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Password Lama</label>
                  <div className="relative">
                    <input required type={showOldPass ? "text" : "password"} value={passData.oldPass} onChange={e => setPassData({...passData, oldPass: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 pr-10 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" />
                    <button type="button" onClick={() => setShowOldPass(!showOldPass)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"><{showOldPass ? EyeOff : Eye} size={16} /></button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Password Baru</label>
                  <div className="relative">
                    <input required type={showNewPass ? "text" : "password"} value={passData.newPass} onChange={e => setPassData({...passData, newPass: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 pr-10 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" />
                    <button type="button" onClick={() => setShowNewPass(!showNewPass)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"><{showNewPass ? EyeOff : Eye} size={16} /></button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Konfirmasi Password Baru</label>
                  <div className="relative">
                    <input required type={showConfirmPass ? "text" : "password"} value={passData.confirmPass} onChange={e => setPassData({...passData, confirmPass: e.target.value})} className="w-full border border-slate-300 rounded-lg px-4 pr-10 py-2.5 focus:ring-2 focus:ring-indigo-500 outline-none" />
                    <button type="button" onClick={() => setShowConfirmPass(!showConfirmPass)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"><{showConfirmPass ? EyeOff : Eye} size={16} /></button>
                  </div>
                </div>
                <div className="pt-2"><button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 flex items-center justify-center"><CheckCircle2 size={18} className="mr-2" /> Update Password Saya</button></div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
