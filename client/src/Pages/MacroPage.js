import React, { useState } from "react";

function TestPage({ Username }) {
  const [testUser, setTestUser] = useState({ name: Username });

  return (
    <div>
      <h1>
        Welcome, <span>{testUser.name}</span>
      </h1>
      <div className="p">This is the macronutrient tracking page</div>
    </div>
  );
}

export default TestPage;
