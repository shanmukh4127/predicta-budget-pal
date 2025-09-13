import { StatsCard } from '@/components/dashboard/StatsCard';
import { SpendingChart } from '@/components/dashboard/SpendingChart';
import { BudgetOverview } from '@/components/dashboard/BudgetOverview';
import { GoalsTracking } from '@/components/dashboard/GoalsTracking';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  CreditCard,
  PlusCircle,
  Bell,
  Settings,
  User
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <DollarSign className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">StudyFinance</h1>
                <p className="text-sm text-muted-foreground">Smart financial management for students</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, Alex! 👋
              </h2>
              <p className="text-muted-foreground">
                Here's your financial overview for January 2024
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground shadow-glow">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Balance"
            value="$1,247.50"
            change={12.5}
            icon={<DollarSign className="h-5 w-5" />}
          />
          <StatsCard
            title="Monthly Spending"
            value="$720.00"
            change={-8.2}
            icon={<CreditCard className="h-5 w-5" />}
          />
          <StatsCard
            title="Savings Goal"
            value="$350.00"
            change={15.3}
            icon={<Target className="h-5 w-5" />}
          />
          <StatsCard
            title="Budget Remaining"
            value="$280.00"
            change={0}
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <SpendingChart />
            <RecentTransactions />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <BudgetOverview />
            <GoalsTracking />
          </div>
        </div>

        {/* AI Insights Banner */}
        <div className="mt-8">
          <div className="bg-gradient-primary rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-primary-foreground mb-2">
              🤖 AI Financial Insights
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Based on your spending patterns, we predict you'll save $45 this month by reducing entertainment expenses by 15%.
            </p>
            <Button 
              variant="secondary" 
              className="bg-white/20 hover:bg-white/30 text-primary-foreground border-white/30"
            >
              View Full Analysis
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
