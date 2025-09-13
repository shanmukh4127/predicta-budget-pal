import { Transaction, Budget, Goal, SpendingData } from '@/types/finance';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    amount: -45.50,
    description: 'Textbook: Advanced Mathematics',
    category: 'Education',
    date: '2024-01-15',
    type: 'expense'
  },
  {
    id: '2',
    amount: -12.99,
    description: 'Lunch at Campus Cafe',
    category: 'Food',
    date: '2024-01-15',
    type: 'expense'
  },
  {
    id: '3',
    amount: 500.00,
    description: 'Part-time Job Payment',
    category: 'Income',
    date: '2024-01-14',
    type: 'income'
  },
  {
    id: '4',
    amount: -89.99,
    description: 'Netflix & Spotify Subscriptions',
    category: 'Entertainment',
    date: '2024-01-13',
    type: 'expense'
  },
  {
    id: '5',
    amount: -25.00,
    description: 'Bus Pass',
    category: 'Transportation',
    date: '2024-01-12',
    type: 'expense'
  }
];

export const mockBudgets: Budget[] = [
  { category: 'Food', allocated: 300, spent: 187.50, color: '#10b981' },
  { category: 'Education', allocated: 200, spent: 145.50, color: '#3b82f6' },
  { category: 'Entertainment', allocated: 150, spent: 89.99, color: '#f59e0b' },
  { category: 'Transportation', allocated: 100, spent: 75.00, color: '#ef4444' },
  { category: 'Shopping', allocated: 120, spent: 56.99, color: '#8b5cf6' }
];

export const mockGoals: Goal[] = [
  {
    id: '1',
    name: 'Emergency Fund',
    target: 1000,
    current: 350,
    deadline: '2024-06-01',
    category: 'Savings'
  },
  {
    id: '2',
    name: 'New Laptop',
    target: 800,
    current: 245,
    deadline: '2024-04-15',
    category: 'Technology'
  },
  {
    id: '3',
    name: 'Study Abroad',
    target: 3000,
    current: 1200,
    deadline: '2024-12-01',
    category: 'Education'
  }
];

export const mockSpendingData: SpendingData[] = [
  { month: 'Sep', amount: 850, predicted: 820 },
  { month: 'Oct', amount: 920, predicted: 890 },
  { month: 'Nov', amount: 780, predicted: 810 },
  { month: 'Dec', amount: 950, predicted: 920 },
  { month: 'Jan', amount: 720, predicted: 750 },
  { month: 'Feb', amount: 0, predicted: 780 },
  { month: 'Mar', amount: 0, predicted: 820 }
];