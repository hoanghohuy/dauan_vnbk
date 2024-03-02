import { Alert } from "@/components/alert/alert";

export async function getAllPost() {
  try {
    const resp = await fetch("/api/exam", { method: "GET" });
    if (resp.status === 200) {
      const respData = await resp.json();
      return respData;
    }
  } catch (error) {
    Alert("warning", "Lấy danh sách bài viết thất bại.");
    return [];
  }
}

export async function getPostByID(id) {
  try {
    const resp = await fetch(`/api/exam/${id}`, { method: "GET" });
    if (resp.status === 200) {
      const respData = await resp.json();
      return respData;
    }
  } catch (error) {
    Alert("warning", "Lấy chi tiết bài viết thất bại.");
    return {};
  }
}

export async function getPostByIDServer(id) {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/exam/${id}`,
      {
        method: "GET",
      }
    );
    if (resp.status === 200) {
      const respData = await resp.json();
      return respData;
    }
  } catch (error) {
    console.log("error", error.message);
    return {};
  }
}
