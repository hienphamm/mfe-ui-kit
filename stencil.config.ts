import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

export const config: Config = {
  namespace: 'ui-kit',
  globalStyle: 'src/global/tailwind.css',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: 'dist',
      empty: false
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      dir: 'dist/ui-kit',
      generateTypeDeclarations: true
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    reactOutputTarget({
      componentCorePackage: 'ui-kit',
      outDir: '../shell/src/components/stencil-generated/index.ts',
      proxiesFile: '../shell/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: false,
      customElementsDir: 'dist/ui-kit',
    }),
  ],
  plugins: [
    tailwind({
      tailwindConf: 'tailwind.config.js'
    }),
    tailwindHMR()
  ]
};
