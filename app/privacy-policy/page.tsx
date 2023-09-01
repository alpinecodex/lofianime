import Header from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col container mt-6 space-y-4 divide-y mb-10">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold text-center">
            Privacy Policy for lofianime.com
          </h1>
          <h2 className="uppercase font-bold text-center">
            Last updated: September 1, 2023
          </h2>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">Introduction</h3>
          <p>
            Welcome to lofianime.com, an AI application to generate lofi
            anime-inspired landscape images. This web app is owned and operated
            by Alpine Codex LLC. This Privacy Policy outlines our guidelines on
            the collection, use, and disclosure of your information when you use
            our service. We are committed to protecting your personal
            information and your right to privacy.
          </p>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">Scope</h3>
          <p>
            This Privacy Policy applies to all users who access our web
            application globally, even though our primary operations are in the
            United States. By using our web app, you acknowledge that you have
            read, understood, and agree to be bound to all the terms of this
            Privacy Policy.
          </p>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">Data Collection</h3>
          <h5 className="text-xl italic font-bold">
            What information do we collect?
          </h5>
          <p>
            When you sign up to use lofianime.com, we collect the following
            personal information from you:
          </p>
          <ul className="list-disc ml-4">
            <li>email address</li>
            <li>full name</li>
          </ul>
          <p>This information is collected via Google OAuth provider.</p>
          <h5 className="text-xl font-bold">Minors</h5>
          <p>
            We do not explicitly collect or solicit data from minors. However,
            anyone with a Google account can sign up for our service.
          </p>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">Data Use</h3>
          <p>The information we collect is used for:</p>
          <ul className="list-disc ml-4">
            <li>Providing the services of lofianime.com</li>
            <li>Sending you product updates and related product news</li>
          </ul>
          <p>
            Your email data is not sold to third parties but is shared with our
            email service provider for the purpose of sending you updates and
            news.
          </p>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">Data Storage and Security</h3>
          <p>
            Your data is stored on a secure database through a cloud database
            provider. We also employ standard security protocols to safeguard
            your data. Please note that no method of transmission over the
            internet or method of electronic storage is 100% secure; therefore,
            we cannot guarantee its absolute security.
          </p>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">User Rights</h3>
          <p>
            You have the right to access, modify, or delete your personal
            information through your Google account. If you choose to sign-up
            with Google, you cannot opt-out of sharing your email or name as it
            is essential for using our service.
          </p>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">Cookie Policy</h3>
          <p>
            We do not use cookies, thus there is no need to opt out of cookies.
          </p>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">Third-Party Services</h3>
          <p>We integrate with the following third-party services:</p>
          <ul className="list-disc ml-4">
            <li>Google, for authentication</li>
            <li>Replicate, for AI models</li>
            <li>Upstash Redis, for caching and rate-limiting</li>
            <li>Planetscale, for hosting our database</li>
          </ul>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">Updates to this Policy</h3>
          <p>
            Any changes to this Privacy Policy will be communicated to you via
            email. It&apos;s encouraged to periodically review this Privacy
            Policy for any changes.
          </p>
        </section>
        <section className="space-y-4 py-4">
          <h3 className="text-3xl font-bold">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or wish to
            exercise any of your data protection rights, you may contact us at:
            dev@alpinecodex.com.
          </p>
        </section>
      </main>
    </>
  );
}
