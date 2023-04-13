const base = "https://0e47-34-91-24-41.ngrok.io/";

export const check_images = async (obj) => {
  const res = await fetch(`${base}/files/`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const ans = await res.json();
  return ans;
};