import { useEffect, useState } from "react";
import axios from "axios";

function Issues() {
  const [issues, setIssues] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/issues`)
      .then(res => setIssues(res.data))
      .catch(() => setIssues([]));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Issues</h2>
      {issues.length === 0 ? (
        <p>No issues found.</p>
      ) : issues.map((issue, i) => (
        <div key={i} style={{
          padding: 12,
          margin: "12px 0",
          border: "1px solid #ccc",
          borderRadius: 6
        }}>
          <p><b>Title:</b> {issue.title}</p>
          <p><b>Status:</b> {issue.state}</p>
          <p><b>User:</b> {issue.user.login}</p>
        </div>
      ))}
    </div>
  );
}

export default Issues;
