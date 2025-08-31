import React from "react";
import { TradingDisciplineCards } from "./components/trading-discipline-cards";
import { ThemeSwitcher } from "./components/theme-switcher";

export default function App() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              交易纪律提醒
            </h1>
            <p className="text-lg text-default-600 dark:text-default-400 max-w-2xl">
              建立正确的交易习惯，保持冷静的头脑，让每一次交易都成为成功的基石
            </p>
          </div>
          <ThemeSwitcher />
        </div>
        <TradingDisciplineCards />
      </div>
    </main>
  );
}
