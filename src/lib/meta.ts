export function useMeta(options: { title: string, description?: string }) {
  // 设置页面标题
  document.title = `${options.title} | ${document.title}`
  // 设置页面描述
  if (options.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute('content', options.description)
  }
}