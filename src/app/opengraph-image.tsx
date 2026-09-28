import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f1eee8",
          color: "#181614",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, color: "#69625a" }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#b8431c" }} />
          {site.role.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, letterSpacing: -5, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 40, marginTop: 28, color: "#3a3632", maxWidth: 900 }}>
            Web products, APIs and AI-powered tools — from the interface down to the API.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
