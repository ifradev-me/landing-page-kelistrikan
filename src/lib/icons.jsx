import {
  Home,
  Zap,
  Plug,
  Lightbulb,
  LayoutGrid,
  Building2,
  Search,
  ShieldCheck,
  Wrench,
  Sparkles,
  BadgeCheck,
  HelpCircle,
} from "lucide-react";

export const iconMap = {
  Home,
  Zap,
  Plug,
  Lightbulb,
  LayoutGrid,
  Building2,
  Search,
  ShieldCheck,
  Wrench,
  Sparkles,
  BadgeCheck,
};

export function Icon({ name, ...props }) {
  const Component = iconMap[name] ?? HelpCircle;
  return <Component {...props} />;
}
