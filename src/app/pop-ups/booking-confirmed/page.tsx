import Link from "next/link";

export const metadata = { title: "Ticket Confirmed — Delhi Darling Table" };

export default function PopUpBookingConfirmedPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center">
      <section className="px-6 max-w-6xl mx-auto py-24 w-full text-center">
        <div className="diamond-separator mb-10" />
        <h1 className="font-heading text-5xl md:text-7xl mb-6">
          You&apos;re in.
        </h1>
        <p className="font-heading italic text-2xl text-muted-foreground mb-4">
          Your ticket is confirmed.
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-md mx-auto leading-relaxed mb-12">
          A confirmation email is on its way. We&apos;ll see you there.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/pop-ups"
            className="font-body text-sm tracking-widest uppercase px-8 py-4 border border-border hover:bg-secondary transition-colors"
          >
            Back to Pop-Ups
          </Link>
          <Link
            href="/"
            className="font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
        <div className="diamond-separator mt-10" />
      </section>
    </div>
  );
}
