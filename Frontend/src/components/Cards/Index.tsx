"use client";
import { HoverEffect } from "./Cards";
import useFetch from "../../Hooks/useFetch";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


interface Account {
  name: string;
  username: string;
  password: string;
  website_link: string;
}

export function CardHoverEffectDemo() {
  const { data, error, loading } = useFetch<Account[]>("http://localhost:8080/your-accounts");
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    if (data) {
      setAccounts(data.map(account => ({
        name: account.name,
        username: account.username,
        password: account.password,
        website_link: account.website_link
      })));
    }
  }, [data]);
  
if(error){
  return (
    <div>
      {error.message}
    </div>
  )
}
  if (loading) {
    return (
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    );
  }

  return <HoverEffect items={accounts} />;
}
