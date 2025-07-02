import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { error_msg } from "../utils/error.msg";
import AuthContext from "./AuthContext";
import { getLocalUser, setLocalUser } from "../utils/localUser";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [fetchData, setFetchData] = useState(false);

  const { mutateAsync: register, isPending: registerLoading } = useMutation({
    mutationKey: ["registration"],
    mutationFn: async (body) => {
      const { data } = await axiosSecure.post("/auth/register", body);
      if (data.success) {
        toast.success(data?.message);
        setUser(data.data);
        setLocalUser();
      }
    },
    onError: (error) => {
      error_msg(error?.response?.data?.message);
    },
  });

  const { mutateAsync: login, isPending: isLoggingIn } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (body) => {
      const { data } = await axiosSecure.post("/auth/login", body);
      if (data.success) {
        toast.success("Login Successful");
        setUser(data.data);
        setLocalUser();
      }
    },
    onError: (error) => {
      error_msg(error?.response?.data?.message);
    },
  });



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axiosSecure("/auth");
        setUser(data.data);
      } catch (error) {
        console.log(error?.response?.data?.message || error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    const user  = getLocalUser();
    if(user) {
      fetchUserData();
    } else {
      setLoading(false);
      setUser(null);
    }
  }, [axiosSecure, fetchData]);

  const data = {
    signUp: {
      register,
      isPending: registerLoading,
    },
    signIn: {
      login,
      isLoggingIn,
    },
    user,
    loading,
    setLoading,
    fetchData,
    setFetchData,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
