
import React from 'react';
import { Award, Briefcase, Users, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase mb-6">
                <History size={14} />
                公司简介
              </div>
              <h1 className="text-4xl font-bold mb-8">浙江舜泰汽车</h1>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  浙江舜泰汽车是一家专注于智能叉车、线控底盘与无人化装备的高新技术企业，面向工业与物流场景提供可靠的智能装备产品与解决方案。
                </p>
                <p>
                  我们深耕自动驾驶底层技术多年，坚持全栈自研核心控制器与底盘系统，致力于将尖端的算法转化为工业现场触手可及的生产力。
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/company/800/600" className="rounded-3xl shadow-xl" alt="Company" />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hidden md:block">
                 <div className="flex gap-4">
                    <div className="text-center">
                       <div className="text-2xl font-bold text-blue-600">2024</div>
                       <div className="text-xs text-slate-500 uppercase tracking-widest">成立年份</div>
                    </div>
                    <div className="w-px h-12 bg-slate-100"></div>
                    <div className="text-center">
                       <div className="text-2xl font-bold text-blue-600">200+</div>
                       <div className="text-xs text-slate-500 uppercase tracking-widest">团队规模</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Honors */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">资质与荣誉</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '国家级专精特新“小巨人”', icon: <Award className="w-8 h-8" />, desc: '表彰在细分领域技术领先、市场占有率高的排头兵企业。' },
              { title: '国家级高新技术企业', icon: <ShieldAlert className="w-8 h-8" />, desc: '持续进行研究开发与技术成果转化，形成核心自主知识产权。' },
              { title: '行业领先创新平台', icon: <Briefcase className="w-8 h-8" />, desc: '获批建设省级智能驾驶与线控技术创新研究中心。' }
            ].map((honor, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl text-center border border-slate-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-6">
                  {honor.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{honor.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{honor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-8">我们的使命</h2>
           <p className="text-2xl font-light text-slate-600 italic">
             “通过智能装备技术，让工业生产更高效、更安全、更智能。”
           </p>
        </div>
      </section>
    </div>
  );
};

const ShieldAlert = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

export default About;
