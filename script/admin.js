function showAdminSection(section) {
  let content = "";
  if(section === "members") {
    content = `
      <h2>Manage Members</h2>
      <p>Here you can add, update, or delete members.</p>
      <table>
        <tr><th>Name</th><th>Age</th><th>Plan</th><th>Actions</th></tr>
        <tr><td>John Doe</td><td>25</td><td>Gold</td>
            <td><button>Edit</button> <button>Delete</button></td></tr>
      </table>
    `;
  } else if(section === "billing") {
    content = `
      <h2>Billing</h2>
      <p>Generate bills and view payment history.</p>
      <button>Create New Bill</button>
    `;
  } else if(section === "notifications") {
    content = `
      <h2>Notifications</h2>
      <p>Send important updates to members.</p>
      <textarea rows="4" cols="50" placeholder="Write your message..."></textarea><br>
      <button>Send Notification</button>
    `;
  } else if(section === "reports") {
    content = `
      <h2>Reports</h2>
      <p>Export data and view system reports.</p>
      <button>Download Report</button>
    `;
  }
  document.getElementById("adminSectionContent").innerHTML = content;
}
