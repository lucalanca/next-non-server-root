import Link from "next/link";

export default () => {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about" as={process.env.SERVER_ROOT + "/about"}>
        <a>About</a>
      </Link>
    </div>
  );
};
