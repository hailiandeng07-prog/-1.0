
import React from 'react';
import { SCENARIOS } from '../constants';

const Scenarios: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">应用场景</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              立足实际需求，解决工业生产中的搬运痛点。我们提供不仅仅是机器，更是高效的作业方式。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SCENARIOS.map((scenario, i) => (
              <div key={i} className={`flex flex-col gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <div className="lg:w-1/2 w-full">
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img src={scenario.image} alt={scenario.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                       <span className="text-blue-400 font-bold">CASE 0{i+1}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full px-4">
                  <h2 className="text-3xl font-bold mb-6">{scenario.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {scenario.description}
                  </p>
                  <div className="p-8 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
                    <h4 className="font-bold text-slate-900 mb-2">解决什么问题？</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-slate-600">解决劳动力短缺与重复性搬运工作的高流失率。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-slate-600">提高夜间及多班次作业的资产利用率。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-slate-600">显著降低人工操作带来的安全事故风险与货损风险。</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scenarios;
