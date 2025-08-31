import React from "react";
import { TradingDisciplineCards } from "./components/trading-discipline-cards";
import { ThemeSwitcher } from "./components/theme-switcher";

export default function App() {
  return (
    <main className="min-h-screen bg-background py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 gap-4">
          <div className="text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
              交易纪律提醒
            </h1>
            <p className="text-base sm:text-lg text-default-600 dark:text-default-400 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
              建立正确的交易习惯，保持冷静的头脑，让每一次交易都成为成功的基石
            </p>
          </div>
          <div className="order-1 sm:order-2 flex justify-center sm:justify-end">
            <ThemeSwitcher />
          </div>
        </div>
        <TradingDisciplineCards />
      </div>
    </main>
  );
}
