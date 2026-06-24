import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, Save, X, Upload, Database, 
  Facebook, Instagram, Twitter, 
  Image as ImageIcon, Trash2, Camera, Link as LinkIcon,
  Terminal, ShieldAlert, Share2, Skull, Heart, Activity, 
  MapPin, Fingerprint, Cake, Star, ToyBrick
} from 'lucide-react';

const AddAgentPage = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: `D-${Math.floor(Math.random() * 9000 + 1000)}`,
    name: '',
    breed: '',         // 品種
    birthday: '',      // 生日
    location: '',      // 出沒地點
    favoriteToy: '',   // 喜歡的玩具
    icon: '/DemoPuppy.png',
    image: '',
    description: '',
    social: {
      facebook: '',
      instagram: '',
      twitter: ''
    },
    stats: [
      { label: "Bark Volume (吠叫音量)", val: "85%", icon: "Skull" },
      { label: "Cuteness (萌度指數)", val: "99%", icon: "Heart" },
      { label: "Sleep Duration (睡眠時數)", val: "72%", icon: "Terminal" }
    ],
    evidenceImages: [
      { url: '', label: 'IDENTIFICATION' },
      { url: '', label: 'SURVEILLANCE_01' },
      { url: '', label: 'TARGET_SIGHTING' },
      { url: '', label: 'THERMAL_SCAN' }
    ]
  });

  const handleFileChange = (e, type, index = null) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        if (type === 'image') setFormData({ ...formData, image: base64String });
        if (type === 'icon') setFormData({ ...formData, icon: base64String });
        if (type === 'evidence') {
          const newEvidence = [...formData.evidenceImages];
          newEvidence[index].url = base64String;
          setFormData({ ...formData, evidenceImages: newEvidence });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('social.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        social: { ...prev.social, [field]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleStatChange = (index, newVal) => {
    const updatedStats = [...formData.stats];
    updatedStats[index].val = `${newVal}%`;
    setFormData({ ...formData, stats: updatedStats });
  };

  return (
    <div className="fixed inset-0 z-[300] bg-slate-950 text-emerald-500 font-mono flex flex-col overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(16,185,129,0)_50%,rgba(16,185,129,0.1)_50%)] bg-[length:100%_4px]" />

      <header className="p-6 border-b border-emerald-900/50 flex justify-between items-center bg-slate-900/50 relative z-10">
        <div>
          <h2 className="text-xl font-black italic flex items-center gap-2 tracking-tighter uppercase">
            <Database className="text-emerald-400" /> New_Agent_Registration
          </h2>
        </div>
        <div onClick={onCancel} className="p-2 hover:bg-red-500/20 text-red-500 transition-colors border border-transparent hover:border-red-900/50">
          <X size={24} />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 md:p-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* 左半部：影像上傳區 */}
            <div className="space-y-10">
              <section className="space-y-4">
                <label className="text-xs font-bold text-emerald-400 uppercase flex items-center gap-2">
                  <Camera size={14} /> 1. Primary_Visual (大頭像)
                </label>
                <div className="relative aspect-video bg-slate-900 border-2 border-dashed border-emerald-900 flex flex-col items-center justify-center group overflow-hidden">
                  {formData.image ? (
                    <img src={formData.image} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center space-y-2">
                      <Upload className="mx-auto text-emerald-900" />
                      <p className="text-[10px] text-emerald-900 uppercase tracking-widest">Upload_Asset</p>
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'image')} className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>
                  )}
                </div>
              </section>

              <section className="space-y-4">
                <label className="text-xs font-bold text-emerald-400 uppercase flex items-center gap-2">
                  <ImageIcon size={14} /> 2. Digitized_Signature (專屬 Icon)
                </label>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-slate-900 border border-emerald-500 flex items-center justify-center relative">
                    <img src={formData.icon} className="w-full h-full object-contain p-1" />
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'icon')} className="absolute inset-0 opacity-0 cursor-pointer" />
                  </div>
                  <p className="text-[10px] text-emerald-800 italic uppercase">Click to change icon</p>
                </div>
              </section>
            </div>

            {/* 右半部：核心情報 (新欄位在此) */}
            <div className="space-y-8">
              <section className="space-y-4 bg-emerald-950/10 p-6 border border-emerald-900/30">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase border-l-2 border-emerald-500 pl-2 mb-4">
                  <Terminal size={14} /> Core_Intel
                </div>
                <div className="space-y-4">
                  {/* 第一排：名字與品種 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] text-emerald-800 uppercase tracking-widest flex items-center gap-1">
                        <Fingerprint size={10}/> Agent_Name
                      </label>
                      <input name="name" onChange={handleChange} className="w-full bg-slate-950 border border-emerald-900/50 p-2 text-sm text-emerald-400 outline-none focus:border-emerald-500" placeholder="代號..." />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-emerald-800 uppercase tracking-widest flex items-center gap-1">
                        <Fingerprint size={10}/> Breed
                      </label>
                      <input name="breed" onChange={handleChange} className="w-full bg-slate-950 border border-emerald-900/50 p-2 text-sm text-emerald-400 outline-none focus:border-emerald-500" placeholder="品種..." />
                    </div>
                  </div>

                  {/* 第二排：生日與地點 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] text-emerald-800 uppercase tracking-widest flex items-center gap-1">
                        <Cake size={10}/> Birth_Date
                      </label>
                      <input type="date" name="birthday" onChange={handleChange} className="w-full bg-slate-950 border border-emerald-900/50 p-2 text-sm text-emerald-400 outline-none focus:border-emerald-500 [color-scheme:dark]" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-emerald-800 uppercase tracking-widest flex items-center gap-1">
                        <MapPin size={10}/> Location
                      </label>
                      <input name="location" onChange={handleChange} className="w-full bg-slate-950 border border-emerald-900/50 p-2 text-sm text-emerald-400 outline-none focus:border-emerald-500" placeholder="出沒地點..." />
                    </div>
                  </div>

                  {/* 第三排：喜歡的玩具 */}
                  <div className="space-y-1">
                    <label className="text-[9px] text-emerald-800 uppercase tracking-widest flex items-center gap-1">
                      <ToyBrick size={10}/> Tactical_Gear (喜歡的玩具)
                    </label>
                    <input name="favoriteToy" onChange={handleChange} className="w-full bg-slate-950 border border-emerald-900/50 p-2 text-sm text-emerald-400 outline-none focus:border-emerald-500" placeholder="最愛的玩具..." />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] text-emerald-800 uppercase tracking-widest">Mission_Briefing</label>
                    <textarea name="description" rows="2" onChange={handleChange} className="w-full bg-slate-950 border border-emerald-900/50 p-2 text-xs text-emerald-400 outline-none resize-none focus:border-emerald-500" placeholder="描述特徵或習性..." />
                  </div>
                </div>
              </section>

              {/* Combat Stats 調校 */}
              <section className="space-y-4 bg-emerald-950/5 p-6 border border-emerald-900/30">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase border-l-2 border-emerald-500 pl-2">
                  <Activity size={14} /> Combat_Stats_Sync
                </div>
                <div className="space-y-5">
                  {formData.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-[10px] uppercase tracking-tighter">
                        <span className="flex items-center gap-2 text-emerald-700">
                          {stat.icon === "Skull" && <Skull size={12}/>}
                          {stat.icon === "Heart" && <Heart size={12}/>}
                          {stat.icon === "Terminal" && <Terminal size={12}/>}
                          {stat.label}
                        </span>
                        <span className="text-emerald-400 font-bold tabular-nums">{stat.val}</span>
                      </div>
                      <input 
                        type="range" min="0" max="100" 
                        value={parseInt(stat.val)} 
                        onChange={(e) => handleStatChange(idx, e.target.value)}
                        className="w-full h-1 bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Digital Footprint */}
              <section className="space-y-4 bg-emerald-950/10 p-6 border border-emerald-900/30">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase border-l-2 border-emerald-500 pl-2">
                  <Share2 size={14} /> Digital_Footprint
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <input name="social.facebook" onChange={handleChange} className="bg-slate-950 border border-emerald-900/50 p-2 text-[9px] text-emerald-400 outline-none focus:border-emerald-500" placeholder="FB_URL" />
                  <input name="social.instagram" onChange={handleChange} className="bg-slate-950 border border-emerald-900/50 p-2 text-[9px] text-emerald-400 outline-none focus:border-emerald-500" placeholder="IG_URL" />
                  <input name="social.twitter" onChange={handleChange} className="bg-slate-950 border border-emerald-900/50 p-2 text-[9px] text-emerald-400 outline-none focus:border-emerald-500" placeholder="X_URL" />
                </div>
              </section>
            </div>
          </div>

          {/* 3. Field Evidence Log */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase border-b border-emerald-900 pb-2">
              <LinkIcon size={14} /> 3. Field_Evidence_Log (現場採證圖檔)
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {formData.evidenceImages.map((img, idx) => (
                <div key={idx} className="relative aspect-square bg-slate-900 border border-emerald-900/50 flex items-center justify-center overflow-hidden group">
                  {img.url ? (
                    <img src={img.url} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center">
                      <Plus className="mx-auto text-emerald-900" size={20} />
                      <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'evidence', idx)} className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-emerald-500/10 text-[8px] text-center py-1 opacity-60 uppercase">
                    {img.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div 
            onClick={() => onSave(formData)}
            className="w-full py-6 bg-emerald-500 text-slate-950 font-black text-xl tracking-[0.5em] hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
          >
            COMMIT_TO_DATABASE
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAgentPage;