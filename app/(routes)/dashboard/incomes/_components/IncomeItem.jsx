import React from "react";

function IncomeItem({ budget, onDelete }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };
  return (
    <div
      className="p-5 border border-border rounded-2xl bg-card
    hover:shadow-md cursor-pointer h-[170px]"
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2
            className="text-2xl p-3 px-4
              bg-muted rounded-full 
              "
          >
            {budget?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget.name}</h2>
            <h2 className="text-sm text-muted-foreground">{budget.totalItem} Item</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-primary text-lg"> ${budget.amount}</h2>
          {onDelete && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onDelete(budget);
              }}
              className="text-rose-500 text-sm hover:text-rose-600"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
