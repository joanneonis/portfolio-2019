export default async function ({ store }) {
  if (!store.state.cacheVersion) {
    store.dispatch('loadCacheVersion');
  }
}
