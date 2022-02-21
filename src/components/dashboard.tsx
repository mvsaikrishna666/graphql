import React from "react";
import { useLazyQuery, gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const Home = () => {
  const GET_CHARS = gql`
    query Characters {
      characters(page: 1) {
        results {
          name
          id
          type
          gender
        }
      }
    }
  `;
  // const [click, { data, loading, error }] = useLazyQuery(GET_CHARS, {
  //   fetchPolicy: "cache-first",
  // });
  const { loading, error, data } = useQuery(GET_CHARS, {
    fetchPolicy: "cache-first",
  });
  console.log({ data, loading, error }, "Dash");
  return (
    <div>
      {data?.characters.results.map((item: any) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Home;
