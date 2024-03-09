"use client";
import React, { useEffect, useState } from "react";
import PostSkeleton from "../skeleton/postSkeleton";
import { getAllPost } from "@/libs/getPost";

export default function Danhsach() {
  const [dataPost, setDataPost] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const getData = async () => {
    const data = await getAllPost();
    setDataPost(data.filter((item) => item.published === 1));
    setLoadingData(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="danhsach" className="my-4 sm:px-5">
      <div className=" bg-white px-8 py-6 rounded-xl max-w-[672px] mx-auto flex flex-col gap-3 sm:px-6">
        <h2 className="text-[#1239A7] font-[700] text-[20px] text-center uppercase mb-0">
          DANH SÁCH BÀI DỰ THI
        </h2>
        <div className="pt-2">
          {loadingData ? (
            <PostSkeleton />
          ) : (
            <div className="row">
              {dataPost && dataPost.length > 0
                ? dataPost.map((item, index) => (
                    <div key={item._id} className="col-4 pb-4 sm:!w-[50%]">
                      <div className="bai-thi-wrapper relative rounded-md">
                        <a
                          href={`/bai-thi/${item._id}`}
                          className="hidden mask-baithi no-underline text-white text-[12px] items-center justify-center absolute w-full h-full bg-[#777]"
                        >
                          <div className="flex flex-col items-center justify-center gap-1">
                            <div className="text-[14px]">{item.name}</div>
                            <div className="overflow-hidden text-center text-ellipsis line-clamp-2">
                              {item.title}
                            </div>
                          </div>
                        </a>
                        {item.images?.length > 0 ? (
                          <img
                            className="w-full h-auto aspect-[1.5] object-cover rounded-md"
                            src={`${process.env.NEXT_PUBLIC_SERVER_FILE_URL}/${process.env.NEXT_PUBLIC_SITE_NAME}${item.images[0]}`}
                          />
                        ) : (
                          <img
                            className="w-full h-auto aspect-[1.5] object-cover rounded-md"
                            src="/banner_thele.png"
                          />
                        )}
                      </div>
                    </div>
                  ))
                : "Hiện tại chưa có bài dự thi nào."}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
