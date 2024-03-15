"use client";
import React, { useEffect, useState } from "react";
import PostSkeleton from "../skeleton/postSkeleton";
import { getAllPost } from "@/libs/getPost";

export default function Danhsach() {
  const [dataPost, setDataPost] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [dataThumbnail, setDataThumbnail] = useState([]);
  const [showLength, setShowLength] = useState(6);

  const getData = async () => {
    const data = await getAllPost();
    const dataAvailable = data.filter((item) => item.published === 1);
    setDataPost(dataAvailable);
    getThumbnailTiktok(dataAvailable);
    setLoadingData(false);
  };

  const handleShowMore = () => {
    setShowLength(showLength + 6);
  };

  const getThumbnailTiktok = async (data) => {
    const dataOnlyTiktokLink = data.filter((link) =>
      link.videoLink.includes("tiktok")
    );
    let arr = [];
    dataOnlyTiktokLink.map(async (item, index) => {
      if (item.videoLink && item.videoLink.includes("tiktok")) {
        try {
          const get = await fetch(
            `https://www.tiktok.com/oembed?url=${item.videoLink}`
          );
          if (get.status == 200) {
            const data = await get.json();
            const newItem = { id: item._id, thumb: data.thumbnail_url };
            arr.push(newItem);
            setDataThumbnail([...arr]);
            // if (index == dataOnlyTiktokLink.length - 1) {
            //   setDataThumbnail([...arr]);
            // }
          }
        } catch (error) {
          const newItem = { id: item._id, thumb: "" };
          arr.push(newItem);
          setDataThumbnail([...arr]);
        }
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="danhsach" className="my-4 md:px-5 sm:px-5">
      <div className=" bg-white px-8 py-6 rounded-xl max-w-[850px] mx-auto flex flex-col gap-3 sm:px-6">
        <h2 className="text-[#1239A7] font-[700] text-[20px] text-center uppercase mb-0">
          DANH SÁCH BÀI DỰ THI
        </h2>
        <div className="pt-2">
          {loadingData ? (
            <PostSkeleton />
          ) : (
            <>
              <div className="row">
                {dataPost && dataPost.length > 0
                  ? dataPost.slice(0, showLength).map((item, index) => (
                      <div key={item._id} className="col-4 pb-4 sm:!w-[50%]">
                        <div className="bai-thi-wrapper relative rounded-md">
                          <a
                            href={`/bai-thi/${item._id}`}
                            className="hidden mask-baithi no-underline text-white text-[12px] items-center justify-center absolute w-full h-full bg-[#777] z-[2]"
                          >
                            <div className="flex flex-col items-center justify-center gap-1">
                              <div className="text-[15px] font-[500]">
                                {item.name}
                              </div>
                              <div className="overflow-hidden text-[13px] font-[500] text-center text-ellipsis line-clamp-2">
                                {item.title}
                              </div>
                            </div>
                          </a>
                          {item.images?.length > 0 ? (
                            <img
                              className="w-full h-auto aspect-[1.5] object-cover rounded-md"
                              src={`${process.env.NEXT_PUBLIC_SERVER_FILE_URL}/${process.env.NEXT_PUBLIC_SITE_NAME}${item.images[0]}`}
                            />
                          ) : item.videoLink?.length > 0 &&
                            item.videoLink.includes("youtube") ? (
                            <img
                              className="w-full h-auto aspect-[1.5] object-cover rounded-md"
                              src={`https://img.youtube.com/vi/${
                                item.videoLink.split("=")?.[1]
                              }/0.jpg`}
                            />
                          ) : item.videoLink?.length > 0 &&
                            item.videoLink?.includes("tiktok") ? (
                            <>
                              {dataThumbnail &&
                              dataThumbnail.find(
                                (thumb) => thumb.id == item._id
                              ) &&
                              dataThumbnail.find(
                                (thumb) => thumb.id == item._id
                              ).thumb !== "" ? (
                                <img
                                  className="w-full h-auto aspect-[1.5] object-cover rounded-md"
                                  loading="lazy"
                                  src={
                                    dataThumbnail &&
                                    dataThumbnail.find(
                                      (thumb) => thumb.id == item._id
                                    ) &&
                                    dataThumbnail.find(
                                      (thumb) => thumb.id == item._id
                                    ).thumb
                                  }
                                />
                              ) : (
                                <div className="w-full px-2 h-auto aspect-[1.5] object-cover rounded-md flex items-center justify-center text-center bg-[#777]">
                                  <img
                                    src="/image_bg.png"
                                    className="absolute w-full h-full top-0 left-0 rounded-md z-[1]"
                                  />
                                  <div className="flex flex-col items-center justify-center gap-1 z-[1]">
                                    <div className="text-white font-[500] text-[15px]">
                                      {item.name}
                                    </div>
                                    <div className="text-white font-[500] text-[13px] overflow-hidden text-center text-ellipsis line-clamp-2">
                                      {item.title}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="w-full px-2 h-auto aspect-[1.5] object-cover rounded-md flex items-center justify-center text-center bg-[#777]">
                              <img
                                src="/image_bg.png"
                                className="absolute w-full h-full top-0 left-0 rounded-md z-[1]"
                              />
                              <div className="flex flex-col items-center justify-center gap-1 z-[1]">
                                <div className="text-white font-[500] text-[15px]">
                                  {item.name}
                                </div>
                                <div className="text-white font-[500] text-[13px] overflow-hidden text-center text-ellipsis line-clamp-2">
                                  {item.title}
                                </div>
                              </div>
                            </div>
                            // <img
                            //   className="w-full h-auto aspect-[1.5] object-cover rounded-md"
                            //   src="/banner_thele.png"
                            // />
                          )}
                        </div>
                      </div>
                    ))
                  : "Hiện tại chưa có bài dự thi nào."}
              </div>
              {showLength < dataPost.length ? (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMore}
                    className="px-6 py-[10px] bg-[#0A2E97] text-white rounded-md xs:w-full disabled:bg-[#60A5FA] hover:bg-[#00196B]"
                  >
                    Xem thêm
                  </button>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
