import { setCompanies } from "@/redux/companySlice";
import { COMAPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const UseGetAllCompanies = () => {
  const dispath = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMAPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });
        console.log("called");
        if (res.data.success) {
          dispath(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompanies();
  }, []);
};

export default UseGetAllCompanies;
