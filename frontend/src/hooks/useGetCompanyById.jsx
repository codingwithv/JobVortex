import { setSingleCompany } from "@/redux/companySlice";
import { COMAPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleCompany = async (e) => {
      try {
        const res = await axios.get(
          `${COMAPANY_API_END_POINT}/get/${companyId}`,
          { withCredentials: true }
        );
        console.log(res.data.success);
        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleCompany();
  }, [companyId, dispatch]);
};

export default useGetCompanyById;
