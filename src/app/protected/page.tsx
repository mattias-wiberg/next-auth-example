"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "../../components/layout";
import AccessDenied from "../../components/access-denied";

export default function ProtectedPage() {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      //https://jsonplaceholder.typicode.com/todos/1
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json) {
        setContent(json);
      }
    };
    fetchData();
  }, [session]);
  return (
    <Layout>
      {session ? (
        <>
          <h1>Protected Page</h1>
          <pre>{JSON.stringify(content, null, 2)}</pre>
        </>
      ) : (
        <AccessDenied />
      )}
    </Layout>
  );
}
