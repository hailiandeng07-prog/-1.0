
import React from 'react';
import { Truck, Shield, Cpu, Activity, Layout, Settings, Navigation, Warehouse, Factory, Package } from 'lucide-react';
import { NavItem, FeatureCard, Product, Scenario } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '产品与解决方案', path: '/products' },
  { label: '技术与能力', path: '/technology' },
  { label: '应用场景', path: '/scenarios' },
  { label: '关于我们', path: '/about' },
  { label: '加入我们', path: '/join' },
];

export const FORKLIFT_FEATURES: FeatureCard[] = [
  { title: '工业级无人驾驶能力', description: '高精度感知与环境建模', icon: 'Navigation' },
  { title: '线控底盘，精准可靠', description: '响应迅速，控制精度达厘米级', icon: 'Settings' },
  { title: '适配多种工业场景', description: '灵活应对窄路、高位货架等挑战', icon: 'Layout' },
  { title: '支持规模化调度与运维', description: '多车协同，智能调度平台', icon: 'Cpu' },
];

export const FORKLIFT_MODELS: Product[] = [
  { name: '2.0T 智能无人平衡重叉车', scenario: '适用于标准化仓储与轻量化工业搬运。', image: 'https://picsum.photos/seed/forklift1/600/400' },
  { name: '2.5T 智能无人平衡重叉车', scenario: '平衡重设计，满足大部分中型制造车间需求。', image: 'https://picsum.photos/seed/forklift2/600/400' },
  { name: '3.0T 智能无人平衡重叉车', scenario: '重载首选，针对大吨位物料流转设计。', image: 'https://picsum.photos/seed/forklift3/600/400' },
  { name: '3.5T 智能无人平衡重叉车', scenario: '极致动力，适应极端负载与大批量物流作业。', image: 'https://picsum.photos/seed/forklift4/600/400' },
];

export const SCENARIOS: Scenario[] = [
  { title: '制造工厂内部物流', description: '连接产线与仓库，实现零误差、全时段物料供给。', image: 'https://picsum.photos/seed/s1/800/500' },
  { title: '工业物流园区', description: '大型园区内多库房间的高效长距自动化运输。', image: 'https://picsum.photos/seed/s2/800/500' },
  { title: '特殊/封闭作业场景', description: '在高温、高湿或特定危险环境下替代人工操作。', image: 'https://picsum.photos/seed/s3/800/500' },
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Navigation: <Navigation className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Warehouse: <Warehouse className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />,
};
