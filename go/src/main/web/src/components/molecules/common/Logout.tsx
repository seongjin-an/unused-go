import React from "react";
import { BasicButton } from "../../atoms/button";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { logout } from "../../../apis/user/userApi";
import { useNavigate } from "react-router-dom";

export const Logout: React.FC = () => {
  const id = 'imsi'
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const queryClient = new QueryClient();
  const logoutMutation = useMutation(logout, {
    onSuccess: data => {
      // console.log('data:', data);
      localStorage.removeItem('token')
      queryClient.invalidateQueries(['checkTokenState']).then(r => console.log('rrrr:', r));
      navigate('/main')
    },
    onError: error => {
      // console.log('error:', error)
    },
  });
  const handleLogout = () => {
    logoutMutation.mutate();
  }

  return(
    <BasicButton text='로그아웃' kind='basic' onClick={handleLogout} />
  )
}