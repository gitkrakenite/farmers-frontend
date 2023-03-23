import React, { useEffect } from "react";
import "./problems.css";
import { DummyProblems } from "../../data";
import { useSelector, useDispatch } from "react-redux";
import { getIssues, deleteIssue } from "../../features/issues/issueSlice";
import moment from "moment";
import Spinner from "../Spinner";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-hot-toast";

const Problems = () => {
  const dispatch = useDispatch();
  const { issues, isLoading } = useSelector((state) => state.issues);
  const { user } = useSelector((state) => state.auth);

  const handleDeleteIssue = (issueId) => {
    if (!issueId) {
      toast.error("ID needed");
      return;
    } else {
      dispatch(deleteIssue(issueId));
      toast.success("Deleted successfully");
    }
  };

  useEffect(() => {
    dispatch(getIssues());
  }, [dispatch]);

  return (
    <div className=" w-[100%]">
      <div>
        <p className="text-md" style={{ fontWeight: "800" }}>
          Latest Alerts
        </p>
      </div>

      {/* {isLoading && <Spinner message="Fetching Issues" />} */}

      {issues?.map((problem) => (
        <div key={problem._id} className="probItem">
          <div className="">
            <p className="pb-[10px] " style={{ wordBreak: "break-all" }}>
              {problem.info}
            </p>
            <div
              className="flex justify-between pt-[10px]"
              style={{ borderTop: "1px solid gray" }}
            >
              <p>{problem.username}</p>
              <p>{moment(problem.createdAt).fromNow()}</p>

              {user.name === problem.username && (
                <RiDeleteBinLine
                  className="text-2xl text-red-600 cursor-pointer"
                  title="Delete post"
                  onClick={() => handleDeleteIssue(problem._id)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Problems;
