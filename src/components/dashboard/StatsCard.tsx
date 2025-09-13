import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export const StatsCard = ({ title, value, change, icon }: StatsCardProps) => {
  const isPositive = change > 0;
  const isNeutral = change === 0;

  return (
    <Card className="bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        <div className="flex items-center text-xs">
          {!isNeutral && (
            <>
              {isPositive ? (
                <TrendingUp className="h-3 w-3 text-success mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-destructive mr-1" />
              )}
            </>
          )}
          <span className={`${
            isPositive ? 'text-success' : isNeutral ? 'text-muted-foreground' : 'text-destructive'
          }`}>
            {isNeutral ? 'No change' : `${Math.abs(change)}% from last month`}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};