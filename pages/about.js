import Link from "next/link";
export default () => (
  <div>
    <div>About us</div>
    <div>
      Back to{" "}
      <Link href="/" as={process.env.SERVER_ROOT + "/"}>
        <a>Home</a>
      </Link>
    </div>
  </div>
);
