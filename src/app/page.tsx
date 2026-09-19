'use client';

import React from 'react';
import Image from 'next/image';
import {
  Phone, BookOpen, ToyBrick, Heart, MapPin, Sparkles,
  Clock, Users, Home as HomeIcon, CheckCircle2, Mail,
  Car, Brain, Dumbbell
} from 'lucide-react';

export default function Home() {
  const WA_FACHRUL = "https://wa.me/62882010234221?text=Halo%20Fachrul%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Tunas%20Binar";
  const WA_LAILIL = "https://wa.me/6285855101249?text=Halo%20Lailil%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Tunas%20Binar";
  const FORM_LINK = "https://forms.gle/vUJmrJWD6cTEY69aA";



  const services = [
    {
      id: 1,
      accentColor: '#e57373',
      accentBg: 'bg-rose-500/15',
      accentText: 'text-rose-300',
      icon: Heart,
      title: 'Terapi Perilaku',
      subtitle: 'ABA & Behavioral',
      desc: 'Pembentukan basic life skill, kemandirian, dan kemampuan interaksi sosial anak melalui pendekatan terstruktur berbasis ABA.',
      tags: ['Life Skill', 'Interaksi Sosial', 'Kemandirian'],
    },
    {
      id: 2,
      accentColor: '#4db6ac',
      accentBg: 'bg-teal-400/15',
      accentText: 'text-teal-300',
      icon: ToyBrick,
      title: 'Terapi Okupasi',
      subtitle: 'Motorik & ADL',
      desc: 'Membantu anak mengembangkan keterampilan motorik halus dan kemampuan aktivitas kehidupan sehari-hari (ADL) secara mandiri.',
      tags: ['Motorik Halus', 'Koordinasi', 'ADL'],
    },
    {
      id: 3,
      accentColor: '#ffb74d',
      accentBg: 'bg-amber-400/15',
      accentText: 'text-amber-300',
      icon: Brain,
      title: 'Sensori Motorik',
      subtitle: 'Integrasi Sensorik',
      desc: 'Terapi yang menstimulasi respons sensorik dan kemampuan motorik kasar anak agar lebih optimal dalam merespons lingkungan sekitar.',
      tags: ['Sensorik', 'Motorik Kasar', 'Respons'],
    },
    {
      id: 4,
      accentColor: '#ba68c8',
      accentBg: 'bg-purple-400/15',
      accentText: 'text-purple-300',
      icon: Dumbbell,
      title: 'Life Skill & Ekstra',
      subtitle: 'Pengembangan Diri',
      desc: 'Dilengkapi dengan outing class, art class, cooking class, dan study tour untuk memperluas kemampuan sosial anak.',
      tags: ['Art Class', 'Cooking Class', 'Study Tour'],
    },
    {
      id: 5,
      accentColor: '#64b5f6',
      accentBg: 'bg-blue-400/15',
      accentText: 'text-blue-300',
      icon: Car,
      title: 'Antar-Jemput',
      subtitle: 'Layanan Transportasi',
      desc: 'Layanan transportasi antar-jemput yang aman dan terpercaya untuk kenyamanan peserta didik dari dan ke lokasi terapi.',
      tags: ['Aman', 'Terpercaya', 'Door to Door'],
    },
  ];

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-[#FDFBF7] text-gray-800 font-sans selection:bg-yellow-200 selection:text-gray-900 scroll-smooth">

      {/* ── NAVIGATION ── */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300">
        {/* Frosted glass layer — behind content so it doesn't bleed through transparent logo */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border-b border-white/60 shadow-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo — menggunakan logo_new.png yang sudah termasuk teks */}
            <a href="#beranda" className="flex items-center gap-2 cursor-pointer group">
              <img
                src="/logo_new.png"
                alt="Tunas Binar Logo"
                className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ mixBlendMode: 'multiply' }}
              />
              {/* Brand text — Fredoka, warna & gaya sesuai referensi logo */}
              <span
                className="hidden sm:inline-flex items-center leading-none select-none"
                style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 700, fontSize: '1.75rem', gap: '1px' }}
              >
                <span style={{ display:'inline-block', color:'#F47A20', transform:'translateY(-3px)', textShadow:'0 3px 0 #B85500' }}>T</span>
                <span style={{ display:'inline-block', color:'#3DAA4B', transform:'translateY(3px)',  textShadow:'0 3px 0 #1C6628' }}>u</span>
                <span style={{ display:'inline-block', color:'#2E55B0', transform:'translateY(-2px)', textShadow:'0 3px 0 #143080' }}>n</span>
                <span style={{ display:'inline-block', color:'#F5C800', transform:'translateY(3px)',  textShadow:'0 3px 0 #A88500' }}>a</span>
                <span style={{ display:'inline-block', color:'#E03030', transform:'translateY(-2px)', textShadow:'0 3px 0 #961A1A' }}>s</span>
                <span style={{ display:'inline-block', width:'0.25em' }} />
                <span style={{ display:'inline-block', color:'#2799DC', transform:'translateY(-3px)', textShadow:'0 3px 0 #0F5E99' }}>B</span>
                <span style={{ display:'inline-block', color:'#F47A20', transform:'translateY(3px)',  textShadow:'0 3px 0 #B85500' }}>i</span>
                <span style={{ display:'inline-block', color:'#3DAA4B', transform:'translateY(-2px)', textShadow:'0 3px 0 #1C6628' }}>n</span>
                <span style={{ display:'inline-block', color:'#F5C800', transform:'translateY(3px)',  textShadow:'0 3px 0 #A88500' }}>a</span>
                <span style={{ display:'inline-block', color:'#8B3CC4', transform:'translateY(-1px)', textShadow:'0 3px 0 #561A82' }}>r</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#tentang" className="text-gray-600 hover:text-teal-500 font-medium transition-colors text-sm">Tentang Kami</a>
              <a href="#layanan" className="text-gray-600 hover:text-purple-500 font-medium transition-colors text-sm">Layanan</a>
              <a href="#program" className="text-gray-600 hover:text-teal-600 font-medium transition-colors text-sm">Program Boarding</a>
              <a href="#kontak" className="text-gray-600 hover:text-teal-500 font-medium transition-colors text-sm">Kontak</a>
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-yellow-950 px-5 py-2 rounded-full font-semibold transition-all shadow-sm hover:shadow hover:-translate-y-0.5 text-sm"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section id="beranda" className="snap-start min-h-screen w-full flex flex-col justify-center relative pt-16 md:pt-20 pb-10 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/bg-hero.jpg")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 via-white/30 to-[#FDFBF7]/90 backdrop-blur-[1px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50/90 text-teal-700 font-medium text-sm mb-6 border border-teal-200/60 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-400" />
            <span>Pusat Layanan Terapi &amp; Boarding Anak</span>
          </div>

          {/* Logo Hero */}
          <div className="flex justify-center mb-6">
            <div className="relative w-36 h-36 md:w-48 md:h-48">
              <img
                src="/logo_transparent.png"
                alt="Tunas Binar Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900">
            Bersama kita <span className="text-teal-500">tumbuh</span>,<br />
            bersama kita <span className="text-yellow-400">bersinar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Setiap anak kami dampingi dengan pendekatan yang hangat, terarah, dan sesuai kebutuhan mereka.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-950 px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <BookOpen className="w-5 h-5" />
              Isi Formulir Pendaftaran
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all hover:bg-white"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section id="tentang" className="snap-start min-h-screen w-full flex flex-col justify-center relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/bg_tentang.jpg")' }}
        />
        <div className="absolute inset-0 z-0 bg-white/75 backdrop-blur-sm" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="bg-white/85 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-14 relative overflow-hidden border border-white/60">
            {/* Decorative star */}
            <div className="absolute top-8 right-8 text-yellow-200 opacity-40 pointer-events-none select-none">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9l7 1-5 5 1 7-7-4-7 4 1-7-5-5 7-1z"/>
              </svg>
            </div>

            <div className="relative z-10">
              <span className="inline-block text-teal-600 font-bold tracking-wider uppercase text-xs mb-3 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-600">Kenapa harus Tunas Binar?</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 max-w-2xl">
                Di Tunas Binar, setiap anak kami dampingi dengan pendekatan yang hangat, terarah, dan sesuai kebutuhan mereka.
                Dengan tim yang terlatih dan lingkungan yang aman, kami membantu anak mengembangkan komunikasi, perilaku,
                dan kemandirian agar tumbuh percaya diri sesuai potensinya.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Heart, bg: 'bg-red-100', color: 'text-red-500', fill: 'fill-red-100', title: 'Pendekatan Hangat', desc: 'Lingkungan yang aman dan penuh kasih sayang untuk setiap anak.' },
                  { icon: Users, bg: 'bg-teal-100', color: 'text-teal-500', fill: '', title: 'Tim Terlatih', desc: 'Satu anak, satu terapis dengan pendekatan penuh kesabaran untuk membangun bonding.' },
                  { icon: Sparkles, bg: 'bg-yellow-100', color: 'text-yellow-500', fill: '', title: 'Program Terstruktur', desc: 'Program IEP yang dipersonalisasi sesuai kebutuhan unik setiap anak.' },
                  { icon: CheckCircle2, bg: 'bg-purple-100', color: 'text-purple-500', fill: '', title: 'Perkembangan Terpantau', desc: 'Laporan perkembangan rutin yang transparan untuk orang tua.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 border border-gray-100">
                    <div className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                      <item.icon className={`w-5 h-5 ${item.fill}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SISTEM LAYANAN SECTION (Carousel 5 cards) ── */}
      <section id="layanan" className="snap-start min-h-screen w-full flex flex-col justify-center relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/bg_sistem_layanan.jpg")' }}
        />
        <div className="absolute inset-0 z-0 bg-[#1a0533]/80 backdrop-blur-[2px]" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-purple-300 font-bold tracking-wider uppercase text-xs mb-3 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
              Sistem Layanan
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Program Layanan Kami
            </h2>
            <p className="text-purple-200/80 text-base md:text-lg max-w-xl mx-auto">
              Lima layanan komprehensif dirancang untuk mendukung tumbuh kembang optimal setiap anak.
            </p>
          </div>

          {/* Cards Grid — 3 on top, 2 centered on bottom */}
          <div className="flex flex-wrap justify-center gap-5">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-white/[0.07] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-xl transition-all duration-300 hover:bg-white/[0.11] hover:border-white/20 hover:-translate-y-1.5 group"
              >
                {/* Top accent line */}
                <div
                  className="h-[3px] w-full shrink-0"
                  style={{ background: `linear-gradient(90deg, ${svc.accentColor}, ${svc.accentColor}30)` }}
                />

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + Number */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-11 h-11 ${svc.accentBg} rounded-xl flex items-center justify-center shrink-0 border border-white/10`}
                    >
                      <svc.icon className={`w-5 h-5 ${svc.accentText}`} />
                    </div>
                    <span className="text-white/[0.07] text-5xl font-black leading-none select-none tabular-nums group-hover:text-white/10 transition-colors">
                      {String(svc.id).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title block */}
                  <p className={`text-[11px] font-bold uppercase tracking-[0.12em] ${svc.accentText} mb-1`}>
                    {svc.subtitle}
                  </p>
                  <h3 className="text-white text-xl font-bold leading-snug mb-3">{svc.title}</h3>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/[0.08] mb-3" />

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">{svc.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md border"
                        style={{
                          color: svc.accentColor,
                          borderColor: `${svc.accentColor}35`,
                          background: `${svc.accentColor}0D`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOARDING PROGRAM SECTION ── */}
      <section id="program" className="snap-start min-h-screen w-full flex flex-col justify-center relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/bg_program.jpg")' }}
        />
        <div className="absolute inset-0 z-0 bg-teal-900/50 backdrop-blur-[2px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="bg-teal-700/70 backdrop-blur-xl rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-2xl border border-teal-400/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-screen opacity-20 translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="bg-yellow-400 text-yellow-950 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wide inline-block mb-5 shadow-sm">
                  Program Unggulan
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
                  Program Boarding<br />Tunas Binar
                </h2>
                <p className="text-teal-100 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                  Tinggal di asrama, belajar, beribadah, dan berkegiatan bersama teman-teman dalam lingkungan yang aman dan nyaman.
                </p>

                <ul className="space-y-3">
                  {[
                    "Fokus pada pembinaan karakter & agama",
                    "Kemandirian & kedisiplinan sehari-hari",
                    "Kegiatan pendidikan, olahraga, dan kreativitas",
                    "Prestasi akademik yang terpantau",
                    "Belajar mandiri & peduli lingkungan",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-300 shrink-0" />
                      <span className="text-base text-teal-50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4">
                {[
                  { icon: HomeIcon, bg: 'bg-yellow-400', fg: 'text-yellow-900', title: 'Fasilitas Lengkap', desc: 'Fasilitas lengkap dan nyaman untuk tumbuh kembang anak secara optimal.' },
                  { icon: Users, bg: 'bg-red-400', fg: 'text-white', title: 'Teman Baru', desc: 'Kesempatan bersosialisasi dan memiliki banyak teman sebaya yang mendukung.' },
                  { icon: BookOpen, bg: 'bg-purple-400', fg: 'text-white', title: 'Program IEP', desc: 'Program Individual Education Plan yang disesuaikan untuk setiap anak.' },
                ].map((card, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-11 h-11 ${card.bg} rounded-full flex items-center justify-center ${card.fg} shrink-0`}>
                        <card.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold">{card.title}</h3>
                    </div>
                    <p className="text-teal-100 text-sm">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO & ADMISSION SECTION ── */}
      <section className="snap-start min-h-screen w-full flex flex-col justify-center relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/bg_program.jpg")' }}
        />
        <div className="absolute inset-0 z-0 bg-teal-950/85 backdrop-blur-sm" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Informasi Pendaftaran</h2>
            <p className="text-teal-300 text-base max-w-md mx-auto">Bergabunglah dengan keluarga besar Tunas Binar dan mulai perjalanan si kecil bersama kami.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-7 bg-purple-900/60 backdrop-blur-md rounded-3xl border border-purple-500/30 text-white">
              <div className="w-12 h-12 bg-purple-500/30 rounded-2xl flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pendaftaran</h3>
              <p className="text-purple-200 text-sm mb-4">Penerimaan peserta didik bersifat longitudinal.</p>
              <ul className="text-purple-200 text-sm space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Usia 4 - 12 tahun</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Autisme Spectrum Disorder</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> ADHD &amp; Gangguan Perilaku</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> Gangguan Bahasa Komunikasi</li>
              </ul>
            </div>

            <div className="p-7 bg-blue-900/60 backdrop-blur-md rounded-3xl border border-blue-500/30 text-white">
              <div className="w-12 h-12 bg-blue-500/30 rounded-2xl flex items-center justify-center mb-5">
                <Clock className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Operasional Terapi</h3>
              <p className="text-blue-200 text-sm mb-4">Satu anak satu terapis dengan 100+ jam per bulan (5 jam per pertemuan).</p>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10 mt-auto">
                <p className="font-bold text-white text-base">Senin – Jumat</p>
                <p className="text-blue-300 font-medium text-sm">08.00 – 17.00 WIB</p>
              </div>
            </div>

            <div className="p-7 bg-yellow-900/60 backdrop-blur-md rounded-3xl border border-yellow-500/30 text-white flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-yellow-500/30 rounded-2xl flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mulai Bersinar!</h3>
              <p className="text-yellow-200 text-sm mb-6">Amankan kursi untuk buah hati Anda sekarang juga.</p>
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-950 px-6 py-3.5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5 mt-auto"
              >
                <BookOpen className="w-4 h-4" />
                Link Pendaftaran
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="kontak" className="snap-start min-h-screen w-full flex flex-col justify-between relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/bg_kontak.jpg")' }}
        />
        <div className="absolute inset-0 z-0 bg-gray-950/85 backdrop-blur-[3px]" />

        {/* Contact Content — Centered */}
        <div className="flex-1 flex items-center justify-center py-12 md:py-16 relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">

              <div>
                <span className="inline-block text-teal-400 font-bold tracking-wider uppercase text-xs mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">Hubungi Kami</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-5">Siap memulai<br />perjalanan bersinar?</h2>
                <p className="text-gray-400 mb-10 text-base max-w-md leading-relaxed">
                  Punya pertanyaan tentang layanan atau program boarding kami? Jangan ragu untuk berdiskusi dengan tim kami.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 text-sm mb-1">Alamat Lengkap</h4>
                      <a href="https://maps.app.goo.gl/VFbKHea2eFRF4pjFA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors text-sm leading-relaxed block">
                        Perum Sarimadu Blok E1<br />Kec. Wagir, Kab. Malang 65158<br />
                        <span className="text-xs underline mt-1 inline-block">Buka di Google Maps →</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 text-sm mb-1">Email</h4>
                      <a href="mailto:tunasbinar@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                        tunasbinar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 text-sm mb-1">Media Sosial</h4>
                      <a href="https://instagram.com/tunasbinar.mlg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                        @tunasbinar.mlg (Instagram &amp; TikTok)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-md rounded-3xl p-7 md:p-9 border border-gray-700/60">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Konsultasi via WhatsApp
                </h3>

                <div className="space-y-4 mb-6">
                  {[
                    { name: 'Kak Fachrul', phone: '0882-0102-34221', link: WA_FACHRUL },
                    { name: 'Kak Lailil', phone: '0858-5510-1249', link: WA_LAILIL },
                  ].map((contact) => (
                    <a
                      key={contact.name}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full bg-gray-800/80 hover:bg-gray-700/80 px-5 py-4 rounded-2xl transition-colors group border border-gray-700/40"
                    >
                      <div>
                        <p className="font-bold text-base">{contact.name}</p>
                        <p className="text-gray-400 text-sm">{contact.phone}</p>
                      </div>
                      <div className="bg-green-500/20 text-green-400 p-2 rounded-full group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                    </a>
                  ))}
                </div>

                <a
                  href={FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-950 px-6 py-3.5 rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <BookOpen className="w-4 h-4" />
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER BAR (Full-width bar seperti Navbar) ── */}
        <footer className="w-full relative z-10 bg-gray-950/80 backdrop-blur-xl border-t border-gray-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-200">Tunas Binar</span>
              <span className="text-gray-600">•</span>
              <p>&copy; {new Date().getFullYear()} Tunas Binar. Bersama kita tumbuh, bersama kita bersinar. ✨</p>
            </div>
            <p className="text-gray-500">Malang, Indonesia</p>
          </div>
        </footer>
      </section>

      {/* scrollbar hide style */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
