import { myAxios } from "../Api's/Axios";

export const uploadFile = (file, onUploadProgress) => {
  const formData = new FormData();

  formData.append("file", file);

  return myAxios.post("/api/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });

  // return myAxios.post("/api/files/upload", formData, {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  //   onUploadProgress,
  // });
};

export const getFiles = async () => {
  return await myAxios.get("/api/files/files");
};
