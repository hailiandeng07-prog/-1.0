
import React from 'react';
import { Cpu, Terminal, Cloud, ShieldAlert, Zap, Layers } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-white py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">核心技术与研发能力</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            我们不仅仅是在制造叉车，更是在构建一套面向未来的工业物流神经系统。
          </p>
        </div>
      </section>

      {/* Tech Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                title: '智能线控底盘技术', 
                icon: <Zap />, 
                desc: '拥有自主知识产权的线控转向、制动与动力总成控制系统。',
                items: ['全线控架构设计', '线控冗余安全性', '高频实时控制算法']
              },
              { 
                title: '自动驾驶与决策控制', 
                icon: <Terminal />, 
                desc: '基于SLAM、感知算法与决策系统的工业级驾驶系统。',
                items: ['多传感器融合感知', '语义环境建模', '复杂动态避障规划']
              },
              { 
                title: '智能云控与车辆调度', 
                icon: <Cloud />, 
                desc: '支持百台级无人车队协同作业的大规模智能调度系统。',
                items: ['全栈车路云架构', '多车协同任务优化', '预测性维护与状态监测']
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-10 flex flex-col">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  {/* Fixed TS error by casting to React.ReactElement<any> to allow passing 'size' prop via cloneElement */}
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow">{item.desc}</p>
                <div className="space-y-3">
                  {item.items.map((it, idx) => (
                    <div key={idx} className="flex items-center text-sm font-semibold text-slate-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
               <h2 className="text-3xl font-bold mb-8">研发能力与体系</h2>
               <div className="space-y-8">
                 <div className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                     <Layers size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold mb-2">覆盖全流程的体系</h4>
                     <p className="text-slate-400">自有研发团队，多实验室与测试平台，覆盖研发、测试、验证的完整体系。</p>
                   </div>
                 </div>
                 <div className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                     <ShieldAlert size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold mb-2">严苛的验证标准</h4>
                     <p className="text-slate-400">自建工业级实车测试场，模拟各种复杂工况，确保每一台装备的工程稳定性。</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="bg-blue-600 p-12 rounded-3xl transform rotate-1">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6 italic text-blue-100">“技术理念”</h3>
                  <p className="text-2xl leading-relaxed font-light">
                    强调工程可靠性与长期可维护性，<br/>
                    <span className="font-bold text-white underline decoration-4 underline-offset-8">而非实验室级演示。</span>
                  </p>
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
