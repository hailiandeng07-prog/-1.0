
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-6">浙江舜泰汽车</h2>
            <p className="mb-6 max-w-md text-slate-400">
              专注于智能叉车、线控底盘与无人化装备的高新技术企业。
              我们致力于为工业场景提供稳定、可靠、高效的智能搬运解决方案。
            </p>
            <div className="flex space-x-4">
               {/* Placeholders for social or industrial certs */}
               <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-xs font-bold text-slate-500">ISO</div>
               <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-xs font-bold text-slate-500">CE</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">快速链接</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-blue-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="text-xs uppercase text-slate-500">官方邮箱</span>
                <span className="text-slate-200">hr@shuntai-auto.com</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase text-slate-500">总部地址</span>
                <span className="text-slate-200">浙江省德清县洛舍镇独昌路68号</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} 浙江舜泰汽车. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-slate-300">法律声明</a>
            <a href="#" className="hover:text-slate-300">隐私政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
