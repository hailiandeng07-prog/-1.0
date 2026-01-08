
import React from 'react';
import { FORKLIFT_MODELS, ICON_MAP } from '../constants';
import { Truck, CheckCircle, Shield, Cog } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/p-bg/1920/600" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">智能叉车解决方案</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            面向工业与制造场景的无人化叉车产品，强调稳定性、安全性与工程落地能力。
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
            {[
              { title: '自动驾驶与环境感知', icon: <Truck />, desc: '基于Lidar+视觉融合的实时环境建模与动态避障' },
              { title: '线控转向与制动系统', icon: <Cog />, desc: '全线控化改造，响应精度可达毫秒级' },
              { title: '工业级安全冗余设计', icon: <Shield />, desc: '多重安全防护机制，确保人机共存环境下的绝对安全' },
              { title: '多车型、多吨位覆盖', icon: <CheckCircle />, desc: '从2.0T到3.5T，覆盖制造行业主流需求' }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all">
                {/* Fixed TS error by casting to React.ReactElement<any> to allow passing 'size' prop via cloneElement */}
                <div className="text-blue-600 mb-4">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center">智能无人平衡重叉车系列</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {FORKLIFT_MODELS.map((model, i) => (
              <div key={i} className="flex flex-col md:flex-row bg-slate-50 rounded-2xl overflow-hidden group">
                <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                  <img src={model.image} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">适用场景</span>
                    <p className="text-slate-600 mt-1">{model.scenario}</p>
                  </div>
                  <button className="self-start text-blue-600 font-bold border-b-2 border-blue-600 hover:text-blue-700 transition-colors">
                    联系咨询产品详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Platforms */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">其他产品与平台能力</h2>
            <p className="text-slate-500">提供从底盘到整车的智能化解决方案能力</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '智能线控底盘平台', points: ['全解耦控制架构', '多规格适配性', '完善的API文档'], icon: 'Settings' },
              { title: '特种无人车辆', points: ['环境适应性增强', '特殊动力系统', '远程操控集成'], icon: 'Truck' },
              { title: '场景定制智能装备', points: ['流程自动化分析', '工属具定制', '产线无缝对接'], icon: 'Cpu' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                   {ICON_MAP[item.icon]}
                </div>
                <h3 className="text-xl font-bold mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
