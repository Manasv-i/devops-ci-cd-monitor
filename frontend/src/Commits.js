import { useEffect, useState } from "react";
import axios from "axios";

function Commits() {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/commits")
      .then(res => {
        setCommits(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <h2 style={{ padding: 20 }}>Loading commits...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Recent Commits</h2>
      {commits.map((c, i) => (
        <div key={i} style={{
          padding: 12,
          margin: "12px 0",
          border: "1px solid #ccc",
          borderRadius: 6
        }}>
          <p><b>Message:</b> {c.commit.message}</p>
          <p><b>Author:</b> {c.commit.author.name}</p>
          <p><b>Date:</b> {new Date(c.commit.author.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Commits;
