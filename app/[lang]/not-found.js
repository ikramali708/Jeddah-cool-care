import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="text-7xl font-extrabold text-sky">404</p>
        <h1 className="mt-4 text-2xl font-extrabold">Page not found · الصفحة غير موجودة</h1>
        <Link href="/" className="btn btn-call mt-8">
          Home · الرئيسية
        </Link>
      </div>
    </section>
  );
}
