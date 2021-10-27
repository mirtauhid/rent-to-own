import Link from 'next/link';
import React from 'react';
import HomeLayout from "../../Layouts/HomeLayout";

const index = () => {
  return (
    <HomeLayout>
      <div className="px-5 md:px-20 lg:px-28 py-12">
        <div className="my-6">
          <div className="md:flex justify-between items-center">
            <h2 className="text-3xl font-bold mb-4">Terms of use</h2>
            <p className="text-sm font-medium mb-4">
              Updated and Effective as of: October 27, 2021.
            </p>
          </div>
          <hr />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">What You Should Know</h2>
          <p className="mb-5">
            These Terms and Conditions  of Use (the "Terms") apply  to your use of any web site, application,  or other  online service (collectively,  the "Site") operated by RentToOwnRealty.ca ("RentToOwnRealty.ca",  "We",  "Us", "Our")  that posts these Terms. The goal of this Site is to provide you with access to information about RentToOwnRealty.ca and our  Rent- to-Own Marketplace & Marketing Service.
          </p>

          <p className="mb-5">
            Please read the Terms carefully before continuing on with your use of the Sites.  These Terms shall govern the use of the Sites and apply  to all Internet  traffic visiting the Sites. By accessing or using the Sites, you agree to the Terms. The Terms are meant to protect all of our  Sites visitors and your use of the Sites signifies your agreement with these Terms.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            RentToOwnRealty.ca Services and Products
          </h2>
          <p className="mb-5">
            <u>Compliance to Provincial Laws</u>
          </p>

          <p className="mb-5">
            RentToOwnRealty.ca services and products are only available where they can be legally  offered.  You may receive services in a different  way than what is described on our  website.  These services can be modified to comply  with enabling regulatory, legislative,  or compliance frameworks.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            What Do We Do
          </h2>
          <p className="mb-5">
            RentToOwnRealty.ca facilitates homeowners to arrange a private rent- to-own sale by
            markteing to a larger  audience on a streamlined platform.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">What We Don’t Do</h2>
          <p className="mb-5">
            We don't  trade in real property,  provide real estate advice, or offer  any services that
            would require licensing.  RentToOwnRealty.ca does not  act as a real estate agent  or
            broker.  We do not represent  sellers or buyers.  RentToOwnRealty.ca is not responsible
            for any outcome or consequences arising directly or indirectly from any action taken by
            consumers or users based on our service or any information we provide.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">These Terms of Use May Be Modified</h2>
          <p className="mb-5">
            RentToOwnRealty.ca is constantly improving its services to meet  our users' needs.  As
            they change often,  our Terms of Use and specific design of our services might  be
            modified.  We will notify  our users as soon as we can about  any changes  that  could
            affect them.  This may be done via email,  posting on our platform and/or  telephone
            calls.
          </p>

          <p className="mb-5">
            You can reject  the Terms  of Use at any time,  but this could result in you being unable
            to use the Service either  in part or whole.  You agree to any changes to the Terms and
            Use if you use the Services in any manner  after the change.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">Note That Information May Not Be Complete</h2>
          <p className="mb-5">
            All users are required to respect the information and descriptions  in our Terms of Use.
            However, these Terms of Use do not  include all terms, conditions, and exclusions  that
            may apply to products or services we offer.  Instead,  they are intended to provide a
            summary  of specific terms and conditions applicable to each product or service
            purchased.  Each set of Terms and Conditions  is different.  All products and services
            will be subject  to the terms and conditions  applicable to the particular  product  or
            service that is being bought  or obtained.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            RentToOwnRealty.ca Advertising Agreement
          </h2>
          <p className="mb-5">
            Apart  from these Terms of Use, RentToOwnRealty.ca users that  advertise properties
            on our platform agree to additional Terms and Conditions. These Terms and
            Conditions  govern different  aspects of our services.  Both parties  must agree to amend
            or modify  our  Terms and Conditions  in writing.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">Account Eligibility</h2>
          <p className="mb-5">
            To use the Service,  users must be at  least  18 years old.  You will need to give us some
            information about  you when you create an account.  This could include your email
            address and other contact information.  You acknowledge that  the information you
            provide is correct and that you have permission to contact  or add you to our mailing
            lists.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Personal Use
          </h2>
          <p className="mb-5">
            Only registered users have access to our dedicated messaging platform.  Our
            messaging platform allows legitimate interactions,  including asking questions  about
            properties,  exchanging information,  scheduling appointments,  and requesting
            showings.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Commercial Solicitation (anti-spam)
          </h2>
          <p className="mb-5">
            We prohibit  any commercial solicitations and we also prohibit  any other  interactions
            that do not serve the purpose of our messaging platform.
          </p>

          <p className="mb-5">
            We reserve the right  at all times to stop messaging,  and at our sole discretion.  This is
            without  prior  notice.  On a best effort  basis, we also monitor  the platform for suspicious
            activity and abuse.  If necessary, we will take appropriate action to suspend or
            terminate access.  We are not  responsible for any inconvenience or prejudice caused
            by the termination,  interruption,  or removal of these messages.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Advertisement
          </h2>
          <p className="mb-5">
            Advertisers of property are responsible for their  own advertisement.  This includes all
            text, images,  illustrations, and representations.  RentToOwnRealty.ca represents and
            warrants that  your advertisement  will not infringe on any common law, statute,  or other
            right  of any individual,  including any copyright,  trademark or service mark, tradename,
            trade name or patent.  It also must not  contain any material which is
            libelous.  RentToOwnRealty.ca reserves its right  to reject  any advertisement  it
            considers offensive, detrimental to the public  interest, objectionable,  or detrimental to
            its commercial interests.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Price Verified Icon
          </h2>
          <p className="mb-5">
            Home Sellers  who list their  property  on RentToOwnRealty.ca  may have a <strong>Price
              Verified</strong> icon on their rent- to-own listing which means  that an advertiser  has received
            professional assistance in setting their  asking price via an independent  third-party
            appraisal.  The Price Verified badge <strong>does not imply, warrant or guarantee</strong> the
            property  advertised is worth its advertised price.  Regardless of whether  the Price
            Verified icon appears,  users are encouraged to get qualified independent  advice about
            the property's value.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Errors in a Property Advertisement
          </h2>
          <p className="mb-5">
            RentToOwnRealty.ca cannot  verify that  the details  in advertisements  are
            complete.  RentToOwnRealty.ca is not  responsible for incorrectly or falsely advertised
            content.  Users agree to defend RentToOwnRealty.ca.  RentToOwnRealty.ca is not
            responsible for errors in property advertisements.  RentToOwnRealty.ca is not liable for
            any loss of profits  or indirect or consequential losses arising from any actions  taken or
            alleged to have been taken based upon the information in the advertisement.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Protection Of One's Self and Property
          </h2>
          <p className="mb-5">
            RentToOwnRealty.ca offers tools  and services that  facilitate communication between
            users. We don't  conduct background checks on users in order to verify their
            authenticity.  When interacting with other  users on the platform or in person,  the user is
            responsible for their  own safety and protection.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Third-Party Services
          </h2>
          <p className="mb-5">
            RentToOwnRealty.ca may allow you to purchase a service that allows  you to get  a
            coordinated set of services. These services may include services provided by Third
            Party Service Providers and not  RentToOwnRealty.ca.  Although RentToOwnRealty.ca
            allows users to connect with Third Party Service Providers, they are not  responsible or
            liable for the work or services delivered by these Third- Party Service Providers.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Photos & Images
          </h2>
          <p className="mb-5">
            RentToOwnRealty.ca and its affiliates  have taken or created photos  and/or  pictures.
            You acknowledge that  they are the owners of  these photos  and/or
            photos. RentToOwnRealty.ca has given permission for these images to not  be
            reproduced,  published,  republished or repurposed in any other  way than it intended.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Unauthorized Third-Party Linkage
          </h2>
          <p className="mb-5">
            Only authorized and approved parties  can link to the RentToOwnRealty.ca
            platform.  We reserve the right to disable or block any unauthorized link from any page,
            hyperlink,  or other mechanisms  to RentToOwnRealty.ca.  This policy can lead to the
            cancellation of your advertisement.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Third-party Advertisements and Links
          </h2>
          <p className="mb-5">
            RentToOwnRealty.ca may contain advertisements  or links to third- party sites.  Before
            you use the site or share information with it, please review any
            <Link href="privacy"><a className="text-primary"> privacy policies</a></Link>  . Third-
            party sites may have different  terms. You could give permission for them to use your
            data in ways that  we wouldn't.  We do not  endorse and are not responsible or
            accountable for any content,  advertising,  products or services, or any other  materials,
            that may be available from third- party sites.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Disclaimers and Warranty
          </h2>
          <p className="mb-5">
            The RentToOwnRealty.ca tools, communication protocols,  digital protocols, third- party
            connectivity,  and any other  information or materials you may share with the service are
            provided "as it is" without  warranty.  RentToOwnRealty.ca cannot  guarantee the results
            of using any part or all of the service.  RentToOwnRealty.ca is not responsible for any
            damages  or losses that  may result from your use of it.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Language
          </h2>
          <p className="mb-5">
            These terms of service, along with all documents  related to it, including notices,  were
            and will be written in English only.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Fraud & Scam Awareness
          </h2>
          <p className="mb-5">
            We do everything we can to prevent  misuse of our platform.  However, some people
            might  choose to abuse our  platform.  Scammers  are becoming more sophisticated.  It is
            therefore important  to exercise caution to avoid being a victim of  a scam as we cannot
            guarantee or warrant the complete elimination of all fraud & scams on our website.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Notification of Communication Monitoring and Recording
          </h2>
          <p className="mb-5">
            RentToOwnRealty.ca monitors  and records communication in order  to ensure that  we
            deliver  a service consistent  with our  service standards.  These recordings and
            monitorings  are used to resolve disputes,  as well as for quality  assurance and training
            purposes.  You consent to recording and monitoring communications between users via
            our  platform.  This could include text, email,  phone,  or other  communication methods.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Data security
          </h2>
          <p className="mb-5">
            RentToOwnRealty.ca uses security protocols  and frameworks to protect  user data and
            transmit  information through our platform.  We cannot  guarantee or warrant  that certain
            transmissions  will not be intercepted because of the nature of the internet.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Additional Terms & Conditions for Third Party Services
          </h2>
          <p className="mb-5">
            Some Services may include third- party tools. These third- party terms are applicable to
            certain aspects.  You must agree to these Terms and Conditions if your use of the
            Services is chosen.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Equal Rights and Equal Housing
          </h2>
          <p className="mb-5">
            At RentToOwnRealty.ca,  we support  affirmative advertising and marketing programs
            that do not discriminate due to sex, colour, race, and religion.  As such, these factors
            are excluded from our applications  to ensure a level playing field for all rent- to-own
            applicants.  At RentToOwnRealty.ca,  we believe all Canadians  should have the right  to
            homeownership and as such, it is pivotal our internal policies  reflect just that.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            What happens if a user doesn't comply with these policies?
          </h2>
          <p className="mb-5">
            A listing that contains language that  is in violation of  this nondiscrimination policy will
            be removed and the user asked to confirm his or her understanding and intention to
            adhere to the policy and its underlying principles.  RentToOwnRealty.ca can also
            suspend the user at its discretion.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-4">
            Copyright Matters
          </h2>
          <p className="mb-5">
            RentToOwnRealty.ca Inc. or its licensors or suppliers  own all information,  content  and
            services displayed on,  transmitted via, and used in connection to the Site.
          </p>

          <p className="mb-5">
            Without  our  permission,  you may not copy or scrape our  Content.  You must not
            decompile,  reverse engineer,  or disassemble any software,  products,  or processes
            accessible through this Site. Also, you may not insert  code or products, or manipulate
            the Content  or the site in any way.
          </p>

          <p className="mb-5">
            You are prohibited from republishing any part  of the Content  on the Internet,  Intranet
            or extranet  sites or other  publications.  You are prohibited from distributing any Content
            to anyone,  regardless of whether  you receive payment  or any other  consideration.
          </p>
        </div>
      </div>
    </HomeLayout>
  );
};

export default index;