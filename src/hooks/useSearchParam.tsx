export function useSearchParam(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  const searchParam = searchParams?.search;

  if (!searchParam) return undefined;

  return decodeURIComponent(searchParams.search as string);
}
