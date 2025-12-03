import { useEffect, useState } from "react";
import axios from "axios";

function Pipeline() {
  const [runs, setRuns] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}/pipeline`)
      .then(res => setRuns(res.data))
      .catch(() => setRuns([]));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>CI/CD Pipeline Status</h2>

      {runs.length === 0 ? (
        <p>No pipeline runs found.</p>
      ) : runs.map((run) => (
        <div key={run.id} style={{
          padding: 15,
          margin: "12px 0",
          border: "1px solid #ccc",
          borderRadius: 6,
          background: "#f9f9f9"
        }}>
          <p><b>Workflow:</b> {run.name}</p>
          <p><b>Status:</b> 
            {run.conclusion === "success" ? (
              <span style={{ color: "green", fontWeight: "bold" }}> ✔ Success</span>
            ) : (
              <span style={{ color: "red", fontWeight: "bold" }}> ✘ Failed</span>
            )}
          </p>
          <p><b>Created:</b> {new Date(run.created_at).toLocaleString()}</p>
          <p><b>Updated:</b> {new Date(run.updated_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Pipeline;
