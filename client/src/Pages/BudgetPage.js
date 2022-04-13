import React, { useState } from "react";

function BudgetPage({ Username }) {
  const [testUser, setTestUser] = useState({ name: Username });

  return (
    <div>
      <h1>
        Welcome, <span>{testUser.name}</span>
      </h1>
      <div className="p">This is the Budget tracking page</div>
    </div>
  );
}

export default BudgetPage;
