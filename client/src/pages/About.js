import React from "react";
import API from "../utils/API";
function About() {


    return (<div>
        <div className="py-16 bg-green1 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-base leading-6 text-white font-semibold tracking-wide uppercase">Happiness</p>
                    <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-lime1 sm:text-4xl sm:leading-10">
                        Happiness is something to strive for, but sometimes it isn't the easiest thing to attain. </h1>
                </div>
                <div className="relative z-10 text-base max-w-prose mx-auto mb-8 lg:max-w-5xl lg:mx-0 lg:pr-72">
                    <p className="text-lg text-white leading-7">Seeds is designed to help people be more happy by teaching them to
                    be mindful of what is causing negative patterns in their life in order to make positive changes, as well
                as training them to look for the good in even the worst of days.</p>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
                    <div className="relative z-10 mb-12 lg:mb-0">
                        <div className="mb-10 prose text-white mx-auto lg:max-w-none text-lg text-white leading-7">
                            <p>Using Seeds is extremely easy, just create an account and answer three simple questions each day:
                    </p>
                            <ul>
                                <li>How was your day?</li>
                                <li>Was there a reason for it being bad or good?</li>
                                <li>What is something you were grateful for today?</li>
                            </ul>
                            <p>Using these three questions, Seeds will organize and display every day you log in an easy to
                            digest format to help identify positive and negative patterns in your life as well as show you
                        moments you have been grateful for throughout your time using seeds.</p>
                        </div>
                    </div>
                    <div className="relative text-base max-w-prose mx-auto lg:max-w-none">
                        <svg className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                            width="404" height="384" fill="none" viewBox="0 0 404 384">
                            <defs>
                                <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20"
                                    patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
                        </svg>
                        <blockquote className="relative bg-white rounded-lg shadow-lg">
                            <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                                <img src="/images/seedsLogo.png" alt="Workcation" className="h-8" />
                                <div className="relative text-lg text-green1 leading-7 font-medium mt-8">
                                    <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 32 32">
                                        <path
                                            d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <p className="relative">But, in reality, being unhappy might also teach him something about
                                happiness.</p>
                                </div>
                            </div>
                            <cite className="flex items-center sm:items-start bg-lime1 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                                <div className="rounded-full border-2 border-white mr-4 sm:-mt-15 sm:mr-6">
                                    <img className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                                        src="/images/hector.png" alt="" />
                                </div>
                                <span className="text-white font-semibold leading-6">
                                    <strong className="text-green1 font-semibold">François Lelord :</strong>
                                        Hector and the Search for Happiness
                                </span>
                            </cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-8 bg-green1 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h1 className="mt-2 mb-2 text-3xl leading-8 font-extrabold tracking-tight text-lime1 sm:text-4xl sm:leading-10">
                    How can this information help us be happier?
        </h1>
                <p className="text-lg text-white leading-7">As humans sometimes it is difficult to analyze our feelings.
                It's much easier to just acknowledge that you are feeling happy or depressed and look no further. By asking
                ourselves why, it forces us to look deeper at that feeling and face what is keeping us from being as happy
            as we could be or appreciate something that is constantly bringing us joy. </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h1 className="mt-2 mb-2 text-3xl leading-8 font-extrabold tracking-tight text-lime1 sm:text-4xl sm:leading-10">
                    Why am I writing a moment to be grateful for each day?
        </h1>
                <p className="text-lg text-white leading-7">While it can seem silly, taking the time to look for a good
            moment from your day can actually train you to find positivity actively throughout your day. <a
                        className="text-lime1"
                        href="https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier">Studies</a> have
            shown that keeping a log of moments you were grateful for has a positive correlation to
            optimism and feelings of well being about your life. As the study mentions, correlation does not prove a
            direct cause and effect relationship but similar studies all support a relationship of some kind between
            gratitude and an individual's well being.</p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <h1 className="mt-2 mb-2 text-3xl leading-8 font-extrabold tracking-tight text-lime1 sm:text-4xl sm:leading-10">
                    Seeking Additional Help?
        </h1>
                <p className="text-lg text-white leading-7">We truly hope Seeds helps you make steps towards cultivating
                happiness in your life. We do want to note that this is not a replacement for therapy or seeking help from a
                mental health professional. If you are feeling depressed or having suicidal thoughts, please reach out to a
                trained mental health professional, we urge you to reach out to the Center for Addiction and Mental Health
                (CAMH). Just know that there are people who love and care for you, and we here at Seeds are rooting for you.
        </p>
            </div>
            <div className="py-2 bg-green1 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex text-base max-w-prose mx-auto lg:max-w-none">
                        <div className="rounded-md shadow">
                            <a href="https://www.mhanational.org/"
                                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-lime1 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">
                                Learn More!
                    </a>
                        </div>
                        <div className="rounded-md shadow ml-4">
                            <a href="http://www.camh.ca/"
                                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-lime1 bg-white hover:text-lime1 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out">
                                Visit CAMH
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
    );
}
export default About;
