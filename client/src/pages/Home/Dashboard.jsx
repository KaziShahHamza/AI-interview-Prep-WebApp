import DashboardLayout from "../../components/Layouts/DashboardLayout";
import { LuPlus } from "react-icons/lu";
import { CARD_BG } from "../../Utils/data";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../Utils/axiosInstance";
import { API_PATHS } from "../../Utils/apiPaths";
import moment from "moment";
import SummaryCard from "../../components/Cards/SummaryCard";
import CreateSessionForm from "./CreateSessionForm";
import Modal from "../Modal";

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null,
  });

  const fetchAllSessions = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_ALL);
      setSessions(response.data);
    } catch (error) {
      console.error("Error fetching session data: ", error);
    }
  };

  const deleteSession = async (sessionData) => {};

  useEffect(() => {
    fetchAllSessions();
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className="container mx-auto pt-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0">
            {sessions?.map((data, index) => (
              <SummaryCard
                key={data?._id}
                colors={CARD_BG[index % CARD_BG.length]}
                role={data?.role || ""}
                topicsToFocus={data?.topicsToFocus || ""}
                experience={data?.experience || ""}
                questions={data?.questions.length || ""}
                description={data?.description || ""}
                lastUpdated={
                  data?.updatedAt
                    ? moment(data.updatedAt).format("Do MMM YYYY")
                    : ""
                }
                onSelect={() => navigate(`/interview-prep/${data?._id}`)}
                onDelete={() => setOpenDeleteAlert({ open: true, data })}
              />
            ))}
          </div>

          <button
            className="h-12 md:h-12 flex items-center justify-center gap-3 bg-[#ff9324] text-sm font-semibold text-white px-7 py-2.5 rounded-full transition-colors cursor-pointer hover:shadow-2xl hover:shadow-orange-300 fixed bottom-10 right-10 md:bottom-20  md:right-20"
            onClick={() => setOpenCreateModal(true)}
          >
            <LuPlus className="text-2xl" />
            Add New
          </button>
        </div>

        <Modal
          isOpen={openCreateModal}
          hideHeader
          onClose={() => {
            setOpenCreateModal(false);
          }}
        >
          <div>
            <CreateSessionForm />
          </div>
        </Modal>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
