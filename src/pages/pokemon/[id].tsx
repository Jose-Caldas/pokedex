import { Details } from "..";

function Pokemon() {
  return (
    <div>
      <h1>Sorry! In progress...</h1>
      <Details />
    </div>
  );
}

export default Pokemon;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
