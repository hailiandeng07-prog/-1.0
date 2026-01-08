
import React from 'react';
import { Mail, ArrowRight, UserCheck, HardHat, TrendingUp } from 'lucide-react';

const Join: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-24 bg-industrial-gradient text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/join-bg/1920/600" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">加入我们，一起做真正能落地的智能装备</h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            我们追求真正的工程落地与产业价值。
            在这里，你的代码将驱动重型工业装备，重塑生产流程。
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex-shrink-0 flex items-center justify-center">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">技术导向</h3>
                    <p className="text-slate-600">推崇技术纯粹，鼓励通过技术手段解决实际问题，在这里技术专家拥有最高话语权。</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex-shrink-0 flex items-center justify-center">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">长期主义</h3>
                    <p className="text-slate-600">我们相信工业技术的积累没有捷径，坚持对底层技术的持续投入与耐心迭代。</p>
                  </div>
               </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
               <h3 className="text-2xl font-bold mb-6 text-slate-900 underline decoration-blue-500 decoration-4 underline-offset-4">我们在寻找：</h3>
               <div className="space-y-4">
                  {[
                    { cat: '研发岗位', jobs: '算法工程师、嵌入式工程师、前端开发、调度平台研发' },
                    { cat: '制造岗位', jobs: '机械工程师、调试工程师、供应链管理' },
                    { cat: '市场岗位', jobs: '产品经理、解决方案架构师、大客户经理' }
                  ].map((job, i) => (
                    <div key={i} className="pb-4 border-b border-slate-200 last:border-0">
                       <span className="text-blue-600 font-bold text-sm uppercase">{job.cat}</span>
                       <p className="text-slate-800 font-semibold">{job.jobs}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-8">
               <Mail size={40} />
             </div>
             <h2 className="text-3xl font-bold mb-4">投递简历</h2>
             <p className="text-slate-600 mb-8 text-lg">
                欢迎将简历发送至我们的官方招聘邮箱，并在邮件标题注明“姓名-申请岗位”。
             </p>
             <a 
               href="mailto:hr@shuntai-auto.com" 
               className="text-2xl font-bold text-blue-600 hover:text-blue-700 underline underline-offset-8 decoration-2"
             >
               hr@shuntai-auto.com
             </a>
             <div className="mt-12 text-sm text-slate-400">
               * 我们将在 3 个工作日内审阅您的简历并进行初步反馈
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
