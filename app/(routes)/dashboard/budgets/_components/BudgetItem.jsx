import Link from "next/link";
import React from "react";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

function BudgetItem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };

  const getProgressColor = () => {
    const percentage = calculateProgressPerc();
    if (percentage >= 90) return "bg-red-500";
    if (percentage >= 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStatusIcon = () => {
    const percentage = calculateProgressPerc();
    if (percentage >= 90) return <AlertTriangle className="w-4 h-4 text-red-500" />;
    if (percentage >= 70) return <TrendingUp className="w-4 h-4 text-yellow-500" />;
    return <TrendingDown className="w-4 h-4 text-green-500" />;
  };

  const remaining = budget.amount - (budget.totalSpend || 0);

  return (
    <Link href={"/dashboard/expenses/" + budget?.id}>
      <div
        className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 h-[200px] cursor-pointer card-hover"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
              {budget?.icon}
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">{budget.name}</h3>
              <p className="text-sm text-muted-foreground">
                {budget.totalItem || 0} {budget.totalItem === 1 ? 'Item' : 'Items'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-xl text-foreground">${budget.amount}</p>
            <div className="flex items-center space-x-1 justify-end">
              {getStatusIcon()}
              <span className="text-xs text-muted-foreground">{calculateProgressPerc()}%</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-medium">
              ${budget.totalSpend || 0} spent
            </span>
            <span className={`font-medium ${remaining >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
              ${Math.abs(remaining)} {remaining >= 0 ? 'remaining' : 'over budget'}
            </span>
          </div>
          
          <div className="relative">
            <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-300 ${getProgressColor()}`}
                style={{ width: `${calculateProgressPerc()}%` }}
              />
            </div>
            {calculateProgressPerc() > 100 && (
              <div className="absolute top-0 right-0 -mt-1 -mr-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BudgetItem;
