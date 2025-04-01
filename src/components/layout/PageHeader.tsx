
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={cn("text-center py-12 md:py-16 lg:py-20 px-4", className)}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-beeBlack">{title}</h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default PageHeader;
