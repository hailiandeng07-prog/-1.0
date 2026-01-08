
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FORKLIFT_FEATURES, ICON_MAP, SCENARIOS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-industrial-gradient">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/industrial/1920/1080" 
            alt="Background" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              面向工业场景的<br/>
              <span className="text-blue-500">智能叉车与无人化物流装备</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light">
              聚焦线控底盘与自动驾驶技术，提供稳定可靠的智能叉车解决方案
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center group">
                了解智能叉车
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/join" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                加入我们
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Product Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-wider">
                核心产品
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">核心产品：智能叉车</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                面向制造与工业物流场景，融合自动驾驶与线控底盘技术，实现安全、高效、可规模化部署的无人叉车作业。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {FORKLIFT_FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                      {ICON_MAP[feature.icon]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2 z-0"></div>
               <img 
                 src="https://picsum.photos/seed/smartforklift/800/600" 
                 alt="Smart Forklift" 
                 className="relative z-10 rounded-xl shadow-2xl w-full h-auto"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Extended Capabilities */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">延展能力与产品形态</h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            在智能叉车之外，持续输出底层技术能力与多场景智能装备方案。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '智能线控底盘平台', desc: '可定制化扩展的多规格底盘平台', icon: 'Settings' },
              { title: '特种无人车辆', desc: '应对高温、粉尘、高海拔等特殊环境', icon: 'Truck' },
              { title: '定制化智能装备', desc: '根据客户工艺流程定制的自动化单元', icon: 'Cpu' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400 group-hover:text-blue-500 transition-colors">
                  {ICON_MAP[item.icon]}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-12 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-20"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">技术积累与产业资质</h2>
                <div className="space-y-4">
                  {[
                    '国家级高新技术企业',
                    '国家级专精特新“小巨人”',
                    '多项智能驾驶与线控技术积累',
                    '自建测试与验证体系'
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center text-slate-300">
                      <CheckCircle2 className="text-blue-500 mr-3" size={24} />
                      <span className="text-lg">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-white mb-2">100+</div>
                  <div className="text-slate-400 text-sm">核心技术专利</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-slate-400 text-sm">行业解决方案</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-slate-400 text-sm">售后运维保障</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-white mb-2">30%</div>
                  <div className="text-slate-400 text-sm">平均提效比例</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">应用场景</h2>
              <p className="text-slate-600 max-w-xl">我们深耕于每一个落地细节，确保产品在复杂的工业环境中稳定运行。</p>
            </div>
            <Link to="/scenarios" className="hidden sm:flex items-center text-blue-600 font-bold hover:text-blue-700">
              全部场景 <ArrowRight className="ml-1" size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SCENARIOS.map((scenario, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-4 h-64">
                  <img 
                    src={scenario.image} 
                    alt={scenario.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{scenario.title}</h3>
                <p className="text-slate-500">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">准备好开启无人化物流之旅了吗？</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/products" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors">
              查看解决方案
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white/50 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              联系技术专家
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
