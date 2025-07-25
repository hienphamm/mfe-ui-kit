import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

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
      componentCorePackage: 'mfe-ui-kit',
      outDir: './react-wrapper/src/components.ts',
      proxiesFile: './react-wrapper/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: false,
      customElementsDir: 'dist/ui-kit',
    }),
    vueOutputTarget({
      componentCorePackage: 'mfe-ui-kit',
      proxiesFile: './vue-wrapper/src/components.ts',
      outDir: './vue-wrapper/src/components.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: 'mfe-ui-kit',
      directivesProxyFile: './angular-wrapper/src/directives/proxies.ts',
      directivesArrayFile: './angular-wrapper/src/directives/index.ts',
    }),
  ],
  plugins: [
    tailwind({
      tailwindConf: 'tailwind.config.js'
    }),
    tailwindHMR()
  ]
};
