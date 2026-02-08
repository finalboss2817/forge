
import { BuildRecommendation } from '../types';

export const getBuildByBudget = (budget: number): BuildRecommendation => {
  if (budget <= 20000) {
    return {
      buildTitle: "OFFICE ALPHA",
      summary: "optimized for spreadsheet processing, high-speed browsing, and accounting workflows.",
      targetPerformance: "Productivity",
      totalEstimate: `₹${budget.toLocaleString()}`,
      parts: [
        { name: "Intel Core i3-10100", category: "CPU", priceEstimate: "₹7,500", reasoning: "Reliable quad-core performance for office tasks." },
        { name: "H410M Motherboard", category: "MB", priceEstimate: "₹5,200", reasoning: "Standard durability for 24/7 uptime." },
        { name: "8GB DDR4 2666MHz", category: "RAM", priceEstimate: "₹2,100", reasoning: "Sufficient for multi-tab browsing." },
        { name: "256GB NVMe SSD", category: "Storage", priceEstimate: "₹1,800", reasoning: "Lightning fast boot times." }
      ]
    };
  }
  if (budget <= 40000) {
    return {
      buildTitle: "CORE GAMER V1",
      summary: "Entry-level 1080p gaming performance for titles like Valorant, CS2, and GTA V.",
      targetPerformance: "1080p Casual",
      totalEstimate: `₹${budget.toLocaleString()}`,
      parts: [
        { name: "AMD Ryzen 5 4500", category: "CPU", priceEstimate: "₹7,200", reasoning: "Best value 6-core processor." },
        { name: "NVIDIA GTX 1650 4GB", category: "GPU", priceEstimate: "₹13,500", reasoning: "Standard entry-level GPU for 1080p." },
        { name: "16GB DDR4 3200MHz", category: "RAM", priceEstimate: "₹3,800", reasoning: "Essential for modern gaming." },
        { name: "512GB SSD", category: "Storage", priceEstimate: "₹2,900", reasoning: "Fast loading for heavy game files." }
      ]
    };
  }
  if (budget <= 70000) {
    return {
      buildTitle: "FORGE MID-RANGE",
      summary: "The sweet spot for high-refresh 1080p gaming and light content creation.",
      targetPerformance: "1080p Ultra",
      totalEstimate: `₹${budget.toLocaleString()}`,
      parts: [
        { name: "Intel Core i5-12400F", category: "CPU", priceEstimate: "₹11,000", reasoning: "The mid-range gaming king." },
        { name: "RTX 3060 12GB", category: "GPU", priceEstimate: "₹26,000", reasoning: "High VRAM for longevity and Ray Tracing." },
        { name: "B660M WiFi Motherboard", category: "MB", priceEstimate: "₹12,000", reasoning: "Robust VRMs and wireless connectivity." },
        { name: "650W 80+ Bronze PSU", category: "Power", priceEstimate: "₹4,500", reasoning: "Efficient and safe power delivery." }
      ]
    };
  }
  if (budget <= 120000) {
    return {
      buildTitle: "STREAMER ELITE",
      summary: "Forged for 1440p gaming while streaming at high bitrates. Professional aesthetic.",
      targetPerformance: "1440p Pro",
      totalEstimate: `₹${budget.toLocaleString()}`,
      parts: [
        { name: "AMD Ryzen 7 7700", category: "CPU", priceEstimate: "₹29,000", reasoning: "Octa-core power for multitasking." },
        { name: "RTX 4070 12GB GDDR6X", category: "GPU", priceEstimate: "₹55,000", reasoning: "DLSS 3 support for frame generation." },
        { name: "32GB DDR5 6000MHz", category: "RAM", priceEstimate: "₹11,500", reasoning: "Next-gen speed for the AM5 platform." },
        { name: "240mm AIO Liquid Cooler", category: "Cooling", priceEstimate: "₹6,500", reasoning: "Superior thermal management." }
      ]
    };
  }
  return {
    buildTitle: "ULTIMATE OVERKILL",
    summary: "No compromises. 4K Ultra gaming and heavy 3D rendering workstation.",
    targetPerformance: "4K Extreme",
    totalEstimate: `₹${budget.toLocaleString()}`,
    parts: [
      { name: "Intel i9-14900K", category: "CPU", priceEstimate: "₹54,000", reasoning: "Fastest consumer CPU in existence." },
      { name: "RTX 4080 Super 16GB", category: "GPU", priceEstimate: "₹1,05,000", reasoning: "Absolute beast for 4K ray tracing." },
      { name: "Z790 Premium MB", category: "MB", priceEstimate: "₹28,000", reasoning: "Extreme overclocking potential." },
      { name: "1000W Gold Modular PSU", category: "Power", priceEstimate: "₹14,000", reasoning: "Tier-A power for high-end components." }
    ]
  };
};

export const commonIssues = [
  { 
    symptom: "PC boots but black screen", 
    solution: "Reseat RAM sticks, check HDMI/DP cable on GPU port, not Motherboard.", 
    difficulty: "Low" as const
  },
  { 
    symptom: "Random Blue Screens (BSOD)", 
    solution: "Update GPU drivers, check SSD health with CrystalDiskInfo, or check for overheating.", 
    difficulty: "Medium" as const
  },
  { 
    symptom: "No power / won't turn on", 
    solution: "Check PSU switch, verify front panel connectors, or test with a different power cable.", 
    difficulty: "Medium" as const
  },
  { 
    symptom: "Stuck in BIOS loop", 
    solution: "Check if Boot Drive is detected, replace CMOS battery, or reset BIOS settings.", 
    difficulty: "High" as const
  }
];
