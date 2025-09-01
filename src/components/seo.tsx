import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export const SEO: React.FC<SEOProps> = ({
  title = "交易纪律提醒 - 建立正确的交易习惯，保持冷静的头脑",
  description = "交易纪律提醒应用，帮助交易者建立和维持良好的交易习惯。包含时刻冷静、耐心等待、严格止损等10个重要交易原则，支持深色模式。",
  keywords = "交易纪律,交易习惯,交易原则,投资纪律,交易心理,风险管理,止损,仓位控制,交易技巧",
  image = "https://discipline.forecho.com/og-image.png",
  url = "https://discipline.forecho.com",
  type = "website"
}) => {
  React.useEffect(() => {
    // 动态更新页面标题
    document.title = title;
    
    // 动态更新 meta 标签
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 更新基础 meta 标签
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // 更新 Open Graph 标签
    updatePropertyMetaTag('og:title', title);
    updatePropertyMetaTag('og:description', description);
    updatePropertyMetaTag('og:image', image);
    updatePropertyMetaTag('og:url', url);
    updatePropertyMetaTag('og:type', type);
    
    // 更新 Twitter 标签
    updatePropertyMetaTag('twitter:title', title);
    updatePropertyMetaTag('twitter:description', description);
    updatePropertyMetaTag('twitter:image', image);
    updatePropertyMetaTag('twitter:url', url);
    
  }, [title, description, keywords, image, url, type]);

  return null; // 这个组件不渲染任何内容
};
