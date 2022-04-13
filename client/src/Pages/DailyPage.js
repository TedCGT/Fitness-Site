import React, { useState } from "react";

function DailyPage({ Username }) {
  const [testUser, setTestUser] = useState({ name: Username });

  return (
    <div>
      <h1>
        Welcome, <span>{testUser.name}</span>
      </h1>
      <div className="p">This is the Daily Calorie Intake tracking page</div>
    </div>
  );
}

export default DailyPage;
