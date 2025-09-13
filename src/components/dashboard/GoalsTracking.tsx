import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { mockGoals } from '@/data/mockData';
import { Target, Calendar, Plus } from 'lucide-react';
import { format } from 'date-fns';

export const GoalsTracking = () => {
  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground flex items-center gap-2">
          <Target className="h-5 w-5" />
          Financial Goals
        </CardTitle>
        <Button size="sm" className="bg-primary hover:bg-primary/80 text-primary-foreground">
          <Plus className="h-4 w-4 mr-1" />
          Add Goal
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {mockGoals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          const deadline = new Date(goal.deadline);
          const isUrgent = deadline < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
          
          return (
            <div key={goal.id} className="space-y-3 p-4 rounded-lg bg-muted/20 border border-border/30">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground">{goal.name}</h4>
                  <p className="text-sm text-muted-foreground">{goal.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-foreground">
                    ${goal.current.toFixed(0)} / ${goal.target.toFixed(0)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ${remaining.toFixed(0)} to go
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground font-medium">
                    {percentage.toFixed(1)}%
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Due {format(deadline, 'MMM dd, yyyy')}</span>
                </div>
                {isUrgent && (
                  <span className="text-warning text-xs font-medium">
                    Deadline approaching!
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};