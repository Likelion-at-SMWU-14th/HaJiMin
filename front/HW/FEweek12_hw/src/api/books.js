import axios from "axios";

export async function searchBooks(query, langRestrict) {
  try {
    const res = await axios.get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q: query,
        ...(langRestrict && { langRestrict }),
        maxResults: 20,
      },
    });
    return res.data.items ?? [];
  } catch (err) {
    if (err.response?.status === 403 || err.response?.status === 429) {
      throw new Error("요청 한도를 초과했어요. 잠시 후 다시 시도해주세요.");
    }
    throw new Error("책 검색에 실패했어요.");
  }
}
