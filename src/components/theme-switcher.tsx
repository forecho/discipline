import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "../hooks/use-theme";

export const ThemeSwitcher: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      size="sm"
      variant="ghost"
      onPress={toggleTheme}
      className="min-w-0 px-2 sm:px-3 text-xs sm:text-sm"
      startContent={
        <Icon 
          icon={isDark ? "lucide:sun" : "lucide:moon"} 
          className="w-3 h-3 sm:w-4 sm:h-4" 
        />
      }
    >
      {isDark ? "浅色" : "深色"}
    </Button>
  );
};
