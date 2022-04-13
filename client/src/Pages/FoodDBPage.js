import React, { useState } from "react";

function FoodDBPage({ Username }) {
  const [testUser, setTestUser] = useState({ name: Username });

  return (
    <div>
      <h1>
        Welcome, <span>{testUser.name}</span>
      </h1>
      <div className="p">This is the Food Database page</div>
    </div>
  );
}

export default FoodDBPage;
