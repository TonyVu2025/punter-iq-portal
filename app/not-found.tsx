import Link from "next/link";
import Layout from "./(root)/layout";

// Not found page
export default function NotFound() {
  return (
    <Layout>
      <div className="flex h-full items-center justify-center p-3 lg:p-10">
        <div className="space-y-4 text-center">
          <h2 className="lg:text-3xl">404 Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/" className="block underline">
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
