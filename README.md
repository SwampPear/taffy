<div align="center">
    <img src="/assets/logo.png" style="width: 25%;" alt="logo"/>
</div>
<br>








your-ui-framework/
├── .storybook/       // (Optional) Storybook config for component previews/documentation
├── dist/             // Generated build output (often gitignored)
├── docs/             // Documentation site or markdown files
├── examples/         // Minimal usage examples or demos showing how to use the framework
├── node_modules/
├── public/           // (Optional) Any static assets (images, fonts, etc.) for demos/docs
├── src/
│   ├── components/   // Core, reusable UI components
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.module.css (or .scss, .less, etc.)
│   │       └── index.ts
│   ├── hooks/        // (Optional) Reusable hooks (if using React or similar)
│   ├── styles/       // Global or shared styles (themes, variables, utility classes)
│   ├── types/        // Shared TypeScript type definitions & interfaces
│   ├── utils/        // General-purpose helper functions
│   └── index.ts      // Entry point that exports your UI framework’s modules
├── tests/            // Centralized tests (alternatively place near components)
├── package.json
├── tsconfig.json
└── webpack.config.js or rollup.config.js (or your chosen bundler config)