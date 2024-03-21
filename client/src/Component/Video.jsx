import React, { memo, useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import AllUsers from "../Layout/AllUsers";
import { useQuery } from "@tanstack/react-query";

// Render a YouTube video player
const Video = memo(() => {
  const { user } = useContext(AuthContext);
  const [timeStamp, setTimeStamp] = useState(null);
  const [commentLoading, setCommentLoading] = useState(false);

  console.log(timeStamp);

  const {
    data: allComments,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allComments"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/comments");
      return response.data;
    },
  });

  const HandletimeStamp = (e) => {
    setTimeStamp(e.playedSeconds);
  };

  const HandleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user.displayName;
    const email = user.email;
    const image = user.photoURL;
    const comment = form.comment.value;
    const videoTimeStamp = timeStamp;
    setCommentLoading(true);

    const commentInfo = {
      name: name,
      email: email,
      image: image,
      comment: comment,
      timeStamp: videoTimeStamp,
      date: new Date(),
    };

    axios
      .post("http://localhost:5000/comments", commentInfo)
      .then((res) => {
        console.log(res.data);
        refetch();
        setCommentLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setCommentLoading(false);
      });
  };

  function convertTimestampToTime(timestampInSeconds) {
    const hours = Math.floor(timestampInSeconds / 3600);
    const minutes = Math.floor((timestampInSeconds % 3600) / 60);
    const seconds = Math.floor(timestampInSeconds % 60);

    return `${hours}:${minutes}:${seconds}`;
  }

  const filteredComments = allComments?.filter(
    (comment) =>
      convertTimestampToTime(comment.timeStamp) ===
      convertTimestampToTime(timeStamp)
  );

  console.log(filteredComments);

  return (
    <div className="bg-softpurple/20">
      <div className="container mx-auto px-4  py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
          <div>
            {/* video play */}
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              controls={true}
              width="auto"
              height="auto"
              onProgress={HandletimeStamp}
            />

            {/* Comment post */}
            <div className=" mt-10 bg-white shadow-md  rounded p-5 ">
              <div className="flex gap-5 items-center">
                <img
                  width={50}
                  height={50}
                  className=" rounded-full bg-black/40"
                  src={user?.photoURL}
                  alt="card navigate ui"
                />
                <div className=" ">
                  <h2 className="capitalize">{user?.displayName}</h2>
                  <h2 className="">{user?.email}</h2>
                </div>
              </div>
              <form
                className="flex mt-5 flex-col items-start justify-center gap-4"
                onSubmit={HandleComment}
              >
                <textarea
                  className="w-full rounded   py-2 focus:outline-none   "
                  type="textarea"
                  rows="3"
                  placeholder="Write your comment"
                  name="comment"
                />

                <div className="flex justify-end w-full">
                  <button className="   hover:bg-blue-500 rounded   transition duration-300 bg-softpurple px-6 py-2 font-medium text-white ">
                    {commentLoading ? "Comment posting...." : "Comment"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* all comment show */}
          <div className=" h-screen overflow-y-auto">
            <h1 className="font-bold text-2xl mb-5">All Comments</h1>
            {filteredComments?.length > 0
              ? filteredComments?.map((comment) => (
                  <div className=" mt-1 bg-white shadow  rounded p-5 ">
                    <div className="flex gap-5 items-center">
                      <img
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full bg-black/40"
                        src={comment?.image}
                        alt="card navigate ui"
                      />
                      <div className=" ">
                        <h2 className="capitalize">
                          {comment?.name}{" "}
                          <span className="text-gray-500 text-sm">
                            {convertTimestampToTime(comment.timeStamp)}
                          </span>
                        </h2>
                        <h2 className="">{comment?.email}</h2>
                      </div>
                    </div>
                    <div className="flex mt-5 flex-col items-start justify-center gap-4">
                      {comment?.comment}
                    </div>
                  </div>
                ))
              : "No comment available for this timestamp"}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Video;
