import { useEffect, useState } from "react";
import axios from "axios";

function PullRequests() {
  const [pulls, setPulls] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/pulls`)
      .then(res => setPulls(res.data))
      .catch(() => setPulls([]));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Pull Requests</h2>

      {pulls.length === 0 ? (
        <p>No Pull Requests found.</p>
      ) : (
        pulls.map((pr, i) => (
          <div key={i} style={{
            padding: 10,
            margin: 10,
            border: "1px solid #ddd",
            borderRadius: 6,
            background: "#fafafa"
          }}>
            <p><b>Title:</b> {pr.title}</p>
            <p><b>Author:</b> {pr.user.login}</p>
            <p><b>Status:</b> {pr.state}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PullRequests;
