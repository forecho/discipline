import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

const tradingPrinciples = [
  {
    title: "时刻冷静",
    description: "保持情绪稳定，不受市场波动影响",
    icon: "lucide:brain",
    gradient: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    borderColor: "border-blue-200/50 dark:border-blue-800/30"
  },
  {
    title: "耐心等待",
    description: "等待最佳交易机会，不急于入场",
    icon: "lucide:hourglass",
    gradient: "from-purple-500 to-pink-500",
    textColor: "text-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    borderColor: "border-purple-200/50 dark:border-purple-800/30"
  },
  {
    title: "禁止埋单",
    description: "不要在亏损位置继续加仓",
    icon: "lucide:ban",
    gradient: "from-red-500 to-rose-500",
    textColor: "text-red-600",
    bgColor: "bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20",
    borderColor: "border-red-200/50 dark:border-red-800/30"
  },
  {
    title: "严格止损",
    description: "设置并遵守止损点位，保护资金",
    icon: "lucide:scissors",
    gradient: "from-orange-500 to-amber-500",
    textColor: "text-orange-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20",
    borderColor: "border-orange-200/50 dark:border-orange-800/30"
  },
  {
    title: "顺势而为",
    description: "顺应市场趋势，不要逆势交易",
    icon: "lucide:trending-up",
    gradient: "from-green-500 to-emerald-500",
    textColor: "text-green-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    borderColor: "border-green-200/50 dark:border-green-800/30"
  },
  {
    title: "控制仓位",
    description: "合理分配资金，避免过度风险",
    icon: "lucide:percent",
    gradient: "from-yellow-500 to-orange-500",
    textColor: "text-yellow-600",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20",
    borderColor: "border-yellow-200/50 dark:border-yellow-800/30"
  },
  {
    title: "利润奔跑",
    description: "让盈利持续增长，不过早获利了结",
    icon: "lucide:rocket",
    gradient: "from-indigo-500 to-purple-500",
    textColor: "text-indigo-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20",
    borderColor: "border-indigo-200/50 dark:border-indigo-800/30"
  },
  {
    title: "持续学习",
    description: "不断学习和提升交易技能",
    icon: "lucide:book-open",
    gradient: "from-teal-500 to-cyan-500",
    textColor: "text-teal-600",
    bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
    borderColor: "border-teal-200/50 dark:border-teal-800/30"
  },
  {
    title: "独立思考",
    description: "形成自己的交易观点，不盲从他人",
    icon: "lucide:lightbulb",
    gradient: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20",
    borderColor: "border-cyan-200/50 dark:border-cyan-800/30"
  },
  {
    title: "保持纪律",
    description: "严格遵守交易计划和规则",
    icon: "lucide:check-circle",
    gradient: "from-emerald-500 to-green-500",
    textColor: "text-emerald-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20",
    borderColor: "border-emerald-200/50 dark:border-emerald-800/30"
  }
];

export function TradingDisciplineCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {tradingPrinciples.map((principle) => (
        <Card 
          key={principle.title} 
          className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${principle.bgColor} ${principle.borderColor}`}
          shadow="none"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          <CardBody className="flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 relative z-10">
            <div className={`relative mb-3 sm:mb-4 lg:mb-6 p-3 sm:p-4 lg:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${principle.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
              <Icon icon={principle.icon} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              <div className="absolute inset-0 bg-white/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 ${principle.textColor} group-hover:scale-105 transition-transform duration-300 leading-tight`}>
              {principle.title}
            </h3>
            <p className="text-sm sm:text-base text-default-600 dark:text-default-400 leading-relaxed group-hover:text-default-700 dark:group-hover:text-default-300 transition-colors duration-300">
              {principle.description}
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}