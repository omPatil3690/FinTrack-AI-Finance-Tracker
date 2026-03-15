import React from "react";
import IncomeList from "./_components/IncomeList";

function Income() {
  return (
    <div className="p-10 bg-background text-foreground min-h-full">
      <h2 className="font-bold text-3xl text-foreground">My Income Streams</h2>
      <IncomeList />
    </div>
  );
}

export default Income;
