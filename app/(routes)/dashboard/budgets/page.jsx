import React from 'react'
import BudgetList from './_components/BudgetList'

function Budget() {
  return (
    <div className="p-10 bg-background text-foreground min-h-full">
      <h2 className="font-bold text-3xl text-foreground">My Budgets</h2>
      <BudgetList/>
    </div>
  )
}

export default Budget
