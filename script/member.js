function showMemberSection(section) {
  let content = "";
  if (section === "profile") {
    content = `
      <h2>My Profile</h2>
      <div class="card">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Age:</strong> 25</p>
        <p><strong>Membership:</strong> Gold Plan</p>
      </div>
    `;
  } else if (section === "billing") {
    content = `
      <h2>My Billing</h2>
      <div class="card">
        <p><strong>Last Payment:</strong> $50 on Jan 20, 2025</p>
        <p><strong>Next Due Date:</strong> Feb 20, 2025</p>
      </div>
    `;
  } else if (section === "plans") {
    content = `
      <h2>My Plans</h2>
      <div class="card">
        <p>Workout Plan: 5 days/week</p>
        <p>Diet Plan: High Protein, Low Carb</p>
      </div>
    `;
  } else if (section === "notifications") {
    content = `
      <h2>Notifications</h2>
      <div class="card">
        <p>No new notifications right now.</p>
      </div>
    `;
  }
  document.getElementById("memberSectionContent").innerHTML = content;
}
