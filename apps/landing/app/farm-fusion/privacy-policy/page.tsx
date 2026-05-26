import type { Metadata } from "next";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Hline } from "@/components/shared/hline";
import { Heading } from "@/components/shared/heading";

import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Farm Fusion — Privacy Policy",
    description:
        "Privacy Policy for the Farm Fusion mobile application by Lumenwake.",
};

const SUPPORT_EMAIL = "support@lumenwake.com";

const SupportEmail = () => (
    <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
);

export default function FarmFusionPrivacyPolicy() {
    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.titleBlock}>
                <Heading className={styles.title}>Privacy Policy</Heading>
                <p className={styles.subtitle}>Farm Fusion</p>
            </div>

            <Hline />

            <main className={styles.main}>
                <article className={styles.content}>
                    <p>
                        This privacy policy applies to the Farm Fusion app for
                        mobile devices, together with any related services
                        operated by Lumenwake (collectively, the
                        &ldquo;Application&rdquo;). Lumenwake is hereby referred
                        to as the &ldquo;Service Provider&rdquo;.
                    </p>

                    <h2>Information Collection and Use</h2>
                    <p>
                        The Application collects information when you download
                        and use it. This information may include information
                        such as:
                    </p>
                    <ul>
                        <li>Your device&apos;s Internet Protocol address</li>
                        <li>
                            The pages of the Application that you visit, the
                            time and date of your visit, the time spent on those
                            pages
                        </li>
                        <li>The time spent on the Application</li>
                        <li>Your mobile operating system you use</li>
                        <li>
                            Advertising identifiers and analytics identifiers
                            used for advertising and analytics purposes
                        </li>
                    </ul>

                    <h2>Cookies and tracking technologies</h2>
                    <p>
                        The Application or its third-party SDKs may use cookies,
                        SDKs, pixels, and similar technologies to support
                        functionality, analytics, or service delivery. Where
                        required by applicable law, the Service Provider will
                        obtain consent before using non-essential tracking
                        technologies.
                    </p>

                    <h2>Your Rights</h2>
                    <p>
                        You may request access to, correction of, or deletion of
                        your personal data held by the Service Provider. To
                        exercise these rights, or to withdraw consent where
                        processing is based on consent, contact the Service
                        Provider at <SupportEmail />.
                    </p>

                    <h2>Your California privacy rights (CCPA/CPRA)</h2>
                    <p>
                        If you are a California resident, you have the right to
                        know what personal information is collected, the right
                        to delete personal information, the right to opt out of
                        the sale or sharing of personal information, and the
                        right to non-discrimination for exercising these rights.
                        To exercise your CCPA/CPRA rights, contact the Service
                        Provider at <SupportEmail />.
                    </p>

                    <h2>Third Party Access</h2>
                    <p>
                        Only aggregated, anonymized data is periodically
                        transmitted to external services to aid the Service
                        Provider in improving the Application and their service.
                        The Service Provider may share your information with
                        third parties in the ways that are described in this
                        privacy statement.
                    </p>

                    <h2>International Data Transfers</h2>
                    <p>
                        The Service Provider or its third-party service
                        providers may transfer personal data to countries
                        outside your country of residence, including outside the
                        European Economic Area (EEA). Where applicable law
                        requires safeguards for international transfers, the
                        Service Provider will use appropriate mechanisms.
                    </p>
                    <ul>
                        <li>
                            Standard Contractual Clauses (SCCs) approved by the
                            European Commission
                        </li>
                        <li>
                            Adequacy decisions or other legally recognized
                            transfer mechanisms
                        </li>
                        <li>Your consent, where required and legally permitted</li>
                    </ul>
                    <p>
                        Data protection laws in other countries may differ from
                        those in your jurisdiction. Where required by law, the
                        Service Provider will apply appropriate safeguards and
                        obtain any consent required for the transfer.
                    </p>

                    <p>
                        Please note that the Application utilizes third-party
                        services that have their own Privacy Policy about
                        handling data. Below are the links to the Privacy Policy
                        of the third-party service providers used by the
                        Application:
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://policies.google.com/technologies/partner-sites"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                AdMob
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://firebase.google.com/support/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google Analytics for Firebase
                            </a>
                        </li>
                    </ul>

                    <p>
                        The Service Provider may disclose User Provided and
                        Automatically Collected Information:
                    </p>
                    <ul>
                        <li>
                            as required by law, such as to comply with a
                            subpoena, or similar legal process;
                        </li>
                        <li>
                            when they believe in good faith that disclosure is
                            necessary to protect their rights, protect your
                            safety or the safety of others, investigate fraud,
                            or respond to a government request;
                        </li>
                        <li>
                            with their trusted services providers who work on
                            their behalf, do not have an independent use of the
                            information the Service Provider discloses to them,
                            and have agreed to adhere to the rules set forth in
                            this privacy statement.
                        </li>
                    </ul>

                    <h2>Opt-Out Rights</h2>
                    <p>
                        You can stop further collection of information from your
                        mobile device by uninstalling the Application.
                        Uninstalling will stop the Application from collecting
                        data from your device, but it does not automatically
                        delete information that has already been transmitted to
                        the Service Provider or to third parties.
                    </p>
                    <p>
                        To request deletion of your personal data, to withdraw
                        consent, or to exercise any of your rights, contact the
                        Service Provider at <SupportEmail />.
                    </p>

                    <h2>Data Retention Policy</h2>
                    <p>
                        The Service Provider retains personal data based on its
                        necessity for the stated purposes:
                    </p>
                    <ul>
                        <li>
                            Automatically Collected Data: Retained for up to 24
                            months from collection, unless longer retention is
                            required for legal compliance
                        </li>
                        <li>
                            Aggregated and Anonymized Data: Retained indefinitely
                            as it no longer identifies you
                        </li>
                        <li>
                            Data required for legal compliance: Retained as long
                            as required by applicable law
                        </li>
                    </ul>
                    <p>
                        You may request deletion of your personal data, subject
                        to any legal obligation to retain it.
                    </p>

                    <h2>Children</h2>
                    <p>
                        The Application is not intended for children under 16
                        years of age, or such higher age as required by
                        applicable law. The Service Provider does not knowingly
                        solicit data from children or market the Application to
                        them.
                    </p>
                    <p>
                        Where parental or guardian consent is required under
                        applicable law, the Application is not intended for use
                        without that consent. The Service Provider does not
                        knowingly collect personally identifiable information
                        from children under 16 years of age in violation of
                        applicable law. In the event the Service Provider
                        discovers that a child has provided personal
                        information, the Service Provider will immediately
                        delete this from their servers. If you are a parent or
                        guardian and you are aware that your child has provided
                        the Service Provider with personal information, please
                        contact the Service Provider (<SupportEmail />) so that
                        they will be able to take the necessary actions.
                    </p>

                    <h2>Security</h2>
                    <p>
                        The Service Provider is concerned about safeguarding the
                        confidentiality of your information. The Service
                        Provider provides physical, electronic, and procedural
                        safeguards to protect information the Service Provider
                        processes and maintains.
                    </p>

                    <h2>Data Breach Notification</h2>
                    <p>
                        If a data breach occurs that affects your personal data,
                        the Service Provider will notify you in accordance with
                        applicable legal requirements, including, where
                        required, providing information about the nature of the
                        breach and the steps being taken to address it.
                    </p>

                    <h2>Changes</h2>
                    <p>
                        The Service Provider may update this Privacy Policy from
                        time to time. The Service Provider will notify you of
                        material changes by posting the updated Privacy Policy
                        with an effective date. Where required by law, the
                        Service Provider will seek your consent to material
                        changes before they take effect.
                    </p>
                    <p>
                        Previous versions of this Privacy Policy will be
                        maintained and made available upon request by contacting
                        the Service Provider at <SupportEmail />.
                    </p>
                    <p className={styles.effective}>
                        This privacy policy is effective as of 2026-05-26.
                    </p>

                    <h2>Your Consent</h2>
                    <p>
                        Where processing is based on consent, you provide that
                        consent by affirmatively opting in to the relevant
                        feature or action. You may withdraw consent at any time
                        without affecting processing carried out before
                        withdrawal. Processing based on other lawful bases is
                        carried out as described above.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions regarding privacy while using
                        the Application, or have questions about the practices,
                        please contact the Service Provider via email at{" "}
                        <SupportEmail />.
                    </p>

                    <hr className={styles.divider} />
                </article>
            </main>

            <Footer />
        </div>
    );
}
