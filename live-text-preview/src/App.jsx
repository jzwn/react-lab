import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div style={styles.card}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something…"
        style={styles.input}
      />
      <p style={styles.preview}>Preview: {text}</p>
    </div>
  );
}

const styles = {
  card: { fontFamily: "system-ui", maxWidth: 360, margin: "40px auto", padding: 24,
  borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,.08)" },
  input: { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #ccc",
  fontSize: 15, boxSizing: "border-box" },
  preview: { marginTop: 14, color: "#444" },
};