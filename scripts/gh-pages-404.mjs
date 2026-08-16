import { copyFileSync, existsSync } from "node:fs";

const indexPath = "dist/index.html";
const notFoundPath = "dist/404.html";

if (existsSync(indexPath)) {
  copyFileSync(indexPath, notFoundPath);
  console.log(
    "Copied dist/index.html to dist/404.html for SPA routing on static hosts.",
  );
} else {
  console.warn("dist/index.html not found; skipping 404 copy.");
}
