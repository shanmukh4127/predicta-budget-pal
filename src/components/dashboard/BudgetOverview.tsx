import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { mockBudgets } from '@/data/mockData';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export const BudgetOverview = () => {
  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockBudgets.map((budget) => {
          const percentage = (budget.spent / budget.allocated) * 100;
          const isOverBudget = percentage > 100;
          const isNearLimit = percentage > 80 && percentage <= 100;
          
          return (
            <div key={budget.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">
                    {budget.category}
                  </span>
                  {isOverBudget && (
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  )}
                  {!isOverBudget && !isNearLimit && (
                    <CheckCircle className="h-4 w-4 text-success" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    ${budget.spent.toFixed(2)} / ${budget.allocated.toFixed(2)}
                  </span>
                  <Badge 
                    variant={isOverBudget ? "destructive" : isNearLimit ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {percentage.toFixed(0)}%
                  </Badge>
                </div>
              </div>
              <Progress 
                value={Math.min(percentage, 100)} 
                className="h-2"
                style={{
                  '--progress-background': budget.color,
                } as React.CSSProperties}
              />
              {isOverBudget && (
                <p className="text-xs text-destructive">
                  Over budget by ${(budget.spent - budget.allocated).toFixed(2)}
                </p>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};