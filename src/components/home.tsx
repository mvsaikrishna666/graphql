import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { client } from "../index";
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
  const GET_CHAR = gql`
    query Character($id: ID!) {
      character(id: $id) {
        id
        name
        gender
        type
      }
    }
  `;
  const READ_CHAR = gql`
    query Character($id: ID!) {
      character(id: $id) {
        name
        id
        type
        gender
      }
    }
  `;

  const WRITE_CHAR = gql`
    query Character($id: ID!) {
      character(id: $id) {
        name
        id
        type
        gender
      }
    }
  `;

  const readDataFormCache = (id: any) =>
    client.readQuery({
      query: READ_CHAR,
      variables: {
        id: id,
      },
    });
  const newData = {
    character: {
      __typename: "Character",
      id: 5,
      name: "Buy grapes 🍇",
      gender: "male",
      type: "jdklf",
    },
  };
  const writeDataInCache = (data: any, id: any) =>
    client.writeQuery({
      query: WRITE_CHAR,
      data: data,
      variables: {
        id: id,
      },
    });
  const { loading, error, data } = useQuery(GET_CHARS, {});

  const char = useQuery(GET_CHAR, {
    variables: {
      id: 5,
    },
  });
  console.log(data?.characters.results);
  console.log(readDataFormCache(5), "readDataFormCache");

  return (
    <div>
      <button onClick={() => writeDataInCache(newData, 5)}>Change item</button>
      {data?.characters.results.map((item: any) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Home;
