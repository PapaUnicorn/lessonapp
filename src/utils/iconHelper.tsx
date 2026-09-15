import React from 'react';
import {
  Calculator,
  Leaf,
  Compass,
  BookOpen,
  Code,
  Palette,
  Atom,
  Globe,
  MessageSquare,
  Laptop,
  Sigma,
  Zap,
  FlaskConical,
  HeartPulse,
  CloudRain,
  TrendingUp,
  Landmark,
  Terminal,
  Layers,
  Sparkles,
} from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number;
}

export const getSubjectIcon = (iconName: string, props: IconProps = { className: "w-5 h-5" }): React.ReactElement => {
  switch (iconName) {
    case 'Calculator':
      return <Calculator {...props} />;
    case 'Leaf':
      return <Leaf {...props} />;
    case 'Compass':
      return <Compass {...props} />;
    case 'BookOpen':
      return <BookOpen {...props} />;
    case 'Code':
      return <Code {...props} />;
    case 'Palette':
      return <Palette {...props} />;
    case 'Atom':
      return <Atom {...props} />;
    case 'Globe':
      return <Globe {...props} />;
    case 'MessageSquare':
      return <MessageSquare {...props} />;
    case 'Laptop':
      return <Laptop {...props} />;
    case 'Sigma':
      return <Sigma {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'FlaskConical':
      return <FlaskConical {...props} />;
    case 'HeartPulse':
      return <HeartPulse {...props} />;
    case 'CloudRain':
      return <CloudRain {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    case 'Landmark':
      return <Landmark {...props} />;
    case 'Terminal':
      return <Terminal {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};

