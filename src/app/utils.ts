export function getDataAttr(element: HTMLElement, k: string) {
  let v = undefined;
  let e: HTMLElement | null = element;
  while (!v) {
      v = e.dataset[k];
      e = e.parentElement;
      if (!e) break;
  }
  return v;
}