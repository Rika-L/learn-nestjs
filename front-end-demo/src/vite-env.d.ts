/// <reference types="vite/client" />
/// <reference types="@vue-macros/reactivity-transform/macros-global" />

interface ImportMetaEnv {
  readonly VITE_ROUTER_HISTORY: 'hash' | 'h5'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
