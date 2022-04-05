export function getStrapiUrl(path = "") {
  return `${"http://localhost:1337/api"}${path}`;
}

export async function fetchApi<T>(path?: string) {
  const requestUrl = getStrapiUrl(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data as T;
}

export async function postApi(path: string, data: any) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const requestUrl = getStrapiUrl(path);
  const response = await fetch(requestUrl, requestOptions);
  return await response.json();
}
