import * as lucide from "lucide-react";

export const ICON_MAP = {
  "chevron-right": lucide.ChevronRight,
  "chevron-left": lucide.ChevronLeft,
  "chevron-down": lucide.ChevronDown,
  "chevron-up": lucide.ChevronUp,
  "chevron-up-down": lucide.ChevronsUpDown,

  "arrow-right": lucide.ArrowRight,
  "arrow-left": lucide.ArrowLeft,
  "arrow-down": lucide.ArrowDown,
  "arrow-up": lucide.ArrowUp,

  search: lucide.Search,
  plus: lucide.Plus,
  minus: lucide.Minus,
  x: lucide.X,
  check: lucide.Check,
  menu: lucide.Menu,
  settings: lucide.Settings,
  user: lucide.User,
  users: lucide.Users,
  mail: lucide.Mail,
  home: lucide.Home,
  info: lucide.Info,
  "alert-circle": lucide.AlertCircle,
  sparkles: lucide.Sparkles,
  upload: lucide.Upload,
  job: lucide.Briefcase,
};

export type IconName = keyof typeof ICON_MAP;
