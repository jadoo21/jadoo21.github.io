# Resume placeholder

Drop the resume PDF at the site root so it is served at the configured URL:

```
/public/Rishabh-Roshan-Resume.pdf
```

The URL is configured in `src/data/site.ts`:

```ts
export const siteConfig = {
  resumeUrl: "/Rishabh-Roshan-Resume.pdf",
};
```

Once the PDF exists in `public/`, the "Download Resume" buttons in the navbar, hero and
contact page will download it. Until then they point at a path that is expected to be added.
