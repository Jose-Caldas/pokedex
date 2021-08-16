import React from "react";

function Pokemon() {
  return (
    <div>
      <h1>todo: a Pokemon page</h1>
    </div>
  );
}

export default Pokemon;

export async function getStaticProps() {
  return {
    props: {},
  };
}
