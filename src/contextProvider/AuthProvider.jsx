import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import toast from "react-hot-toast";
import { error_msg } from "../utils/error.msg";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosSecure = useAxiosSecure();

  const { mutateAsync: register, isPending: registerLoading } = useMutation({
    mutationKey: ["registration"],
    mutationFn: async (body) => {
      const { data } = await axiosSecure.post("/auth/register", body);
      if (data.success) {
        toast.success(data?.message);
        setUser(data.data);
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
        toast.success(data?.message);
        setUser(data);
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
        error_msg(error?.response?.data?.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [axiosSecure]);

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
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
